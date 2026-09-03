import SquareButton from "../../components/SquareButton.jsx";
import "./ResetPassword.css";

export default function ResetPassword() {
  return (
    <section className="reset-password-page d-flex align-items-center justify-content-center px-3 px-sm-4 py-4 py-sm-5">
      <form className="reset-password-modal p-5">
        <h2>RESET PASSWORD</h2>

        <div className="control-row">
          <div className="control">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />
          </div>
        </div>

        <p className="form-actions">
          <SquareButton type="submit" variant="light">
            Reset Password
          </SquareButton>
        </p>
      </form>
    </section>
  );
}
//TODO: Add functionality to reset password, including form validation and API integration.
