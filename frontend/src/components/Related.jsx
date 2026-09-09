import "./Related.css";
import { Link } from "react-router-dom";
import SquareButton from "./SquareButton.jsx";
import { useRelated } from "../hooks/useApi.js";

const ROTAS = {
  artigo: "artigos",
  dirty_talk: "dirtytalks",
  designer: "designers",
};

const ETIQUETAS = {
  artigo: "Artigo",
  dirty_talk: "Dirty Talk",
  designer: "Designer",
};

export default function Related({ tipo, id }) {
  const { related, loading } = useRelated(tipo, id);

  if (loading || related.length === 0) {
    return null;
  }

  return (
    <section className="related">
      <h3 className="related-title">Relacionados</h3>
      <div className="related-list">
        {related.map((item) => (
          <article className="related-card" key={`${item.tipo}-${item.id}`}>
            <Link to={`/${ROTAS[item.tipo]}/${item.id}`} className="related-link">
              <img src={item.imagem} alt={item.titulo} />
              <span className="related-type">{ETIQUETAS[item.tipo]}</span>
              <div className="related-card-title">
                <SquareButton>{item.titulo}</SquareButton>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
