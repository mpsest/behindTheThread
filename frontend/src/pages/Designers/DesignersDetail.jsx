import "../Artigos/Artigos.css";
import { useParams } from "react-router-dom";
import { useDesigner } from "../../hooks/useApi.js";

export default function DesignersDetail() {
  const { id } = useParams();
  const designer = useDesigner(id);

  if (!designer) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container">
      <h2>{designer.nome}</h2>
      <img src={designer.imagem} alt={designer.nome} />
      <div
        className="artigos-content"
        dangerouslySetInnerHTML={{ __html: designer.texto }}
      />
    </div>
  );
}
