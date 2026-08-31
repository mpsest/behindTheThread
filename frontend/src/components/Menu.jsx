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
          <a className="dropdown-item" href="#">
            DIRTY TALKS
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            ARTIGOS
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            DESIGNERS
          </a>
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
          <a className="dropdown-item" href="#">
            CONTACTOS
          </a>
        </li>
      </ul>
    </div>
  );
}
