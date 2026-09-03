import "./PageTitle.css";

export default function PageTitle({ children, className = "" }) {
  return (
    <h1 className={`page-title mt-3 pt-md-3 ${className}`.trim()}>
      {children}
    </h1>
  );
}
