import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import SquareButton from "../../components/SquareButton";
import "./Login.css";

export default function LoginForm() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  async function handleLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      //chama a função do authcontext que lê os dados, manda para a api e se sucesso guarda no localstorage e expande para toda a app
      let success = await login(data);

      if (success) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro. Tenta novamente.");
    }
  }

  return (
    <section className="login-page d-flex align-items-center justify-content-center px-3 px-sm-4 py-4 py-sm-5">
      <form className="login-modal p-5" onSubmit={handleLogin}>
        <h2>LOGIN</h2>
        <div className="control-row">
          <div className="control no-margin">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />
          </div>

          <div className="control no-margin">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" />
          </div>
        </div>

        <p className="form-actions">
          <SquareButton type="submit" variant="light">
            Login
          </SquareButton>
        </p>
      </form>
    </section>
  );
}
