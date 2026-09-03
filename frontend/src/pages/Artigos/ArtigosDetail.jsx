import "./ArtigosDetail.css";
import { useParams } from "react-router-dom";
import { useArtigo } from "../../hooks/useApi.js";

export default function ArtigosDetail() {
  const { id } = useParams();
  const artigo = useArtigo(id);

  if (!artigo) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container">
      <h2>{artigo.titulo}</h2>
      <img src={artigo.imagem} alt={artigo.titulo} />
      <div
        className="artigo-content"
        dangerouslySetInnerHTML={{ __html: artigo.texto }}
      />
    </div>
  );
}
