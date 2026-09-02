import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PlusButton.css";

export default function PlusButton({ children, to, collapseTarget }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!collapseTarget) return;
    const el = document.getElementById(collapseTarget);
    if (!el) return;

    const onShow = () => setIsOpen(true);
    const onHide = () => setIsOpen(false);
    el.addEventListener("show.bs.collapse", onShow);
    el.addEventListener("hide.bs.collapse", onHide);
    return () => {
      el.removeEventListener("show.bs.collapse", onShow);
      el.removeEventListener("hide.bs.collapse", onHide);
    };
  }, [collapseTarget]);

  function handleClick() {
    if (to) {
      navigate(to);
      return;
    }
    if (collapseTarget) return; // toggling is handled by Bootstrap's collapse
    setIsOpen(!isOpen);
  }

  const collapseProps = collapseTarget
    ? {
        "data-bs-toggle": "collapse",
        "data-bs-target": `#${collapseTarget}`,
        "aria-controls": collapseTarget,
        "aria-expanded": isOpen,
      }
    : {};

  return (
    <div className="button-center d-flex justify-content-center py-4 py-sm-5">
      <button
        className={`plus-button ${isOpen ? "open" : ""}`}
        onClick={handleClick}
        {...collapseProps}
      >
        <img
          className="plus-icon"
          src={isOpen ? "/minus.svg" : "/plus.svg"}
          alt={isOpen ? "Close" : "Open"}
        />
      </button>
      {!to && !collapseTarget && isOpen && <div>{children}</div>}
    </div>
  );
}
