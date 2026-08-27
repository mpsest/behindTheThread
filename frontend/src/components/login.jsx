import { SquareButton } from "./SquareButton.jsx";

export default function Login() {
  function printHello(name) {
    alert("hi! " + name);
  }

  return (
    <form>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <ComponentButton functionForClick={() => printHello("bla")}>
          Login
        </ComponentButton>
      </p>
    </form>
  );
}
