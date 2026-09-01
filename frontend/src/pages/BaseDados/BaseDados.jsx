import { useContext } from "react";
import BaseDadosTable from "../../components/BaseDados/BaseDadosTable";
import { BaseDadosContext } from "../../contexts/BaseDadosContext";
import "./BaseDados.css";
import PageTitle from "../../components/PageTitle";
import SquareButton from "../../components/SquareButton";
import { Link } from "react-router-dom";

export default function BaseDados() {
  const baseDados = useContext(BaseDadosContext);
  const fornecedores = Object.keys(baseDados.Fornecedores);

  return (
    <div className="base-dados-page container-fluid px-0">
      <PageTitle>
        BASE DE DADOS
        <p className="px-3 px-md-5">
          A página Base de Dados é o lugar onde podes encontrar pontos cruciais
          da tua carreira como criativo, quer seja através duma lista de
          fornecedores em diversas áreas, ferramentas de todos os tipos e formas
          ou conteúdos como filmes e livros para expandires o teu mundo.
          <br />
          Se tiveres alguma sugestão de algo que possa ser adicionado a uma
          destas categorias podes sempre contactar-nos. Obrigado.
        </p>
      </PageTitle>
      <div className="section-fornecedores">
        <BaseDadosTable title="Fornecedores" items={fornecedores} />
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
