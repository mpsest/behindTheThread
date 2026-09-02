import "./Artigos.css";
import PageTitle from "../../components/PageTitle";
import { useArtigos } from "../../hooks/useApi.js";

export default function Artigos() {
  const artigos = useArtigos();
  return (
    <>
      <PageTitle>ARTIGOS</PageTitle>
      <div className="artigos-container">
        {artigos.map((artigo) => (
          <Link key={artigo.id} className="artigo-card">
            <h3>{artigo.titulo}</h3>
          </Link>
        ))}
      </div>
    </>
  );
}
