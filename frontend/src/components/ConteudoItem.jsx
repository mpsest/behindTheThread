import "./ConteudoItem.css";
import { Link } from "react-router-dom";
import SquareButton from "./SquareButton.jsx";

//Esta componente exibe um item de conteúdo (Artigo, Designer ou Dirty Talk) numa lista.
// Ele recebe o objeto de conteúdo e o tipo de conteúdo (se é Artigo, Designer ou Dirty Talk) como props e faz render dum link para a página de detalhes do conteúdo, exibindo a imagem e o título do conteúdo dentro de um botão quadrado estilizado.
export default function ConteudoItem({ conteudo, type }) {
  return (
    <article className="conteudo-card">
      <Link to={`/${type}s/${conteudo.id}`} className="conteudo-item">
        <img src={conteudo.imagem} alt={conteudo.titulo} />
        <div className="conteudo-item-title">
          <SquareButton>{conteudo.titulo}</SquareButton>
        </div>
      </Link>
    </article>
  );
}
