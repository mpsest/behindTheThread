import "./Artigos.css";
import PageTitle from "../../components/PageTitle";
import { useArtigos } from "../../hooks/useApi.js";
import { useNavigate } from "react-router-dom";
import ConteudoItem from "../../components/ConteudoItem.jsx";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext.jsx";

export default function Artigos() {
  const artigos = useArtigos();
  const { user, makeRequest } = useContext(AuthContext);
  const navigate = useNavigate();

  // Admin functions for editing and deleting articles
  function handleEdit(artigoId) {
    navigate(`/conteudo/artigo/${artigoId}/editar`);
  }

  function handleDelete(artigoId) {
    if (!window.confirm("Tem a certeza que deseja apagar este artigo?")) {
      return;
    }

    makeRequest(`api/artigos/${artigoId}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        alert("Artigo apagado com sucesso!");
        window.location.reload();
      } else {
        alert("Erro ao apagar artigo.");
      }
    });
  }

  return (
    <>
      <PageTitle className="artigos-title">ARTIGOS</PageTitle>
      <div className="artigos-container">
        {artigos.map((artigo) => (
          <ConteudoItem
            key={artigo.id}
            conteudo={artigo}
            type="artigo"
            onEdit={user ? () => handleEdit(artigo.id) : undefined}
            onDelete={user ? () => handleDelete(artigo.id) : undefined}
          />
        ))}
      </div>
    </>
  );
}
