import { Link } from "react-router-dom";
import MisturasForm from '../components/MisturasForm.jsx';
import './NovaMistura.css';
import PlusButton from "../components/PlusButton.jsx";
import PageTitle from "../components/PageTitle.jsx";

export default function NovaMistura() {
  function handleSubmit(formData) {
    console.log(formData);
    // fetch/axios para a API Laravel aqui
  }

  return (
    <main className="misturas-page">
      <header className="misturas-page__hero">
        <PageTitle>MISTURAS</PageTitle>

  
        <p className="misturas-page__intro">
          A página Misturas tem o intuito de ser um lugar onde os colaboradores florescem
          e ganham vida. Se tens um projeto em mente, uma ideia que gostarias de explorar
          e não tens a know-how necessária ou procuras simplesmente uma nova colaboração
          este é o lugar certo. Podes submeter a tua proposta de colaboração ao encontrar
          uma proposta que faça sentido e embarcares num novo projeto.
        </p>

      </header>

      <div className="misturas-page__plus">
        <Link to="/misturas">
          <PlusButton active />
        </Link>
      </div>

      <section className="misturas-page__form-section">
        <MisturasForm onSubmit={handleSubmit} />
      </section>
    </main>
  );
}