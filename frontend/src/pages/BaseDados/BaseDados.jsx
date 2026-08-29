import { useContext } from "react";
import BaseDadosTable from "../../components/BaseDados/BaseDadosTable";
import { BaseDadosContext } from "../../contexts/BaseDadosContext";
import "./BaseDados.css";
import PageTitle from "../../components/PageTitle";

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
      <p>
        Se tiveres alguma sugestão de algo que possa ser adicionado a uma destas
        categorias podes sempre contactar-nos. Obrigado.
      </p>
      <div>
        <BaseDadosTable title="Fornecedores" items={fornecedores} />
      </div>
    </main>
  );
}
