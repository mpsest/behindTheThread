import "./Misturas.css";
import React, { useState } from "react";
import PlusButton from "../components/PlusButton.jsx";
import TextEditor from "../components/TextEditor.jsx";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle.jsx";

export default function Misturas() {
  const [editorContent, setEditorContent] = useState("");
  return (
    <div className="container-fluid px-0">
      <PageTitle>MISTURAS</PageTitle>

      <p className="px-3 px-md-5 pb-4 pb-md-5">
        A página Misturas tem o intuito de ser um lugar onde as colaborações
        florescem e ganham vida.
        <br />
        Se tens um projeto em mente, uma área que gostarias de explorar e não
        tens o know-how necessário, ou procuras simplesmente uma nova
        colaboração, este é o lugar certo.
        <br />
        Podes submeter a tua proposta de colaboração ou procurar uma proposta
        que faça sentido para embarcares num novo projeto.
      </p>

      <Link to="/misturas">
        <PlusButton />
      </Link>

      {/* <TextEditor value={editorContent} onChange={setEditorContent} />
      <div>
        <h2>Preview:</h2>
        <div dangerouslySetInnerHTML={{ __html: editorContent }} />
      </div> */}
    </div>
  );
}
