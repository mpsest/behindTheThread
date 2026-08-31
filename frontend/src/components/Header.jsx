import "./Header.css";
import Menu from "./Menu";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex align-items-center justify-content-between gap-2 gap-sm-3">
          <Menu />
          <h1 className="flex-fill text-center mb-0">
            <Link to="/">BEHIND THE THREAD</Link>
          </h1>
          <Link className="header-contact-link" to="/contactos">
            Contactos
          </Link>
        </div>
      </nav>
    </div>
  );
}
