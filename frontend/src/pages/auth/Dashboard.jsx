import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";

export default function Dashboard() {
  return (
    <div>
      <PageTitle>DASHBOARD</PageTitle>
      <h4>Olá, {user?.name}!</h4>
      <div>
        <Link to="/conteudo/novo">Criar Novo Conteúdo</Link>
        <Link to="/users">Gestão de Utilizadores</Link>
      </div>
    </div>
  );
}
