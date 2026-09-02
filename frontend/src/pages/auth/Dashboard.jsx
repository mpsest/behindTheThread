import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";

export default function Dashboard() {
  return (
    <div>
      <PageTitle>DASHBOARD</PageTitle>
      <h4>Olá, !</h4>

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard!</p>

           <Link to="/users">Gestão de Utilizadores</Link> 


        </div>
    )
};
