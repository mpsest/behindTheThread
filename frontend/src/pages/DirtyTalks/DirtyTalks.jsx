import PageTitle from "../../components/PageTitle.jsx";
import "./DirtyTalks.css";
import { useDirtyTalks } from "../../hooks/useApi.js";
import ConteudoItem from "../../components/ConteudoItem.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useToast } from "../../contexts/ToastContext.jsx";

export default function DirtyTalks() {
  const dirtyTalks = useDirtyTalks();
  const { user, makeRequest } = useContext(AuthContext);
  const navigate = useNavigate();
  const { showToast } = useToast();

  function handleEdit(dirtyTalkId) {
    navigate(`/conteudo/dirty_talk/${dirtyTalkId}/editar`);
  }

  function handleDelete(dirtyTalkId) {
    if (!window.confirm("Tem a certeza que deseja apagar este Dirty Talk?")) {
      return;
    }

    makeRequest(`api/dirty-talks/${dirtyTalkId}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        showToast("Dirty Talk apagado com sucesso!", "success");
        window.location.reload();
      } else {
        showToast("Erro ao apagar Dirty Talk.", "error");
      }
    });
  }

  return (
    <>
      <PageTitle>DIRTY TALKS</PageTitle>
      <div className="artigos-container">
        {dirtyTalks.map((dirtyTalk) => (
          <ConteudoItem
            key={dirtyTalk.id}
            conteudo={dirtyTalk}
            type="dirtytalk"
            onEdit={user ? () => handleEdit(dirtyTalk.id) : undefined}
            onDelete={user ? () => handleDelete(dirtyTalk.id) : undefined}
          />
        ))}
      </div>
    </>
  );
}
