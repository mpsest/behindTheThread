import "./ArtigosDetail.css";
import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SquareButton from "../../components/SquareButton.jsx";
import Related from "../../components/Related.jsx";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useArtigo } from "../../hooks/useApi.js";
import { useToast } from "../../contexts/ToastContext.jsx";

export default function ArtigosDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const artigo = useArtigo(id);
  const { showToast } = useToast();
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
        showToast("Artigo apagado com sucesso!", "success");
        navigate("/artigos");
      } else {
        showToast("Erro ao apagar artigo.", "error");
      }
    });
  }

  if (!artigo) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <div className="container">
        <div className="conteudo-detail-toolbar">
          <div className="conteudo-detail-actions">
            {user && (
              <>
                <SquareButton onClick={handleEdit}>Editar</SquareButton>
                <SquareButton onClick={handleDelete}>Apagar</SquareButton>
              </>
            )}
          </div>
          <SquareButton as={Link} to="/artigos" variant="dark">
            Voltar atrás
          </SquareButton>
        </div>
        <h2>{artigo.titulo}</h2>
        <div
          className="conteudo-html"
          dangerouslySetInnerHTML={{ __html: artigo.texto }}
        />
      </div>
      <Related tipo="artigo" id={artigo.id} />
    </>
  );
}
