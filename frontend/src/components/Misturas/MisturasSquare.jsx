import "./MisturasSquare.css";

function formatDate(date) {
  if (!date) return null;

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return `a partir de ${date}`;
  }

  return `a partir de ${parsedDate.toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "2-digit",
  })}`;
}

export default function MisturasSquare({ mistura, index }) {
  if (!mistura) return null;

  const title = mistura.nome_projeto;
  const area = mistura.area;
  const startDate = formatDate(mistura?.data_inicio);
  const duration = mistura.duracao;
  const location = mistura.localizacao ?? mistura.regime;

  /* Variável para alternar entre 3 backgrounds consoante o índice da Mistura */
  const variant = index % 3;

  return (
    <div className={`misturas-square misturas-square-bg-${variant}`}>
      <h2 className="misturas-square-title">{title}</h2>
      <div className="misturas-square-area">{area}</div>
      <div className="misturas-square-meta">
        {startDate && <span>{startDate}</span>}
        {duration && <span>{duration}</span>}
        {location && <span>{location}</span>}
      </div>
    </div>
  );
}
