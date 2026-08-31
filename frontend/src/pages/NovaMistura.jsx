import MisturasForm from '../components/MisturasForm.jsx';
import './NovaMistura.css';

export default function NewMisturasPage() {
  function handleSubmit(formData) {
    console.log(formData);
    // fetch/axios para a API Laravel aqui
  }

  return (
    <main className="misturas-page">
      <header className="misturas-page__hero">
        <h1 className="misturas-page__title">MISTURAS</h1>

        <hr />
        <p className="misturas-page__intro">
          A página Misturas tem o intuito de ser um lugar onde os colaboradores florescem
          e ganham vida. Se tens um projeto em mente, uma ideia que gostarias de explorar
          e não tens a know-how necessária ou procuras simplesmente uma nova colaboração
          este é o lugar certo. Podes submeter a tua proposta de colaboração ao encontrar
          uma proposta que faça sentido e embarcares num novo projeto.
        </p>

        <hr />

        {/* TODO: botao plus */}

        <hr />

        {/* TODO: botao plus */}

      </header>

      <section className="misturas-page__form-section">
        <MisturasForm onSubmit={handleSubmit} />
      </section>
    </main>
  );
}