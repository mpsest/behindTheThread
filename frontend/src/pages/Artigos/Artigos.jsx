import "./Artigos.css";
import PageTitle from "../../components/PageTitle";
import { useArtigos } from "../../hooks/useApi.js";
import { Link } from "react-router-dom";
import ConteudoItem from "../../components/ConteudoItem.jsx";

export default function Artigos() {
  const artigos = useArtigos();
  return (
    <>
      <PageTitle className="artigos-title">ARTIGOS</PageTitle>
      <div className="artigos-container">
        {artigos.map((artigo) => (
          <ConteudoItem key={artigo.id} conteudo={artigo} type="artigo" />
        ))}
      </div>
    </>
  );
}
