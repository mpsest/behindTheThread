import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useToast } from "../../contexts/ToastContext.jsx";
import SquareButton from "../../components/SquareButton.jsx";
import "./ChangePassword.css";

export default function ChangePassword() {
  const { user, makeRequest } = useContext(AuthContext);
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const current_password = formData.get("current_password");
    const password = formData.get("password");
    const password_confirmation = formData.get("password_confirmation");

    if (password !== password_confirmation) {
      showToast("As passwords não coincidem.", "error");
      return;
    }

    setLoading(true);

    try {
      const res = await makeRequest(
        `api/utilizadores/${user?.id}/change-password`,
        {
          method: "POST",
          body: JSON.stringify({
            current_password,
            password,
            password_confirmation,
          }),
        }
      );

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(
          data?.message ?? "Não foi possível alterar a password."
        );
      }

      showToast(data?.message ?? "Password alterada com sucesso.", "success");
      event.target.reset();
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="change-password-page d-flex align-items-center justify-content-center px-3 px-sm-4 py-4 py-sm-5">
      <form className="change-password-modal p-5" onSubmit={handleSubmit}>
        <h2>MUDAR PASSWORD</h2>

        <div className="control-row">
          <div className="control">
            <label htmlFor="current_password">Password Atual</label>
            <input
              id="current_password"
              name="current_password"
              type="password"
              required
            />
          </div>

          <div className="control">
            <label htmlFor="password">Nova Password</label>
            <input
              id="password"
              name="password"
              type="password"
              minLength={6}
              required
            />
          </div>

          <div className="control">
            <label htmlFor="password_confirmation">Confirmar Password</label>
            <input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              minLength={6}
              required
            />
          </div>
        </div>

        <p className="form-actions">
          <SquareButton type="submit" variant="light" disabled={loading}>
            {loading ? "A guardar..." : "Guardar"}
          </SquareButton>
        </p>
      </form>
    </section>
  );
}
