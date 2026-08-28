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
      alert("Login failed. Please check your credentials and try again.");
    }
  }

  return (
    <section className="login-page">
      <form className="login-modal" onSubmit={handleLogin}>
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
