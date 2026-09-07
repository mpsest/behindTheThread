import { useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useToast } from "../../contexts/ToastContext.jsx";
import SquareButton from "../../components/SquareButton.jsx";
import "./ResetPassword.css";

export default function ResetPassword() {
  const { makeRequest } = useContext(AuthContext);
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const tokenFromLink = searchParams.get("token") ?? "";
  const emailFromLink = searchParams.get("email") ?? "";

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const password = formData.get("password");
    const password_confirmation = formData.get("password_confirmation");

    if (password !== password_confirmation) {
      showToast("As passwords não coincidem.", "error");
      return;
    }

    setLoading(true);

    try {
      const res = await makeRequest("api/reset-password", {
        method: "POST",
        body: JSON.stringify({
          token: tokenFromLink,
          email: emailFromLink,
          password,
          password_confirmation,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(
          data?.message ?? "Não foi possível repor a password."
        );
      }

      showToast(data?.message ?? "Password reposta com sucesso.", "success");

      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="reset-password-page d-flex align-items-center justify-content-center px-3 px-sm-4 py-4 py-sm-5">
      <form className="reset-password-modal p-5" onSubmit={handleSubmit}>
        <h2>RESET PASSWORD</h2>

        <div className="control-row">
          <div className="control">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={emailFromLink}
              readOnly={Boolean(emailFromLink)}
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
            {loading ? "A repor..." : "Reset Password"}
          </SquareButton>
        </p>
      </form>
    </section>
  );
}
