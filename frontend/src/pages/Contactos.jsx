import ContactForm from "../components/ContactForm";
import PageTitle from "../components/PageTitle";
import "./Contactos.css";

const TEAM = [
  { name: "Bárbara Cruz", role: "Developer", email: "cruzbarbara95@gmail.com" },
  {
    name: "Beatriz Miranda",
    role: "Designer",
    email: "beatrizmiranda2901@gmail.com",
  },
  { name: "Filipe Cruz", role: "Developer", email: "inf.fcruz@gmail.com" },
  {
    name: "Francisco Brito",
    role: "Designer",
    email: "franciscobritofb8@gmail.com",
  },
  { name: "Paula Esteves", role: "Developer", email: "mpsest6@gmail.com" },
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

export default function ContactPage() {
  function handleSubmit(data) {
    console.log(data);
    // fetch/axios para a API Laravel aqui
  }

  return (
    <div className="contactos-page container-fluid px-0">
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
                <li key={person.email}>
                  {person.name}, {person.role}
                  <br />
                  <a href={`mailto:${person.email}`}>{person.email}</a>
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
