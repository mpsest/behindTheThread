import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import PageTitle from "../../components/PageTitle.jsx";
import SquareButton from "../../components/SquareButton.jsx";
import "./EmailsNewsletter.css";

const API_URL = "http://localhost:8000/api/newsletter";

export default function EmailsNewsletter() {
  const { makeRequest } = useContext(AuthContext);
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    loadEmails();
  }, []);

  async function loadEmails() {
    setLoading(true);
    setErro(null);
    try {
      const res = await makeRequest(API_URL);
      if (!res.ok) throw new Error(`Erro ${res.status}`);
      const data = await res.json();
      setEmails(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Erro ao carregar emails da newsletter:", err);
      setErro("Não foi possível carregar os emails.");
      setEmails([]);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Remover este email da newsletter?")) return;
    try {
      const res = await makeRequest(`${API_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error(`Erro ${res.status}`);
      loadEmails();
    } catch (err) {
      console.error(err);
      alert("Não foi possível remover o email.");
    }
  }

  function copiarTodos() {
    const texto = emails.map((e) => e.email).join(", ");
    navigator.clipboard?.writeText(texto);
  }

  return (
    <main className="emails-newsletter">
      <PageTitle>EMAILS NEWSLETTER</PageTitle>

      <div className="emails-newsletter__header">
        <p>{emails.length} subscritor(es)</p>
        <SquareButton onClick={copiarTodos} disabled={emails.length === 0}>
          Copiar todos
        </SquareButton>
      </div>

      {loading && <p>A carregar...</p>}
      {erro && <p className="emails-newsletter__error">{erro}</p>}

      {!loading && !erro && (
        <table className="emails-newsletter__table">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.email}</td>
                <td>
                  <SquareButton onClick={() => handleDelete(e.id)}>
                    Remover
                  </SquareButton>
                </td>
              </tr>
            ))}
            {emails.length === 0 && (
              <tr>
                <td colSpan="3">Ainda não há subscritores.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </main>
  );
}
