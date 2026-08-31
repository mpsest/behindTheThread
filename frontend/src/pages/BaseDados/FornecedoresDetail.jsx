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
    <div className="fornecedores-detail-page container-fluid px-3 px-md-4 px-lg-0">
      <div className="align-button d-flex justify-content-end py-3 pe-md-2">
        <Link to="/basededados">
          <SquareButton>Voltar atrás</SquareButton>
        </Link>
      </div>
      <div className="table-responsive">
        <table className="fornecedores-detail-table">
          <thead>
            <tr>
              <th colSpan={3} className="py-3 px-2">
                {type}
              </th>
            </tr>
          </thead>
          <tbody>
            {fornecedores.map((fornecedor) => (
              <tr key={fornecedor.name} className="fornecedores-detail-row">
                <td className="p-2 p-md-3 p-lg-4">
                  <a href={fornecedor.url}>{fornecedor.name}</a>
                </td>
                <td className="p-2 p-md-3 p-lg-4">{fornecedor.email}</td>
                <td className="p-2 p-md-3 p-lg-4">{fornecedor.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
