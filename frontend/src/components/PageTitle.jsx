import "./PageTitle.css";

export default function PageTitle({ children }) {
  return <h1 className="page-title my-4 pt-2 pt-md-3">{children}</h1>;
}
