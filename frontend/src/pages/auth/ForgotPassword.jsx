import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useToast } from "../../contexts/ToastContext.jsx";
import SquareButton from "../../components/SquareButton.jsx";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  const { makeRequest } = useContext(AuthContext);
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    const email = formData.get("email");

    try {
      const res = await makeRequest("api/forgot-password", {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.message ?? "Não foi possível enviar o email.");
      }

      showToast(
        data?.message ?? "Verifica o teu email para continuares.",
        "success"
      );
      event.target.reset();
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="forgot-password-page d-flex align-items-center justify-content-center px-3 px-sm-4 py-4 py-sm-5">
      <form className="forgot-password-modal p-5" onSubmit={handleSubmit}>
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
              required
            />
          </div>
        </div>

        <p className="form-actions">
          <SquareButton type="submit" variant="light" disabled={loading}>
            {loading ? "A enviar..." : "Enviar"}
          </SquareButton>
        </p>
      </form>
    </section>
  );
}
