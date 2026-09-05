import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Misturas.css";
import PlusButton from "../../components/PlusButton.jsx";
import PageTitle from "../../components/PageTitle.jsx";
import MisturasForm from "../../components/Misturas/MisturasForm.jsx";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useMisturas } from "../../hooks/useApi.js";

export default function Misturas() {
  const { makeRequest } = useContext(AuthContext);
  const navigate = useNavigate();
  const misturas = useMisturas();

  async function handleSubmit(formData) {
    const payload = {
      autor: formData.creator,
      nome_projeto: formData.projectName,
      descricao: formData.description,
      regime: formData.regime,
      localizacao: formData.location || null,
      area: formData.area.join(", "),
      data_inicio: formData.startDate,
      duracao: formData.duration,
      orcamento: formData.budget
        ? Number(formData.budget.replace(/[^\d.]/g, ""))
        : null,
      n_colaboradores: formData.numCollaborators
        ? Number(formData.numCollaborators)
        : null,
      email: formData.email,
      telemovel: formData.phone,
    };

    const res = await makeRequest("api/misturas", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert("Proposta submetida! Será revista antes de publicação.");
      navigate("/");
    } else {
      const err = await res.json().catch(() => null);
      alert(err?.message ?? "Erro ao submeter.");
    }
  }

  return (
    <div className="container-fluid px-0">
      <PageTitle>
        MISTURAS
        <p>
          A página Misturas tem o intuito de ser um lugar onde as colaborações
          florescem e ganham vida. Se tens um projeto em mente, uma área que
          gostarias de explorar e não tens o know-how necessário ou procuras uma
          nova colaboração, este é o lugar certo. <br />
          Podes submeter a tua proposta de colaboração no formulário abaixo ou
          procurar uma proposta que faça sentido e embarcares num novo projeto.
        </p>
      </PageTitle>

      <PlusButton collapseTarget="misturas-form" />
      <div className="collapse" id="misturas-form">
        <MisturasForm onSubmit={handleSubmit} />
      </div>

      <div className="row">
        {misturas.map((m) => (
          <div className="col-md-4" key={m.id}>
            <h5>{m.nome_projeto}</h5>
            <p>
              {m.autor} — {m.area}
            </p>
            <p>{m.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* NÃO APAGAR ISTO! <TextEditor value={editorContent} onChange={setEditorContent} />
      <div>
        <h2>Preview:</h2>
        <div dangerouslySetInnerHTML={{ __html: editorContent }} />
      </div> */
}
