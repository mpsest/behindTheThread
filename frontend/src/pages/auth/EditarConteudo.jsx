import "./NovoConteudo.css";
import PageTitle from "../../components/PageTitle.jsx";
import TextEditor from "../../components/TextEditor.jsx";
import React, { useState, useContext, useEffect } from "react";
import SquareButton from "../../components/SquareButton.jsx";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useToast } from "../../contexts/ToastContext.jsx";

export default function EditarConteudo() {
  const { makeRequest } = useContext(AuthContext);
  const { tipo, id } = useParams();
  const [conteudo, setConteudo] = useState();
  const [editorContent, setEditorContent] = useState("");
  const [keywordsCount, setKeywordsCount] = useState(1);
  const navigate = useNavigate();
  const { showToast } = useToast();

  function addKeywordField() {
    setKeywordsCount(keywordsCount + 1);
  }

  useEffect(() => {
    async function fetchConteudo() {
      const url =
        tipo === "dirty_talk"
          ? `api/dirty-talks/${id}`
          : tipo === "artigo"
            ? `api/artigos/${id}`
            : `api/designers/${id}`;

      const response = await makeRequest(url);
      if (response.ok) {
        const data = await response.json();
        setConteudo(data);
        setEditorContent(data.texto || "");
        setKeywordsCount(data.keywords.length || 1);
      } else {
        showToast("Erro ao carregar o conteúdo.", "error");
      }
    }

    fetchConteudo();
  }, [tipo, id, makeRequest]);

  async function createArticle(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    data["texto"] = editorContent;
    data["keywords"] = formData
      .getAll("keywords")
      .map((keyword) => keyword.trim())
      .filter(Boolean);

    const url =
      data.tipo === "dirty_talk"
        ? "api/dirty-talks"
        : data.tipo === "artigo"
          ? "api/artigos"
          : "api/designers";

    const result = await makeRequest(url + `/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    if (result.ok) {
      showToast("Conteúdo atualizado com sucesso!", "success");
      if (data.tipo === "dirty_talk") {
        navigate(`/dirtytalks/${id}`);
      } else {
        navigate(`/${data.tipo}s/${id}`);
      }
    } else {
      showToast("Erro ao atualizar o conteúdo.", "error");
    }
  }

  return (
    <section className="novo-artigo-page container-fluid px-0">
      <form onSubmit={createArticle}>
        <div className="novo-artigo-header">
          <PageTitle>EDITAR CONTEUDO</PageTitle>

          <p className="novo-artigo-intro">
            Nesta página podes <b>editar</b> Artigos, Dirty Talks ou perfis de
            Designers.
          </p>

          <div className="novo-artigo-fields">
            <div className="novo-artigo-field novo-artigo-field--full">
              <label htmlFor="novo-conteudo">Estás a editar:</label>
              <select id="novo-conteudo" name="tipo" defaultValue={tipo}>
                <option value=""> Seleciona uma opção </option>
                <option value="dirty_talk">Dirty Talk</option>
                <option value="artigo">Artigo</option>
                <option value="designer">Designer</option>
              </select>
            </div>

            <div className="novo-artigo-field novo-artigo-field--full">
              <label htmlFor="titulo">Título do conteúdo</label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                defaultValue={conteudo?.titulo}
              />
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
            <input
              type="text"
              id="cover-image"
              name="imagem"
              defaultValue={conteudo?.imagem}
            />
          </div>

          <div className="novo-artigo-field novo-artigo-field--full">
            <label htmlFor="keywords">Introduz as keywords do conteúdo</label>
            <div className="novo-artigo-keywords">
              <div className="novo-artigo-keyword-inputs">
                {[...Array(keywordsCount)].map((_, index) => (
                  <input
                    key={`${conteudo?.id ?? "loading"}-${index}`}
                    id={index === 0 ? "keywords" : undefined}
                    type="text"
                    name="keywords"
                    defaultValue={conteudo?.keywords?.[index]?.palavra ?? ""}
                  />
                ))}
                <SquareButton type="button" onClick={addKeywordField}>
                  +
                </SquareButton>
              </div>
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
