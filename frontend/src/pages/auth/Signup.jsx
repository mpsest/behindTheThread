import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const [passMatch, setPassMatch] = useState(true);
  const navigate = useNavigate();

  //função que recebe os dados do form e os valida / trata / envia para API
  function registUser(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData.get("email"));

    if (formData.get("password") !== formData.get("passwordConfirmation")) {
      setPassMatch(false);
    } else {
      setPassMatch(true);
      const user = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        termsAndConditions: true,
        role: "admin",
      };

      fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      //reencaminhar para a homepage
      navigate("/", {
        state: { message: "Admin account created successfully!" },
      });
    }
  }

  return (
    <section className="signup-page">
      <form className="signup-modal" onSubmit={registUser}>
        <h2>Criar conta de administrador</h2>

        <div className="control-row">
          <div className="control">
            <label htmlFor="name">Nome</label>
            <input id="name" name="name" type="text" />
          </div>

          <div className="control">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />
          </div>

          <div className="control">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="A password deve ser alterada depois"
            />
          </div>

          <div className="control">
            <label htmlFor="passwordConfirmation">Confirma a password</label>
            <input
              id="passwordConfirmation"
              name="passwordConfirmation"
              type="password"
            />
          </div>
        </div>

        {!passMatch && (
          <p className="signup-error">
            As passwords não correspondem. Tenta novamente.
          </p>
        )}

        <p className="form-actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </section>
  );
}
