import "./Designers.css";
import PageTitle from "../../components/PageTitle.jsx";
import { useDesigners } from "../../hooks/useApi.js";
import ConteudoItem from "../../components/ConteudoItem.jsx";

export default function Designers() {
  const designers = useDesigners();

  return (
    <>
      <PageTitle>DESIGNERS</PageTitle>
      <div className="artigos-container">
        {designers.map((designer) => (
          <ConteudoItem key={designer.id} conteudo={designer} type="designer" />
        ))}
      </div>
    </>
  );
}
