import { useContext, useState } from "react";
import { BaseDadosContext } from "../../contexts/BaseDadosContext";
import { useParams, Link } from "react-router-dom";
import SquareButton from "../../components/SquareButton";
import PageTitle from "../../components/PageTitle";
import { AuthContext } from "../../contexts/AuthContext";
import BaseDadosFormModal from "./BaseDadosFormModal";
import "./BaseDadosDetail.css";

const RESOURCE_CONFIG = {
  espacos: {
    contextKey: "Espacos",
    endpoint: "api/espacos",
    label: "Espaços",
    columns: ["Nome", "Email", "Localidade"],
  },
  ferramentas: {
    contextKey: "Ferramentas",
    endpoint: "api/ferramentas",
    label: "Ferramentas",
    columns: ["Nome", "Descrição"],
  },
  conteudos: {
    contextKey: "Conteudos",
    endpoint: "api/conteudos",
    label: "Conteúdos",
    columns: ["Nome", "Descrição"],
  },
};

const EMPTY_FORM = {
  nome: "",
  site: "",
  email: "",
  localidade: "",
  descricao: "",
  categoria: "",
};

function decodeRouteParam(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export default function BaseDadosDetail() {
  const { resource = "espacos", type } = useParams(); // valor default
  const baseDados = useContext(BaseDadosContext);
  const { user, makeRequest } = useContext(AuthContext);
  const config = RESOURCE_CONFIG[resource] ?? RESOURCE_CONFIG.espacos;
  const categoria = decodeRouteParam(type);
  const items = baseDados[config.contextKey]?.[categoria] ?? [];
  const [editingItem, setEditingItem] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);

  function startCreate() {
    if (!user) return;

    setEditingItem(null);
    setFormData({
      ...EMPTY_FORM,
      categoria,
    });
    setShowForm(true);
  }

  function startEdit(item) {
    if (!user) return;

    setEditingItem(item);
    setFormData({
      ...EMPTY_FORM,
      nome: item.nome ?? "",
      site: item.site ?? "",
      email: item.email ?? "",
      localidade: item.localidade ?? "",
      descricao: item.descricao ?? "",
      categoria: item.categoria ?? categoria,
    });
    setShowForm(true);
  }

  function closeEdit() {
    setEditingItem(null);
    setShowForm(false);
    setFormData(EMPTY_FORM);
    setSaving(false);
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!user) return;

    const payload =
      resource === "espacos"
        ? {
            nome: formData.nome,
            site: formData.site || null,
            email: formData.email || null,
            localidade: formData.localidade || null,
            categoria: formData.categoria,
          }
        : {
            nome: formData.nome,
            site: formData.site || null,
            descricao: formData.descricao || null,
            categoria: formData.categoria,
          };

    setSaving(true);

    try {
      const isEditing = Boolean(editingItem?.id);
      const response = await makeRequest(
        isEditing ? `${config.endpoint}/${editingItem.id}` : config.endpoint,
        {
          method: isEditing ? "PUT" : "POST",
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        throw new Error("Falha ao guardar o elemento.");
      }

      await baseDados.refetch();
      closeEdit();
    } catch (err) {
      console.error(err);
      alert("Não foi possível guardar este elemento.");
      setSaving(false);
    }
  }

  async function handleDelete(item) {
    if (!item.id || !user) return;

    const confirmDelete = window.confirm(
      `Tens a certeza que queres apagar "${item.nome}"?`,
    );

    if (!confirmDelete) return;

    try {
      const response = await makeRequest(`${config.endpoint}/${item.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Falha ao apagar o elemento.");
      }

      await baseDados.refetch();
    } catch (err) {
      console.error(err);
      alert("Não foi possível apagar este elemento.");
    }
  }

  return (
    <div
      className={`${resource}-detail-page container-fluid px-3 px-md-4 px-lg-0`}
    >
      <PageTitle className="border-0">BASE DE DADOS</PageTitle>
      <div className="align-button d-flex justify-content-end py-3 pe-md-2">
        <Link to="/basededados">
          <SquareButton>Voltar atrás</SquareButton>
        </Link>
      </div>
      <div className="table-responsive">
        <table className="base-dados-detail-table">
          <thead>
            <tr>
              <th colSpan={config.columns.length + (user ? 1 : 0)}>
                {categoria}
              </th>
            </tr>
          </thead>
          <tbody>
            {baseDados.loading && (
              <tr className="base-dados-detail-row">
                <td
                  colSpan={config.columns.length + (user ? 1 : 0)}
                  className="p-2 p-md-3 p-lg-4"
                >
                  A carregar {config.label.toLowerCase()}...
                </td>
              </tr>
            )}
            {!baseDados.loading && items.length === 0 && (
              <tr className="base-dados-detail-row">
                <td
                  colSpan={config.columns.length + (user ? 1 : 0)}
                  className="p-2 p-md-3 p-lg-4"
                >
                  Sem dados nesta categoria.
                </td>
              </tr>
            )}
            {!baseDados.loading &&
              items.map((item) => (
                <tr
                  key={item.id ?? item.nome}
                  className="base-dados-detail-row"
                >
                  <td className="p-2 p-md-3 p-lg-4">
                    {item.site ? (
                      <a href={item.site}>{item.nome}</a>
                    ) : (
                      item.nome
                    )}
                  </td>
                  {resource === "espacos" ? (
                    <>
                      <td className="p-2 p-md-3 p-lg-4">{item.email}</td>
                      <td className="p-2 p-md-3 p-lg-4">{item.localidade}</td>
                    </>
                  ) : (
                    <td className="p-2 p-md-3 p-lg-4">{item.descricao}</td>
                  )}
                  {user && (
                    <td className="p-2 p-md-3 p-lg-4">
                      <div className="base-dados-detail-actions">
                        <SquareButton onClick={() => startEdit(item)}>
                          Editar
                        </SquareButton>
                        <SquareButton onClick={() => handleDelete(item)}>
                          Apagar
                        </SquareButton>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            {!baseDados.loading && user && (
              <tr className="base-dados-detail-row">
                <td
                  colSpan={config.columns.length + 1}
                  className="base-dados-detail-add-cell p-2 p-md-3 p-lg-4"
                >
                  <SquareButton onClick={startCreate}>Adicionar</SquareButton>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {user && showForm && (
        <BaseDadosFormModal
          resource={resource}
          label={config.label}
          editingItem={editingItem}
          formData={formData}
          saving={saving}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onClose={closeEdit}
        />
      )}
    </div>
  );
}
