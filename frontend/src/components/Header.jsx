import "./Header.css";
import Menu from "./Menu";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Menu />
          <h1>BEHIND THE THREAD</h1>
          <button>Contactos</button>
        </div>
      </nav>
    </div>
  );
}
