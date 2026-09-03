import { useContext } from "react";
import "./Misturas.css";
import PlusButton from "../../components/PlusButton.jsx";
import PageTitle from "../../components/PageTitle.jsx";
import MisturasForm from "../../components/Misturas/MisturasForm.jsx";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useMisturas } from "../../hooks/useApi.js";

export default function Misturas() {
  const { makeRequest } = useContext(AuthContext);
  const misturas = useMisturas(); // lista já aprovada

  async function handleSubmit(formData) {
    // mapeia os nomes do form (inglês) para o que a API espera (português)
    const payload = {
      autor: formData.creator,
      nome_projeto: formData.projectName,
      descricao: formData.description,
      regime: formData.regime,
      localizacao: formData.location || null,
      area: formData.area.join(", "),          // array -> string
      data_inicio: formData.startDate,
      duracao: formData.duration,
      orcamento: formData.budget ? Number(formData.budget.replace(/[^\d.]/g, "")) : null,
      n_colaboradores: formData.numCollaborators ? Number(formData.numCollaborators) : null,
      email: formData.email,
      telemovel: formData.phone,
    };

    const res = await makeRequest("api/misturas", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert("Proposta submetida! Será revista antes de publicação.");
    } else {
      const err = await res.json().catch(() => null);
      alert(err?.message ?? "Erro ao submeter.");
    }
  }

  return (
    <div className="container-fluid px-0">
      <PageTitle>MISTURAS{/* ...texto... */}</PageTitle>

      <PlusButton collapseTarget="misturas-form" />
      <div className="collapse" id="misturas-form">
        <MisturasForm onSubmit={handleSubmit} />
      </div>

      {/* lista das colaborações aprovadas */}
      <div className="row">
        {misturas.map((m) => (
          <div className="col-md-4" key={m.id}>
            <h5>{m.nome_projeto}</h5>
            <p>{m.autor} — {m.area}</p>
            <p>{m.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


{/* NÃO APAGAR ISTO! <TextEditor value={editorContent} onChange={setEditorContent} />
      <div>
        <h2>Preview:</h2>
        <div dangerouslySetInnerHTML={{ __html: editorContent }} />
      </div> */}