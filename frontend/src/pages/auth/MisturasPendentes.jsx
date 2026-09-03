import { useContext } from "react";
import PageTitle from "../../components/PageTitle.jsx";
import SquareButton from "../../components/SquareButton.jsx";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useMisturasPendentes } from "../../hooks/useApi.js";

export default function MisturasPendentes() {
  const { makeRequest } = useContext(AuthContext);
  const { pendentes, refetch } = useMisturasPendentes();

  async function aprovar(id) {
    await makeRequest(`api/misturas/${id}/aprovar`, { method: "PATCH" });
    refetch();
  }

  async function rejeitar(id) {
    await makeRequest(`api/misturas/${id}`, { method: "DELETE" });
    refetch();
  }

  return (
    <div>
      <PageTitle>PROPOSTAS DE MISTURAS</PageTitle>
      {pendentes.length === 0 && <p>Sem propostas pendentes.</p>}
      {pendentes.map((m) => (
        <div className="row border-bottom py-3" key={m.id}>
          <div className="col-md-8">
            <h5>{m.nome_projeto} — {m.autor}</h5>
            <p><strong>Área:</strong> {m.area} | <strong>Regime:</strong> {m.regime}</p>
            <p>{m.descricao}</p>
            <p><strong>Contacto:</strong> {m.email} / {m.telemovel}</p>
          </div>
          <div className="col-md-4 text-end">
            <SquareButton variant="dark" onClick={() => aprovar(m.id)}>Aceitar</SquareButton>
            <SquareButton onClick={() => rejeitar(m.id)}>Rejeitar</SquareButton>
          </div>
        </div>
      ))}
    </div>
  );
}
