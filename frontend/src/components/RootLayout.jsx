import { Outlet } from "react-router-dom";
import "./RootLayout.css";
import Header from "./Header";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div class="dropdown-center">
            <button
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Menu
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  DIRTY TALKS
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  ARTIGOS
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  DESIGNERS
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  BASE DE DADOS
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  MISTURAS
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  SORTUDOS
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  CONTACTOS
                </a>
              </li>
            </ul>
          </div>
          <h1>BEHIND THE THREAD</h1>
          <button>Contactos</button>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container site-footer-content">
          <img
            src="/btt-footer.svg"
            alt="imagem com o título Behind the Thread"
          ></img>
          <div className="footer-headings">
            Menu
            <ul>
              <li>
                <a href="#">Dirty Talks</a>
              </li>
              <li>
                <a href="#">Artigos</a>
              </li>
              <li>
                <a href="#">Designers</a>
              </li>
              <li>
                <a href="#">Base de Dados</a>
              </li>
              <li>
                <a href="#">Misturas</a>
              </li>
              <li>
                <a href="#">Sortudos</a>
              </li>
              <li>
                <a href="#">Contactos</a>
              </li>
            </ul>
          </div>
          <div className="footer-headings">
            Contactos
            <ul>
              <li>
                <a href="#">Email</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">TikTok</a>
              </li>
              <li>
                <a href="#">Youtube</a>
              </li>
            </ul>
          </div>
          <div className="footer-headings">
            Newsletter
            <p>Coloca aqui o teu email</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
