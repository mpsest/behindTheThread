import SquareButton from "../../components/SquareButton.jsx";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  return (
    <section className="forgot-password-page d-flex align-items-center justify-content-center px-3 px-sm-4 py-4 py-sm-5">
      <form className="forgot-password-modal p-5">
        <h2>ESQUECI-ME DA PASSWORD!</h2>
        <p>
          Vais receber um e-mail com as instruções de recuperação da password.
        </p>

        <div className="control-row">
          <div className="control">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Insere o teu email"
            />
          </div>
        </div>

        <p className="form-actions">
          <SquareButton type="submit" variant="light">
            Enviar
          </SquareButton>
        </p>
      </form>
    </section>
  );
}
