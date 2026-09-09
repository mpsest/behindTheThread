import "../Artigos/Artigos.css";
import "../Artigos/ArtigosDetail.css";
import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SquareButton from "../../components/SquareButton.jsx";
import Related from "../../components/Related.jsx";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useDesigner } from "../../hooks/useApi.js";
import { useToast } from "../../contexts/ToastContext.jsx";

export default function DesignersDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const designer = useDesigner(id);
  const { user, makeRequest } = useContext(AuthContext);
  const { showToast } = useToast();

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
        showToast("Designer apagado com sucesso!", "success");
        navigate("/designers");
      } else {
        showToast("Erro ao apagar designer.", "error");
      }
    });
  }

  if (!designer) {
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
          <SquareButton as={Link} to="/designers" variant="dark">
            Voltar atrás
          </SquareButton>
        </div>
        <h2>{designer.nome}</h2>
        <div
          className="conteudo-html"
          dangerouslySetInnerHTML={{ __html: designer.texto }}
        />
      </div>
      <Related tipo="designer" id={designer.id} />
    </>
  );
}
