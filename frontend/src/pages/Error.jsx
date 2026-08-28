import { Link } from "react-router-dom";
import "./Error.css";

export default function Error() {
  return (
    <section className="error-page">
      <div className="error-modal">
        <h2>PERDIDO?</h2>
        <p>Volte para a página inicial.</p>
        <Link to="/">Voltar</Link>
      </div>
    </section>
  );
}

// TODO: Add a more user-friendly error page with navigation options and possibly a search bar to help users find what they're looking for.
