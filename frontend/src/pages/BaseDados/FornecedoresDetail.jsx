import { useContext } from "react";
import { BaseDadosContext } from "../../contexts/BaseDadosContext";
import { useParams, Link } from "react-router-dom";
import SquareButton from "../../components/SquareButton";

export default function FornecedoresDetail() {
  const { type } = useParams();
  const baseDados = useContext(BaseDadosContext);
  const fornecedores = baseDados.Fornecedores[type];

  return (
    <div>
      <SquareButton>
        <Link to="/basededados">Voltar atrás</Link>
      </SquareButton>
      <table>
        <thead>
          <tr>
            <th>{type}</th>
          </tr>
        </thead>
        <tbody>
          {fornecedores.map((fornecedor) => (
            <tr key={fornecedor.name}>
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
