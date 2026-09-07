import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useToast } from "../../contexts/ToastContext.jsx";
import "./Signup.css";

export default function Signup() {
  const [passMatch, setPassMatch] = useState(true);
  const [loading, setLoading] = useState(false);
  const { makeRequest } = useContext(AuthContext);
  const { showToast } = useToast();
  const navigate = useNavigate();

  //função que recebe os dados do form e os valida / trata / envia para API
  async function registUser(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    if (formData.get("password") !== formData.get("passwordConfirmation")) {
      setPassMatch(false);
      return;
    }

    setPassMatch(true);
    setLoading(true);

    const user = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const res = await makeRequest("api/utilizadores", {
        method: "POST",
        body: JSON.stringify(user),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(
          data?.message ?? "Não foi possível criar a conta de administrador."
        );
      }

      showToast("Conta de administrador criada com sucesso!", "success");

      //reencaminhar para a homepage
      navigate("/");
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="signup-page d-flex align-items-center justify-content-center px-3 px-sm-4 py-4 py-sm-5">
      <form className="signup-modal p-5" onSubmit={registUser}>
        <h2>Criar conta de administrador</h2>

        <div className="control-row">
          <div className="control">
            <label htmlFor="name">Nome</label>
            <input id="name" name="name" type="text" required />
          </div>

          <div className="control">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>

          <div className="control">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="A password deve ser alterada depois"
              minLength={6}
              required
            />
          </div>

          <div className="control">
            <label htmlFor="passwordConfirmation">Confirma a password</label>
            <input
              id="passwordConfirmation"
              name="passwordConfirmation"
              type="password"
              minLength={6}
              required
            />
          </div>
        </div>

        {!passMatch && (
          <p className="signup-error">
            As passwords não correspondem. Tenta novamente.
          </p>
        )}

        <p className="form-actions">
          <button type="submit" disabled={loading}>
            {loading ? "A criar..." : "Submit"}
          </button>
        </p>
      </form>
    </section>
  );
}
