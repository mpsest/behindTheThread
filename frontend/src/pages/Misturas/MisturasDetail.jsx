import "./MisturasDetail.css";
import PageTitle from "../../components/PageTitle.jsx";
import SquareButton from "../../components/SquareButton.jsx";

export default function MisturasDetail() {
  return;
  <>
    <PageTitle>MISTURAS</PageTitle>
    <div className="row">
      <div className="col-md-6">
        <SquareButton></SquareButton>
        <h5>Título</h5>
      </div>
      <div className="col-md-6">
        <h5>Descrição</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h5 className="subtitle">Email</h5>
        <p>email@exemplo.com</p>
        <h5 className="subtitle">Telemóvel</h5>
        <p>+351 911 111 111</p>
      </div>
    </div>
  </>;
}
// TODO: Adicionar {name} ao PageTitle
