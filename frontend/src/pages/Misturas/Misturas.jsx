import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Misturas.css";
import PlusButton from "../../components/PlusButton.jsx";
import PageTitle from "../../components/PageTitle.jsx";
import MisturasForm from "../../components/Misturas/MisturasForm.jsx";
import MisturasSquare from "../../components/Misturas/MisturasSquare.jsx";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useMisturas } from "../../hooks/useApi.js";
import { useToast } from "../../contexts/ToastContext.jsx";

export default function Misturas() {
  const { makeRequest } = useContext(AuthContext);
  const navigate = useNavigate();
  const { misturas, loading, error } = useMisturas();
  const { showToast } = useToast();

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
      showToast(
        "Recebemos a tua sugestão! Vamos rever e publicar (se nos apetecer).",
        "success",
      );
      navigate("/");
    } else {
      const err = await res.json().catch(() => null);
      showToast(err?.message ?? "Erro ao submeter.", "error");
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

      {loading && <p className="misturas-status">A carregar misturas...</p>}
      {error && (
        <p className="misturas-status">
          Não foi possível carregar as misturas.
        </p>
      )}
      {!loading && !error && misturas.length === 0 && (
        <p className="misturas-status">Ainda não há misturas publicadas.</p>
      )}
      {!loading && !error && misturas.length > 0 && (
        <div className="misturas-grid row g-0 mx-0">
          {misturas.map((m, index) => (
            <Link
              key={m.id}
              className="misturas-grid-link col-12 col-md-6 col-lg-4"
              to={`/misturas/${m.id}`}
            >
              <MisturasSquare mistura={m} index={index} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
