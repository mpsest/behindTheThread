import "./ConteudoItem.css";
import { Link } from "react-router-dom";
import SquareButton from "./SquareButton.jsx";

export default function ConteudoItem({ conteudo, type }) {
  return (
    <>
      <Link to={`/${type}s/${conteudo.id}`} className="conteudo-item">
        <SquareButton>{conteudo.titulo}</SquareButton>
        <img src={conteudo.imagem} alt={conteudo.titulo} />
      </Link>
    </>
  );
}
