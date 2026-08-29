import { Link } from "react-router-dom";

export default function BaseDadosTable({ title, items }) {
  const rows = [];

  for (let i = 0; i < items.length; i += 3) {
    rows.push(items.slice(i, i + 3));
  }

  return (
    <table>
      <thead>
        <tr>
          <th>{title}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((types, index) => (
          <tr key={index} className="table-basedados-row">
            {types.map((type) => (
              <td key={type}>
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
