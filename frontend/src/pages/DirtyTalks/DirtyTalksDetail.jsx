import "../Artigos/Artigos.css";
import "../Artigos/ArtigosDetail.css";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SquareButton from "../../components/SquareButton.jsx";
import Related from "../../components/Related.jsx";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useDirtyTalk } from "../../hooks/useApi.js";
import { useToast } from "../../contexts/ToastContext.jsx";

export default function DirtyTalksDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dirtyTalk = useDirtyTalk(id);
  const { user, makeRequest } = useContext(AuthContext);
  const { showToast } = useToast();

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
        showToast("Dirty Talk apagado com sucesso!", "success");
        navigate("/dirtytalks");
      } else {
        showToast("Erro ao apagar Dirty Talk.", "error");
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
      <div
        className="conteudo-html"
        dangerouslySetInnerHTML={{ __html: dirtyTalk.texto }}
      />
      <Related tipo="dirty_talk" id={dirtyTalk.id} />
    </div>
  );
}
