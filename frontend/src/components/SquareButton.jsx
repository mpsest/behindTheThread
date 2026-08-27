import React from "react";
import "./SquareButton.css";

export default function SquareButton({ children, onClick, variant = "light" }) {
  return (
    <button className={`square-btn square-btn--${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}
