import "./NovoArtigo.css";
import PageTitle from "../../components/PageTitle";
import TextEditor from "../../components/TextEditor.jsx";
import React, { useState } from "react";
import SquareButton from "../../components/SquareButton.jsx";

export default function NovoArtigo() {
  const [editorContent, setEditorContent] = useState("");

  return (
    <section className="novo-artigo-page container-fluid px-0">
      <div className="novo-artigo-header">
        <PageTitle>NOVO CONTEUDO</PageTitle>

        <p className="novo-artigo-intro">
          Nesta página podes criar novos Artigos, Dirty Talks ou perfis de
          Designers através do editor de texto. Podes também adicionar imagens
          introduzindo o seu URL.
        </p>
        <div className="novo-artigo-fields">
          <div className="novo-artigo-field">
            <label htmlFor="novo-conteudo">Que conteúdo vais criar hoje?</label>
            <select id="novo-conteudo">
              <option value=""> Seleciona uma opção </option>
              <option value="dog">Dirty Talk</option>
              <option value="cat">Artigo</option>
              <option value="hamster">Designer</option>
            </select>
          </div>
          <div className="novo-artigo-field">
            <label htmlFor="titulo">Qual é o título do conteúdo?</label>
            <input type="text" id="titulo" name="titulo" />
          </div>
        </div>
      </div>

      <div className="novo-artigo-workspace px-3 px-sm-4 py-4 py-sm-5">
        <div className="novo-artigo-editor">
          <TextEditor value={editorContent} onChange={setEditorContent} />
        </div>

        <div className="novo-artigo-preview">
          <h2>Pré-visualização</h2>
          <div
            className="novo-artigo-preview-content"
            dangerouslySetInnerHTML={{ __html: editorContent }}
          />
          <div className="novo-artigo-actions">
            <SquareButton>Publicar</SquareButton>
          </div>
        </div>
      </div>
    </section>
  );
}
