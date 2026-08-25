import "./Footer.css";

export default function Footer() {
  return (
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
          <hr></hr>
        </div>
      </div>
    </footer>
  );
}
