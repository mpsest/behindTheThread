import PageTitle from "../../components/PageTitle.jsx";
import "./DirtyTalks.css";
import { useDirtyTalks } from "../../hooks/useApi.js";
import ConteudoItem from "../../components/ConteudoItem.jsx";

export default function DirtyTalks() {
  const dirtyTalks = useDirtyTalks();

  return (
    <>
      <PageTitle>DIRTY TALKS</PageTitle>
      <div className="artigos-container">
        {dirtyTalks.map((dirtyTalk) => (
          <ConteudoItem
            key={dirtyTalk.id}
            conteudo={dirtyTalk}
            type="dirtytalk"
          />
        ))}
      </div>
    </>
  );
}
