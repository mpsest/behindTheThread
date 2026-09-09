import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import SquareButton from "./SquareButton.jsx";
import { AuthContext } from "../contexts/AuthContext.jsx";
import { useToast } from "../contexts/ToastContext.jsx";

export default function Footer() {
  const { makeRequest } = useContext(AuthContext);
  const { showToast } = useToast();
  const [email, setEmail] = useState("");

  async function handleNewsletterSubmit(e) {
    e.preventDefault();

    try {
      const res = await makeRequest("api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Falha ao subscrever");

      showToast(
        "Estás na lista! Caso queiras sair, manda email para behindthethreadd@gmail.com.",
        "success",
      );
      setEmail("");
    } catch (err) {
      console.error(err);
      showToast("Não deu. Tenta outra vez!", "error");
    }
  }

  return (
    <footer className="site-footer">
      <div className="container site-footer-content row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 align-items-start align-items-lg-center text-start mx-auto">
        <Link to="/">
          <img
            src="/btt-footer.svg"
            alt="imagem com o título Behind the Thread"
          ></img>
        </Link>

        <div className="footer-menu">
          <button
            className="btn collapse-button"
            type="button"
            id="footerMenuButton"
            data-bs-toggle="collapse"
            data-bs-target="#footerMenuCollapse"
            aria-controls="footerMenuCollapse"
            aria-expanded="false"
          >
            Menu
          </button>
          <div
            className="collapse footer-menu-items"
            id="footerMenuCollapse"
            aria-labelledby="footerMenuButton"
          >
            <Link className="dropdown-item" to="#">
              Dirty Talks
            </Link>
            <Link className="dropdown-item" to="#">
              Artigos
            </Link>
            <Link className="dropdown-item" to="#">
              Designers
            </Link>
            <Link className="dropdown-item" to="#">
              Base de Dados
            </Link>
            <Link className="dropdown-item" to="/misturas">
              Misturas
            </Link>
            <Link className="dropdown-item" to="/contactos">
              Contactos
            </Link>
            <div className="circle-container">
              <Link className="dropdown-item" to="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-menu">
          <button
            className="btn collapse-button"
            type="button"
            id="footerSocialButton"
            data-bs-toggle="collapse"
            data-bs-target="#footerSocialCollapse"
            aria-controls="footerSocialCollapse"
            aria-expanded="false"
          >
            Redes Sociais
          </button>
          <div
            className="collapse footer-menu-items"
            id="footerSocialCollapse"
            aria-labelledby="footerSocialButton"
          >
            <Link
              className="dropdown-item"
              to="mailto:behindthethreadd@gmail.com"
              target="_blank"
            >
              Email
            </Link>
            <Link
              className="dropdown-item"
              to="https://www.instagram.com/behindthe_thread/"
              target="_blank"
            >
              Instagram
            </Link>
            <Link
              className="dropdown-item"
              to="https://www.tiktok.com/@behind.the.thread8?_r=1&_t=ZN-99JfMe4wKQA"
              target="_blank"
            >
              TikTok
            </Link>
            <Link
              className="dropdown-item"
              to="https://www.youtube.com/@behindthethread-k4c"
              target="_blank"
            >
              Youtube
            </Link>
          </div>
        </div>

        <div className="footer-menu">
          <button
            className="btn collapse-button"
            type="button"
            id="footerNewsletterButton"
            data-bs-toggle="collapse"
            data-bs-target="#footerNewsletterCollapse"
            aria-controls="footerNewsletterCollapse"
            aria-expanded="false"
          >
            Newsletter
          </button>
          <div
            className="collapse footer-menu-items"
            id="footerNewsletterCollapse"
            aria-labelledby="footerNewsletterButton"
          >
            <form
              className="footer-newsletter-form"
              onSubmit={handleNewsletterSubmit}
            >
              <input
                type="email"
                name="email"
                placeholder="Coloca aqui o teu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <SquareButton type="submit">Subscrever</SquareButton>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
