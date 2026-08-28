import { Link } from "react-router-dom";

export default function Dashboard() {

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard!</p>

           <Link to="/signup">Criar administrador</Link> 


        </div>
    )
};
