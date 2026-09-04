import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import SquareButton from "../../components/SquareButton";
import PageSubTitle from "../../components/PageSubTitle";
import LogoutButton from "../../components/LogoutButton.jsx";
import { useMisturasNaoLidas } from "../../hooks/useApi.js";

export default function Dashboard() {
  const naoLidas = useMisturasNaoLidas();

  return (
    <div>
      <PageTitle>DASHBOARD</PageTitle>
      <h4>Olá, !</h4>
      <div className="row">
        <div className="col-3 text-center">
          <PageSubTitle>Editar Conteúdos</PageSubTitle>

          <Link to="/conteudo/novo">
            <SquareButton className="m-2">Adicionar Conteúdo</SquareButton>
          </Link>

          <br />

          <Link to="/basedados">
            <SquareButton className="m-2">Editar Base de Dados</SquareButton>
          </Link>

          <br />

          <Link to="/misturas">
            <SquareButton className="m-2">Misturas</SquareButton>
          </Link>
        </div>

        <div className="col-3 text-center">
          <PageSubTitle>Gestão de Utilizadores</PageSubTitle>

          <Link to="/users">
            <SquareButton className="m-2">Gestão de Utilizadores</SquareButton>
          </Link>
        </div>

        <div className="col-3 text-center">
          <PageSubTitle>Gestão de Conta</PageSubTitle>

           <LogoutButton/>

          <br />

          <Link to="/users">
            <SquareButton className="m-2">Mudar Password</SquareButton>
          </Link>

          <br />

          <Link to="/newsletter/emails">
            <SquareButton className="m-2">Emails para Newsletter</SquareButton>
          </Link>
        </div>

         <div className="col-3 text-center boxy">
        <PageSubTitle>Mensagens</PageSubTitle>
        <Link to="/misturas/pendentes">
          <SquareButton className="m-2">
            {naoLidas} {naoLidas === 1 ? "mensagem por ler" : "mensagens por ler"}
          </SquareButton>
        </Link>
      </div>



       
      </div>
    </div>
  );
}
