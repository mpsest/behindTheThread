import "./Designers.css";
import PageTitle from "../../components/PageTitle.jsx";
import { useDesigners } from "../../hooks/useApi.js";
import ConteudoItem from "../../components/ConteudoItem.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useToast } from "../../contexts/ToastContext.jsx";

export default function Designers() {
  const designers = useDesigners();
  const { user, makeRequest } = useContext(AuthContext);
  const navigate = useNavigate();
  const { showToast } = useToast();

  function handleEdit(designerId) {
    navigate(`/conteudo/designer/${designerId}/editar`);
  }

  function handleDelete(designerId) {
    if (!window.confirm("Tem a certeza que deseja apagar este designer?")) {
      return;
    }

    makeRequest(`api/designers/${designerId}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        showToast("Designer apagado com sucesso!", "success");
        window.location.reload();
      } else {
        showToast("Erro ao apagar designer.", "error");
      }
    });
  }

  return (
    <>
      <PageTitle>DESIGNERS</PageTitle>
      <div className="artigos-container">
        {designers.map((designer) => (
          <ConteudoItem
            key={designer.id}
            conteudo={designer}
            type="designer"
            onEdit={user ? () => handleEdit(designer.id) : undefined}
            onDelete={user ? () => handleDelete(designer.id) : undefined}
          />
        ))}
      </div>
    </>
  );
}
