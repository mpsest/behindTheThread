import { Link } from "react-router-dom";
import "./BaseDadosTable.css";

export default function BaseDadosTable({ title, items }) {
  const rows = [];

  for (let i = 0; i < items.length; i += 3) {
    rows.push(items.slice(i, i + 3));
  }

  return (
    <table className="base-dados-table">
      <thead>
        <tr>
          <th>{title}</th>
        </tr>
      </thead>
      <tbody className="row g-0">
        {rows.map((types, index) => (
          <tr key={index} className="table-basedados-row">
            {types.map((type) => (
              <td key={type} className="col-12 col-sm-6 col-md-4">
                <Link to={`/basededados/${title.toLowerCase()}/${type}`}>
                  {type}
                </Link>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
