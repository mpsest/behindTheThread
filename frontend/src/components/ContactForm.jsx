import { useState } from "react";
import "./ContactForm.css";
import SquareButton from "./SquareButton.jsx";

const FIELDS = [
  { id: "name", label: "Nome", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "phone", label: "Telemóvel", type: "tel" },
  { id: "subject", label: "Assunto", type: "text" },
  { id: "message", label: "Mensagem", type: "text" },
];

export default function ContactForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
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
      {FIELDS.map(({ id, label, type }) => (
        <label key={id} htmlFor={id}>
          {label}
          <input
            id={id}
            name={id}
            type={type}
            value={form[id]}
            onChange={handleChange}
          />
        </label>
      ))}

      <SquareButton variant="dark">Enviar</SquareButton>
    </form>
  );
}
