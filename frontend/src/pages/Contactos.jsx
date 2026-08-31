import ContactForm from "../components/ContactForm";
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

const TYPOGRAPHY = [
  "Basteleur desenvolvida por Keussel",
  "Avara desenvolvida por Raphaël Bastide, com contribuição de Wei Huang, Lucas Le Bihan, Walid Bouchouchi, Jérémy Landes",
  "Terminal Grotesque desenvolvida por Raphaël Bastide, com contribuição de Jérémy Landes",
  "Fungal desenvolvida por Raphaël Bastide e Jérémy Landes",
];

const SOCIALS = [
  { name: "Instagram", url: "https://www.instagram.com/behindthethread/" },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@behind.the.thread8?_r=1&_t=ZN-99JfMe4wKQA",
  },
  {
    name: "YouTube",
    url: " https://youtube.com/@behindthethread-k4c?si=_9ktsywN39_XD9hW",
  },
];

export default function ContactPage() {
  function handleSubmit(data) {
    console.log(data);
    // fetch/axios para a API Laravel aqui
  }

  return (
    <main className="contact-page d-flex flex-column flex-lg-row justify-content-lg-between gap-4 gap-lg-5 px-3 px-md-4 py-4 py-md-5">
      <div className="contact-page__info d-flex flex-column gap-4">
        <div className="contact-page__row d-flex flex-column flex-md-row gap-2 gap-md-4">
          <span className="contact-page__label">Contactos</span>
          <div className="contact-page__contacts">
            <a href="tel:+351917817418">+351 917 817 418</a>
            <a href="mailto:behindthethreadd@gmail.com">
              behindthethreadd@gmail.com
            </a>
          </div>
        </div>

        <div className="contact-page__row d-flex flex-column flex-md-row gap-2 gap-md-4">
          <span className="contact-page__label">Créditos</span>
          <div className="contact-page__credits d-flex flex-wrap gap-4">
            <div className="contact-page__credits-col">
              <h4>Designers e developers</h4>
              <ul>
                {TEAM.map((person) => (
                  <li key={person.email}>
                    {person.name}, {person.role}
                    <br />
                    <a href={`mailto:${person.email}`}>{person.email}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="contact-page__row d-flex flex-column flex-md-row gap-2 gap-md-4">
          <span className="contact-page__label">Redes sociais</span>
          <div className="contact-page__socials d-flex flex-wrap gap-3 gap-md-4">
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
        </div>
      </div>

      <div className="contact-page__form w-100">
        <ContactForm onSubmit={handleSubmit} />
      </div>
    </main>
  );
}
