import "../Artigos/Artigos.css";
import "../Artigos/ArtigosDetail.css";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SquareButton from "../../components/SquareButton.jsx";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useDesigner } from "../../hooks/useApi.js";

export default function DesignersDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const designer = useDesigner(id);
  const { user, makeRequest } = useContext(AuthContext);

  function handleEdit() {
    navigate(`/conteudo/designer/${id}/editar`);
  }

  function handleDelete() {
    if (!window.confirm("Tem a certeza que deseja apagar este designer?")) {
      return;
    }

    makeRequest(`api/designers/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        alert("Designer apagado com sucesso!");
        navigate("/designers");
      } else {
        alert("Erro ao apagar designer.");
      }
    });
  }

  if (!designer) {
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
      <h2>{designer.nome}</h2>
      <img src={designer.imagem} alt={designer.nome} />
      <div
        className="artigos-content"
        dangerouslySetInnerHTML={{ __html: designer.texto }}
      />
    </div>
  );
}
