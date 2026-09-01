import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PlusButton.css";

export default function PlusButton({ children, to, active = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    if (to) {
      navigate(to);
      return;
    }
    setIsOpen(!isOpen);
  }

  const showMinus = active || isOpen;

  return (
    <div>
      <button className="plus-button" onClick={handleClick}>
        <img
          className="plus-icon"
          src={showMinus ? "/minus.png" : "/plus.png"}
          alt={showMinus ? "Close" : "Open"}
        />
      </button>
      {!to && isOpen && <div>{children}</div>}
    </div>
  );
}
