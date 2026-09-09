import ContactForm from "../components/ContactForm";
import PageTitle from "../components/PageTitle";
import "./Contactos.css";

const TEAM = [
  {
    name: "Bárbara Cruz",
    role: "Developer",
    linkedin: "www.linkedin.com/in/barbara-cunha-cruz",
  },
  {
    name: "Beatriz Miranda",
    role: "Designer",
    linkedin: "https://www.linkedin.com/in/bibiaa",
  },
  {
    name: "Filipe Cruz",
    role: "Developer",
    linkedin: "https://www.linkedin.com/in/infcruz/",
  },
  {
    name: "Francisco Brito",
    role: "Designer",
    linkedin: "www.linkedin.com/in/xiquito",
  },
  {
    name: "Paula Esteves",
    role: "Developer",
    linkedin: "https://www.linkedin.com/in/paulasesteves/",
  },
];

const SOCIALS = [
  { name: "Instagram", url: "https://www.instagram.com/behindthe_thread/" },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@behind.the.thread8?_r=1&_t=ZN-99JfMe4wKQA",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@behindthethread-k4c?si=_9ktsywN39_XD9hW",
  },
];

function getExternalUrl(url) {
  return url.startsWith("http") ? url : `https://${url}`;
}

export default function ContactPage() {
  function handleSubmit(data) {
    console.log(data);
    // fetch/axios para a API Laravel aqui
  }

  return (
    <div className="container-fluid px-0">
      <PageTitle>
        CONTACTOS
        <div className="mb-3"></div>
      </PageTitle>
      <div className="contactos-content px-3 px-md-5 py-4 py-md-5">
        <div className="contactos-info">
          <section className="contactos-section">
            <h2>Contactos</h2>
            <div className="contactos-links">
              <a href="tel:+351917817418">+351 917 817 418</a>
              <a href="mailto:behindthethreadd@gmail.com">
                behindthethreadd@gmail.com
              </a>
            </div>
          </section>

          <section className="contactos-section">
            <h2>Créditos</h2>
            <ul className="contactos-credits">
              <li className="subtitle">
                DESIGNERS E <br /> DEVELOPERS
              </li>
              {TEAM.map((person) => (
                <li key={person.linkedin}>
                  <a
                    href={getExternalUrl(person.linkedin)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {person.name}, {person.role}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="contactos-section">
            <h2>Redes sociais</h2>
            <div className="contactos-socials">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </section>
        </div>

        <div className="contactos-form">
          <ContactForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
