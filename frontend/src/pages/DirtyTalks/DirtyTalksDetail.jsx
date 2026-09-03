import "../Artigos/Artigos.css";
import { useParams } from "react-router-dom";
import { useDirtyTalk } from "../../hooks/useApi.js";

export default function DirtyTalksDetail() {
  const { id } = useParams();
  const dirtyTalk = useDirtyTalk(id);

  if (!dirtyTalk) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container">
      <h2>{dirtyTalk.titulo}</h2>
      <img src={dirtyTalk.imagem} alt={dirtyTalk.titulo} />
      <div
        className="dirtytalk-content"
        dangerouslySetInnerHTML={{ __html: dirtyTalk.texto }}
      />
    </div>
  );
}
