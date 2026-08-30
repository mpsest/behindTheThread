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
    <main className="base-dados-page">
      <PageTitle>BASE DE DADOS</PageTitle>
      <p>
        A página Base de Dados é o lugar onde podes encontrar pontos cruciais da
        tua carreira como criativo, quer seja através duma lista de fornecedores
        em diversas áreas, ferramentas de todos os tipos e formas ou conteúdos
        como filmes e livros para expandires o teu mundo.
      </p>
      <p className="second-p">
        Se tiveres alguma sugestão de algo que possa ser adicionado a uma destas
        categorias podes sempre contactar-nos. Obrigado.
      </p>
      <div className="section-fornecedores">
        <BaseDadosTable title="Fornecedores" items={fornecedores} />
      </div>
      <div>
        <p className="last-p">
          Se tiveres alguma sugestão ou jóia que ainda não está presente na
          nossa base de dados, contacta-nos!
        </p>
        <div className="center-button">
          <Link to="/contactos">
            <SquareButton>Quero contribuir com dados</SquareButton>
          </Link>
        </div>
      </div>
    </main>
  );
}
