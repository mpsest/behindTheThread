import { Link } from "react-router-dom";
import "./Menu.css";
import { useEffect } from "react";

export default function Menu() {
  useEffect(() => {
    const dropdown = document.querySelector(".dropdown");
    const body = document.body;

    dropdown.addEventListener("show.bs.dropdown", () => {
      body.classList.add("dropdown-open");
    });

    dropdown.addEventListener("hide.bs.dropdown", () => {
      body.classList.remove("dropdown-open");
    });
  }, []);

  return (
    <div className="dropdown">
      <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Menu
      </button>
      <ul className="dropdown-menu justify-content-start justify-content-md-center pt-5 pt-md-0">
        <li>
          <Link to="/dirtytalks" className="dropdown-item">
            DIRTY TALKS
          </Link>
        </li>
        <li>
          <Link to="/artigos" className="dropdown-item">
            ARTIGOS
          </Link>
        </li>
        <li>
          <Link to="/designers" className="dropdown-item">
            DESIGNERS
          </Link>
        </li>
        <li>
          <Link to="/basededados" className="dropdown-item">
            BASE DE DADOS
          </Link>
        </li>
        <li>
          <Link to="/misturas" className="dropdown-item">
            MISTURAS
          </Link>
        </li>
        <li>
          <Link to="/contactos" className="dropdown-item">
            CONTACTOS
          </Link>
        </li>
      </ul>
    </div>
  );
}
