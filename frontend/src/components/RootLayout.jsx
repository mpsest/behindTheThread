import "./RootLayout.css";

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
            </ul>
          </div>
          <h1>BEHIND THE THREAD</h1>
          <button>Contactos</button>
        </div>
      </nav>
      <main></main>
      <footer className="site-footer">
        <div className="container site-footer-content">
          <img
            src="/btt-footer.svg"
            alt="imagem com o título Behind the Thread"
          ></img>
          <div>menu</div>
          <div>social media</div>
          <div>newsletter</div>
        </div>
      </footer>
    </div>
  );
}
