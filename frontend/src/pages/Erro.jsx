import { Link } from "react-router-dom";
import "./Error.css";

export default function Error() {
  return (
    <section className="error-page d-flex align-items-start align-items-sm-center justify-content-center px-3 px-sm-4 py-4 py-sm-5">
      <div className="error-modal p-4 p-sm-5">
        <h2>PERDIDO?</h2>
        <p>Volte para a página inicial.</p>
        <Link to="/">Voltar</Link>
      </div>
    </section>
  );
}
