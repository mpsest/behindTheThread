import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";

export default function Dashboard() {
  return (
    <div>
      <PageTitle>DASHBOARD</PageTitle>
      <h4>Olá, !</h4>

      <Link to="/signup">Criar administrador</Link>
    </div>
  );
}
