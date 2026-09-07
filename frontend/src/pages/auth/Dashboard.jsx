import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import SquareButton from "../../components/SquareButton";
import PageSubTitle from "../../components/PageSubTitle";
import LogoutButton from "../../components/LogoutButton.jsx";
import { useMisturasNaoLidas } from "../../hooks/useApi.js";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useContext } from "react";
import "./Dashboard.css";

export default function Dashboard() {
  const naoLidas = useMisturasNaoLidas();
  const { user } = useContext(AuthContext);

  return (
    <div>
      <PageTitle>DASHBOARD</PageTitle>
      <div className="greeting-message">
        <h3>Olá, {user?.name}!</h3>
        <LogoutButton />
      </div>

      <div className="row">
        <div className="col-3 text-center boxy">
          <PageSubTitle>Conteúdos</PageSubTitle>

          <Link to="/conteudo/novo">
            <SquareButton className="m-2">Adicionar Conteúdo</SquareButton>
          </Link>

          <Link to="/dirtytalks">
            <SquareButton className="m-2">Editar Dirty Talks</SquareButton>
          </Link>

          <Link to="/artigos">
            <SquareButton className="m-2">Editar Artigos</SquareButton>
          </Link>

          <Link to="/designers">
            <SquareButton className="m-2">Editar Designers</SquareButton>
          </Link>

          <Link to="/basededados">
            <SquareButton className="m-2">Editar Base de Dados</SquareButton>
          </Link>
        </div>

        <div className="col-3 text-center boxy">
          <PageSubTitle>Misturas</PageSubTitle>

          <Link to="/misturas">
            <SquareButton className="m-2">Editar Misturas</SquareButton>
          </Link>

          <Link to="/misturas/pendentes">
            <SquareButton className="m-2">
              {naoLidas}{" "}
              {naoLidas === 1 ? "mensagem por ler" : "mensagens por ler"}
            </SquareButton>
          </Link>
        </div>

        <div className="col-3 text-center boxy">
          <PageSubTitle>Contas</PageSubTitle>

          <Link to="/mudar-password">
            <SquareButton className="m-2">Mudar Password</SquareButton>
          </Link>
          <Link to="/users">
            <SquareButton className="m-2">Gestão de Utilizadores</SquareButton>
          </Link>
        </div>

        <div className="col-3 text-center boxy">
          <PageSubTitle>Newsletter</PageSubTitle>
          <Link to="/newsletter/emails">
            <SquareButton className="m-2">Lista de subscritores</SquareButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
