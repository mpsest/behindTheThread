import PageTitle from "../../components/PageTitle.jsx";
import "./DirtyTalks.css";
import { useDirtyTalk } from "../../hooks/useApi.js";
import ConteudoItem from "../../components/ConteudoItem.jsx";

export default function DirtyTalks() {
  const dirtyTalks = useDirtyTalks();

  return (
    <>
      <PageTitle>DIRTY TALKS</PageTitle>
    </>
  );
}
