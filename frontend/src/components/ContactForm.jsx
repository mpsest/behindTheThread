import { useState } from 'react';
import './ContactForm.css';
import SquareButton from './SquareButton.jsx';


export default function ContactForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit?.(form);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__field">
        <label htmlFor="name">Nome</label>
        <input id="name" name="name" type="text" value={form.name} onChange={handleChange} />
      </div>

      <div className="contact-form__field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
      </div>

      <div className="contact-form__field">
        <label htmlFor="phone">Telemóvel</label>
        <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
      </div>

      <div className="contact-form__field">
        <label htmlFor="subject">Assunto</label>
        <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} />
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">Mensagem</label>
        <input id="message" name="message" type="text" value={form.message} onChange={handleChange} />
      </div>

    <SquareButton variant="dark" onClick={handleSubmit}>
  Enviar
</SquareButton>
    </form>
  );
}