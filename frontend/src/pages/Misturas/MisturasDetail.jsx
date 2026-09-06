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

  return (
    <>
      <PageTitle>MISTURAS</PageTitle>
      {mistura && (
        <div className="mistura-detail-div flex-column flex-md-row">
          <div className="mistura-detail-left mistura-img-background">
            <div className="d-flex flex-column align-items-start">
              <h5 className="misturas-detail-square">{mistura.area}</h5>
              <h4 className="misturas-detail-square">{mistura.nome_projeto}</h4>
              <h6 className="pt-2">{mistura.autor}</h6>
            </div>
            <div className="d-flex gap-3 flex-wrap">
              <p className="misturas-detail-square">
                {formatDate(mistura.data_inicio)}
              </p>
              <p className="misturas-detail-square">{mistura.duracao}</p>
              <p className="misturas-detail-square">{mistura.localizacao}</p>
            </div>
          </div>
          <div className="mistura-detail-right">
            <div>
              <h5>Descrição</h5>
              <p>{mistura.descricao}</p>
            </div>
            <div>
              <h5>Regime</h5>
              <p>{mistura.regime}</p>
            </div>
            <div>
              <h5>Localização</h5>
              <p>{mistura.localizacao}</p>
            </div>
            <div>
              <h5>Data de início</h5>
              <p>{new Date(mistura.data_inicio).toLocaleDateString()}</p>
            </div>
            <div>
              <h5>Duração</h5>
              <p>{mistura.duracao}</p>
            </div>
            <div>
              <h5>Orçamento</h5>
              <p>{mistura.orcamento}</p>
            </div>
            <div>
              <h5>Número de colaboradores</h5>
              <p>{mistura.n_colaboradores}</p>
            </div>
            <div>
              <h5 className="subtitle">Email</h5>
              <p>{mistura.email}</p>
            </div>
            <div>
              <h5 className="subtitle">Telemóvel</h5>
              <p>{mistura.telemovel}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
