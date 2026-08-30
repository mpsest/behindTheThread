import { useContext } from "react";
import { BaseDadosContext } from "../../contexts/BaseDadosContext";
import { useParams, Link } from "react-router-dom";
import SquareButton from "../../components/SquareButton";
import "./FornecedoresDetail.css";

export default function FornecedoresDetail() {
  const { type } = useParams();
  const baseDados = useContext(BaseDadosContext);
  const fornecedores = baseDados.Fornecedores[type];

  return (
    <div>
      <div className="align-button">
        <Link to="/basededados">
          <SquareButton>Voltar atrás</SquareButton>
        </Link>
      </div>
      <table className="fornecedores-detail-table">
        <thead>
          <tr>
            <th colSpan={3}>{type}</th>
          </tr>
        </thead>
        <tbody>
          {fornecedores.map((fornecedor) => (
            <tr key={fornecedor.name} className="fornecedores-detail-row">
              <td>
                <a href={fornecedor.url}>{fornecedor.name}</a>
              </td>
              <td>{fornecedor.email}</td>
              <td>{fornecedor.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
