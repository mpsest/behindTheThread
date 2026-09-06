import "./MisturasDetail.css";
import PageTitle from "../../components/PageTitle.jsx";
import SquareButton from "../../components/SquareButton.jsx";
import { useParams, Link } from "react-router-dom";
import { useMistura } from "../../hooks/useApi.js";

function formatDate(date) {
  if (!date) return null;

  const parsedDate = new Date(date);

  return `a partir de ${parsedDate.toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "2-digit",
  })}`;
}

export default function MisturasDetail() {
  const { id } = useParams();
  const { mistura } = useMistura(id);

  const test = {
    id: 2,
    autor: "Inês Rocha",
    nome_projeto: "Cápsula Zero Desperdício",
    descricao:
      "Projeto fictício para criar uma pequena coleção com excedentes têxteis.",
    regime: "Híbrido",
    localizacao: "Lisboa",
    area: "Moda sustentável",
    data_inicio: "2026-10-01T00:00:00.000000Z",
    duracao: "6 semanas",
    orcamento: "850.00",
    n_colaboradores: 3,
    email: "ines.rocha@example.test",
    telemovel: "910000001",
    aprovado: true,
    lida: false,
    created_at: "2026-09-05T16:23:58.000000Z",
    updated_at: "2026-09-05T16:23:58.000000Z",
  };

  return (
    <>
      <PageTitle>MISTURAS</PageTitle>
      {mistura && (
        <div className="row">
          <div className="col-md-6 img-background">
            <div>
              <h5 className="misturas-detail-square">{mistura.area}</h5>
              <h4 className="misturas-detail-square">{mistura.nome_projeto}</h4>
              <h6>{mistura.autor}</h6>
              <h5 className="subtitle">Email</h5>
              <p>{mistura.email}</p>
              <h5 className="subtitle">Telemóvel</h5>
              <p>{mistura.telemovel}</p>
            </div>
            <div>
              <p className="misturas-detail-square">
                {formatDate(mistura.data_inicio)}
              </p>
              <p className="misturas-detail-square">{mistura.duracao}</p>
              <p className="misturas-detail-square">{mistura.localizacao}</p>
            </div>
          </div>
          <div className="col-md-6">
            <h5>Descrição</h5>
            <p>{mistura.descricao}</p>
            <h5>Regime</h5>
            <p>{mistura.regime}</p>
            <h5>Localização</h5>
            <p>{mistura.localizacao}</p>
            <h5>Data de início</h5>
            <p>{mistura.data_inicio}</p>
            <h5>Duração</h5>
            <p>{mistura.duracao}</p>
            <h5>Orçamento</h5>
            <p>{mistura.orcamento}</p>
            <h5>Número de colaboradores</h5>
            <p>{mistura.n_colaboradores}</p>
          </div>
        </div>
      )}
    </>
  );
}
// TODO: Adicionar {name} ao PageTitle
