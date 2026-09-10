import "./Header.css";
import Menu from "./Menu";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar">
      <Menu />
      <h1>
        <Link to="/">BEHIND THE THREAD</Link>
      </h1>
      <Link className="header-contact-link" to="/contactos">
        Contactos
      </Link>
    </nav>
  );
}
