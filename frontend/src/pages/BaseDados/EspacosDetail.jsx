import { useContext } from "react";
import { BaseDadosContext } from "../../contexts/BaseDadosContext";
import { useParams, Link } from "react-router-dom";
import SquareButton from "../../components/SquareButton";
import "./EspacosDetail.css";

export default function EspacosDetail() {
  const { type } = useParams();
  const baseDados = useContext(BaseDadosContext);
  const espacos = baseDados.Espacos[type];

  return (
    <div className="espacos-detail-page container-fluid px-3 px-md-4 px-lg-0">
      <div className="align-button d-flex justify-content-end py-3 pe-md-2">
        <Link to="/basededados">
          <SquareButton>Voltar atrás</SquareButton>
        </Link>
      </div>
      <div className="table-responsive">
        <table className="espacos-detail-table">
          <thead>
            <tr>
              <th colSpan={3} className="py-3 px-2">
                {type}
              </th>
            </tr>
          </thead>
          <tbody>
            {espacos.map((espaco) => (
              <tr key={espaco.name} className="espacos-detail-row">
                <td className="p-2 p-md-3 p-lg-4">
                  <a href={espaco.url}>{espaco.name}</a>
                </td>
                <td className="p-2 p-md-3 p-lg-4">{espaco.email}</td>
                <td className="p-2 p-md-3 p-lg-4">{espaco.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
