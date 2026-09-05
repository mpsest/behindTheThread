import { useContext } from "react";
import BaseDadosTable from "../../components/BaseDados/BaseDadosTable";
import { BaseDadosContext } from "../../contexts/BaseDadosContext";
import "./BaseDados.css";
import PageTitle from "../../components/PageTitle";
import SquareButton from "../../components/SquareButton";
import { Link } from "react-router-dom";

const CATEGORY_ORDER = {
  Espacos: [
    "Confeção",
    "Tecidos",
    "Malhas",
    "Acessórios",
    "Transformações",
    "Armazéns",
    "Feiras",
    "Museus",
    "Lojas",
  ],
  Ferramentas: [
    "Tipografia",
    "Cor",
    "Ilustração",
    "Imagens",
    "Mockups",
    "3D",
    "Vídeos",
    "Texturas",
    "Softwares",
    "Organização",
    "Escrita",
    "Som",
  ],
  Conteudos: [
    "Livros",
    "Filmes",
    "Séries",
    "Blogs",
    "Revistas",
    "Inspiração",
    "Podcasts",
    "Teatro",
    "Youtube",
  ],
};

function orderedCategories(baseDados, key) {
  const categories = Object.keys(baseDados[key] ?? {});
  const knownCategories = CATEGORY_ORDER[key].filter((category) =>
    categories.includes(category),
  );
  const extraCategories = categories
    .filter((category) => !CATEGORY_ORDER[key].includes(category))
    .sort((a, b) => a.localeCompare(b, "pt"));

  return [...knownCategories, ...extraCategories];
}

export default function BaseDados() {
  const baseDados = useContext(BaseDadosContext);
  const espacos = orderedCategories(baseDados, "Espacos");
  const ferramentas = orderedCategories(baseDados, "Ferramentas");
  const conteudos = orderedCategories(baseDados, "Conteudos");

  return (
    <div className="base-dados-page container-fluid px-0">
      <PageTitle>
        BASE DE DADOS
        <p className="px-3 px-md-5">
          A página Base de Dados é o lugar onde podes encontrar pontos cruciais
          da tua carreira como criativo, quer seja através duma lista de espaços
          em diversas áreas, ferramentas de todos os tipos e formas ou conteúdos
          como filmes e livros para expandires o teu mundo.
          <br />
          Se tiveres alguma sugestão de algo que possa ser adicionado a uma
          destas categorias podes sempre contactar-nos. Obrigado.
        </p>
      </PageTitle>
      {baseDados.loading && (
        <p className="base-dados-status px-3 px-md-5">A carregar dados...</p>
      )}
      {baseDados.error && (
        <p className="base-dados-status px-3 px-md-5">
          Não foi possível carregar a base de dados.
        </p>
      )}
      <div className="section section-espacos">
        <BaseDadosTable
          title="Espaços"
          routeSegment="espacos"
          items={espacos}
        />
      </div>
      <div className="section section-ferramentas">
        <BaseDadosTable
          title="Ferramentas"
          routeSegment="ferramentas"
          items={ferramentas}
        />
      </div>
      <div className="section section-conteudos">
        <BaseDadosTable
          title="Conteúdos"
          routeSegment="conteudos"
          items={conteudos}
        />
      </div>
      <div>
        <p className="last-p px-3 px-md-5 pt-4 pt-md-5">
          Se tiveres alguma sugestão ou jóia que ainda não está presente na
          nossa base de dados, contacta-nos!
        </p>
        <div className="center-button d-flex justify-content-center pb-4 pb-md-5">
          <Link to="/contactos">
            <SquareButton>Quero contribuir com dados</SquareButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
