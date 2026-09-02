import "./NovoConteudo.css";
import PageTitle from "../../components/PageTitle.jsx";
import TextEditor from "../../components/TextEditor.jsx";
import React, { useState, useContext } from "react";
import SquareButton from "../../components/SquareButton.jsx";
import { AuthContext } from "../../contexts/AuthContext.jsx";

export default function NovoConteudo() {
  const { makeRequest } = useContext(AuthContext);
  const [editorContent, setEditorContent] = useState("");
  const [keywordsCount, setKeywordsCount] = useState(1);
  function addKeywordField() {
    setKeywordsCount(keywordsCount + 1);
  }

  async function createArticle(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    data["texto"] = editorContent;

    const url =
      data.tipo === "dirty_talk"
        ? "api/dirty-talks"
        : data.tipo === "artigo"
          ? "api/artigos"
          : "api/designers";

    const result = await makeRequest(url, {
      method: "POST",
      body: JSON.stringify(data),
    });

    //console.log("Conteúdo criado com sucesso:", result);
  }

  return (
    <section className="novo-artigo-page container-fluid px-0">
      <form onSubmit={createArticle}>
        <div className="novo-artigo-header">
          <PageTitle>NOVO CONTEUDO</PageTitle>

          <p className="novo-artigo-intro">
            Nesta página podes criar novos Artigos, Dirty Talks ou perfis de
            Designers através do editor de texto. Podes também adicionar imagens
            introduzindo o seu URL.
          </p>

          <div className="novo-artigo-fields">
            <div className="novo-artigo-field novo-artigo-field--full">
              <label htmlFor="novo-conteudo">
                Que conteúdo vais criar hoje?
              </label>
              <select id="novo-conteudo" name="tipo">
                <option value=""> Seleciona uma opção </option>
                <option value="dirty_talk">Dirty Talk</option>
                <option value="artigo">Artigo</option>
                <option value="designer">Designer</option>
              </select>
            </div>

            <div className="novo-artigo-field novo-artigo-field--full">
              <label htmlFor="titulo">Qual é o título do conteúdo?</label>
              <input type="text" id="titulo" name="titulo" />
            </div>
          </div>
        </div>

        <div className="novo-artigo-workspace px-3 px-sm-4 py-4 py-sm-5">
          <div className="novo-artigo-editor">
            <TextEditor
              name="content"
              value={editorContent}
              onChange={setEditorContent}
            />
          </div>

          <div className="novo-artigo-preview">
            <h2>Pré-visualização</h2>
            <div
              className="novo-artigo-preview-content"
              dangerouslySetInnerHTML={{ __html: editorContent }}
            />
          </div>
        </div>

        <div className="novo-artigo-fields novo-artigo-fields--bottom">
          <div className="novo-artigo-field novo-artigo-field--full">
            <label htmlFor="cover-image">
              Introduz o URL da imagem de capa
            </label>
            <input type="text" id="cover-image" name="imagem" />
          </div>

          <div className="novo-artigo-field novo-artigo-field--full">
            <label htmlFor="keywords">Introduz as keywords do conteúdo</label>
            <div className="novo-artigo-keywords">
              <div className="novo-artigo-keyword-inputs">
                {[...Array(keywordsCount)].map((_, index) => (
                  <input
                    key={index}
                    id={index === 0 ? "keywords" : undefined}
                    type="text"
                    name="keywords"
                  />
                ))}
              </div>
              <SquareButton type="button" onClick={addKeywordField}>
                +
              </SquareButton>
            </div>
          </div>
        </div>

        <div className="novo-artigo-submit">
          <SquareButton type="submit">Publicar</SquareButton>
        </div>
      </form>
    </section>
  );
}
