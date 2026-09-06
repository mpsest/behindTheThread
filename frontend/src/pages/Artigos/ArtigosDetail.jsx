import "./ArtigosDetail.css";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SquareButton from "../../components/SquareButton.jsx";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useArtigo } from "../../hooks/useApi.js";

export default function ArtigosDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const artigo = useArtigo(id);
  const { user, makeRequest } = useContext(AuthContext);

  function handleEdit() {
    navigate(`/conteudo/artigo/${id}/editar`);
  }

  function handleDelete() {
    if (!window.confirm("Tem a certeza que deseja apagar este artigo?")) {
      return;
    }

    makeRequest(`api/artigos/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        alert("Artigo apagado com sucesso!");
        navigate("/artigos");
      } else {
        alert("Erro ao apagar artigo.");
      }
    });
  }

  if (!artigo) {
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
      <h2>{artigo.titulo}</h2>
      <img src={artigo.imagem} alt={artigo.titulo} />
      <div
        className="artigo-content"
        dangerouslySetInnerHTML={{ __html: artigo.texto }}
      />
    </div>
  );
}
