import "../Artigos/Artigos.css";
import "../Artigos/ArtigosDetail.css";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SquareButton from "../../components/SquareButton.jsx";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useDirtyTalk } from "../../hooks/useApi.js";

export default function DirtyTalksDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dirtyTalk = useDirtyTalk(id);
  const { user, makeRequest } = useContext(AuthContext);

  function handleEdit() {
    navigate(`/conteudo/dirty_talk/${id}/editar`);
  }

  function handleDelete() {
    if (!window.confirm("Tem a certeza que deseja apagar este Dirty Talk?")) {
      return;
    }

    makeRequest(`api/dirty-talks/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        alert("Dirty Talk apagado com sucesso!");
        navigate("/dirtytalks");
      } else {
        alert("Erro ao apagar Dirty Talk.");
      }
    });
  }

  if (!dirtyTalk) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container">
      {user && (
        <div className="conteudo-detail-actions">
          <SquareButton onClick={handleEdit}>Editar</SquareButton>
          <SquareButton onClick={handleDelete}>Apagar</SquareButton>
        </div>
      )}
      <h2>{dirtyTalk.titulo}</h2>
      <img src={dirtyTalk.imagem} alt={dirtyTalk.titulo} />
      <div
        className="dirtytalk-content"
        dangerouslySetInnerHTML={{ __html: dirtyTalk.texto }}
      />
    </div>
  );
}
