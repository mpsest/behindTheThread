import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      navigate("/", { state: { message: "Admin account created successfully!" } });
    }
  }

  return (
    <div>
      <h6>Create Admin Account</h6>

      <form onSubmit={registUser}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            name="passwordConfirmation"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        {!passMatch && (
          <p className="text-danger text-start">
            Passwords don't match. Please try again.
          </p>
        )}
        <div className="mb-3 form-check">
          <input
            required
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            I agree to the terms and conditions
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}