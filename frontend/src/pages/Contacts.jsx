import ContactForm from "../components/ContactForm";
import "./Contacts.css";

const EQUIPA = [
  { nome: "Bárbara Cruz", papel: "Developer", email: "cruzbarba95@gmail.com" },
  {
    nome: "Beatriz Miranda",
    papel: "Designer",
    email: "beatrizmiranda2901@gmail.com",
  },
  { nome: "Filipe Cruz", papel: "Developer", email: "inf.fcruz@gmail.com" },
  {
    nome: "Francisco Brito",
    papel: "Designer",
    email: "franciscobritofb8@gmail.com",
  },
  { nome: "Paula Esteves", papel: "Developer", email: "mpsest6@gmail.com" },
];

const TIPOGRAFIAS = [
  "Basteleur desenvolvida por Keussel",
  "Avara desenvolvida por Raphaël Bastide, com contribuição de Wei Huang, Lucas Le Bihan, Walid Bouchouchi, Jérémy Landes",
  "Terminal Grotesque desenvolvida por Raphaël Bastide, com contribuição de Jérémy Landes",
  "Fungal desenvolvida por Raphaël Bastide e Jérémy Landes",
];

const REDES = [
  { nome: "Instagram", url: "https://instagram.com" },
  { nome: "TikTok", url: "https://tiktok.com" },
  { nome: "YouTube", url: "https://youtube.com" },
];

export default function ContactPage() {
  function handleSubmit(dados) {
    console.log(dados);
    // fetch/axios para a API Laravel aqui
  }

  return (
    <main className="contact-page">
      <div className="contact-page__info">
        <div className="contact-page__row">
          <span className="contact-page__label">Contactos</span>
          <div className="contact-page__contacts">
            <a href="tel:+351917817418">+351 917 817 418</a>
            <a href="mailto:behindthethread@gmail.com">
              behindthethread@gmail.com
            </a>
          </div>
        </div>

        <div className="contact-page__row">
          <span className="contact-page__label">Créditos</span>
          <div className="contact-page__credits">
            <div className="contact-page__credits-col">
              <h4>Designers e developers</h4>
              <ul>
                {EQUIPA.map((pessoa) => (
                  <li key={pessoa.email}>
                    {pessoa.nome}, {pessoa.papel}
                    <br />
                    <a href={`mailto:${pessoa.email}`}>{pessoa.email}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact-page__credits-col">
              <h4>Tipografias</h4>
              <ul className="contact-page__typefaces">
                {TIPOGRAFIAS.map((linha) => (
                  <li key={linha}>{linha}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="contact-page__row">
          <span className="contact-page__label">Redes sociais</span>
          <div className="contact-page__socials">
            {REDES.map((rede) => (
              <a
                key={rede.nome}
                href={rede.url}
                target="_blank"
                rel="noreferrer"
              >
                {rede.nome}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="contact-page__form">
        <ContactForm onSubmit={handleSubmit} />
      </div>
    </main>
  );
}
