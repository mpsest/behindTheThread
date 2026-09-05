import { useContext } from "react";
import { BaseDadosContext } from "../../contexts/BaseDadosContext";
import { useParams, Link } from "react-router-dom";
import SquareButton from "../../components/SquareButton";
import PageTitle from "../../components/PageTitle";
import "./BaseDadosDetail.css";

const RESOURCE_CONFIG = {
  espacos: {
    contextKey: "Espacos",
    label: "Espaços",
    columns: ["Nome", "Email", "Localidade"],
  },
  ferramentas: {
    contextKey: "Ferramentas",
    label: "Ferramentas",
    columns: ["Nome", "Descrição"],
  },
  conteudos: {
    contextKey: "Conteudos",
    label: "Conteúdos",
    columns: ["Nome", "Descrição"],
  },
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
  const config = RESOURCE_CONFIG[resource] ?? RESOURCE_CONFIG.espacos;
  const categoria = decodeRouteParam(type);
  const items = baseDados[config.contextKey]?.[categoria] ?? [];

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
              <th colSpan={config.columns.length}>{categoria}</th>
            </tr>
          </thead>
          <tbody>
            {baseDados.loading && (
              <tr className="base-dados-detail-row">
                <td
                  colSpan={config.columns.length}
                  className="p-2 p-md-3 p-lg-4"
                >
                  A carregar {config.label.toLowerCase()}...
                </td>
              </tr>
            )}
            {!baseDados.loading && items.length === 0 && (
              <tr className="base-dados-detail-row">
                <td
                  colSpan={config.columns.length}
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
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
