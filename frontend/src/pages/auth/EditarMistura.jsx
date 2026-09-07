import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle.jsx";
import MisturasForm from "../../components/Misturas/MisturasForm.jsx";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useMistura } from "../../hooks/useApi.js";
import { useToast } from "../../contexts/ToastContext.jsx";

function toFormData(mistura) {
  return {
    creator: mistura.autor ?? "",
    projectName: mistura.nome_projeto ?? "",
    description: mistura.descricao ?? "",
    regime: mistura.regime ?? "",
    location: mistura.localizacao ?? "",
    area: mistura.area
      ? mistura.area.split(",").map((area) => area.trim())
      : [],
    startDate: mistura.data_inicio ?? "",
    duration: mistura.duracao ?? "",
    budget: mistura.orcamento ?? "",
    numCollaborators: mistura.n_colaboradores ?? "",
    email: mistura.email ?? "",
    phone: mistura.telemovel ?? "",
  };
}

export default function EditarMistura() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { makeRequest } = useContext(AuthContext);
  const { mistura, loading, error } = useMistura(id);
  const { showToast } = useToast();

  async function handleSubmit(formData) {
    const payload = {
      autor: formData.creator,
      nome_projeto: formData.projectName,
      descricao: formData.description,
      regime: formData.regime,
      localizacao: formData.location || null,
      area: formData.area.join(", "),
      data_inicio: formData.startDate,
      duracao: formData.duration,
      orcamento: formData.budget
        ? Number(String(formData.budget).replace(/[^\d.]/g, ""))
        : null,
      n_colaboradores: formData.numCollaborators
        ? Number(formData.numCollaborators)
        : null,
      email: formData.email,
      telemovel: formData.phone,
    };

    const res = await makeRequest(`api/misturas/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      showToast("Mistura atualizada com sucesso!", "success");
      navigate(`/misturas/${id}`);
    } else {
      const err = await res.json().catch(() => null);
      showToast(err?.message ?? "Erro ao atualizar mistura.", "error");
    }
  }

  return (
    <>
      <PageTitle>EDITAR MISTURA</PageTitle>
      <div className="container-fluid d-flex justify-content-center pt-3 pb-3">
        {loading && <p className="misturas-status">A carregar mistura...</p>}
        {error && (
          <p className="misturas-status">
            Não foi possível carregar a mistura.
          </p>
        )}
        {mistura && (
          <MisturasForm
            initialValues={toFormData(mistura)}
            onSubmit={handleSubmit}
            submitLabel="Guardar"
          />
        )}
      </div>
    </>
  );
}
