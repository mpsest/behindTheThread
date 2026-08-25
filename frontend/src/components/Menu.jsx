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
      <ul className="dropdown-menu">
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
          <a className="dropdown-item" href="#">
            BASE DE DADOS
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/misturas">
            MISTURAS
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            SORTUDOS
          </a>
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
