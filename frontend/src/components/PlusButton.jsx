import { useState } from "react";
import "./PlusButton.css";

export default function PlusButton({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button className="plus-button" onClick={() => setIsOpen(!isOpen)}>
        <img
          className="plus-icon"
          src={isOpen ? "/minus.png" : "/plus.png"}
          alt={isOpen ? "Close" : "Open"}
        />
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
}
