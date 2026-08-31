import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PlusButton.css";

export default function PlusButton({ children, to }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    if (to) {
      navigate(to);
      return;
    }
    setIsOpen(!isOpen);
  }

  return (
    <div className="button-center d-flex justify-content-center py-4 py-sm-5">
      <button
        className={`plus-button ${isOpen ? "open" : ""}`}
        onClick={handleClick}
      >
        <img
          className="plus-icon"
          src={isOpen ? "/minus.svg" : "/plus.svg"}
          alt={isOpen ? "Close" : "Open"}
        />
      </button>
      {!to && isOpen && <div>{children}</div>}
    </div>
  );
}
