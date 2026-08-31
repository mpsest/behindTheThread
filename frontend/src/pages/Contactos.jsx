import ContactForm from '../components/ContactForm';
import './Contactos.css';

const TEAM = [
  { name: 'Bárbara Cruz', role: 'Developer', email: 'cruzbarbara95@gmail.com' },
  { name: 'Beatriz Miranda', role: 'Designer', email: 'beatrizmiranda2901@gmail.com' },
  { name: 'Filipe Cruz', role: 'Developer', email: 'inf.fcruz@gmail.com' },
  { name: 'Francisco Brito', role: 'Designer', email: 'franciscobritofb8@gmail.com' },
  { name: 'Paula Esteves', role: 'Developer', email: 'mpsest6@gmail.com' },
];

const TYPOGRAPHY = [
  'Basteleur desenvolvida por Keussel',
  'Avara desenvolvida por Raphaël Bastide, com contribuição de Wei Huang, Lucas Le Bihan, Walid Bouchouchi, Jérémy Landes',
  'Terminal Grotesque desenvolvida por Raphaël Bastide, com contribuição de Jérémy Landes',
  'Fungal desenvolvida por Raphaël Bastide e Jérémy Landes',
];

const SOCIALS = [
  { name: 'Instagram', url: 'https://instagram.com' },
  { name: 'TikTok', url: 'https://tiktok.com' },
  { name: 'YouTube', url: 'https://youtube.com' },
];

export default function ContactPage() {
  function handleSubmit(data) {
    console.log(data);
    // fetch/axios para a API Laravel aqui
  }

  return (
    <main className="contact-page">
      <div className="contact-page__info">
        <div className="contact-page__row">
          <span className="contact-page__label">Contactos</span>
          <div className="contact-page__contacts">
            <a href="tel:+351917817418">+351 917 817 418</a>
            <a href="mailto:behindthethread@gmail.com">behindthethread@gmail.com</a>
          </div>
        </div>

        <div className="contact-page__row">
          <span className="contact-page__label">Créditos</span>
          <div className="contact-page__credits">
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

            <div className="contact-page__credits-col">
              <h4>Tipografias</h4>
              <ul className="contact-page__typefaces">
                {TYPOGRAPHY.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="contact-page__row">
          <span className="contact-page__label">Redes sociais</span>
          <div className="contact-page__socials">
            {SOCIALS.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noreferrer">
                {social.name}
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