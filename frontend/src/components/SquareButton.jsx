import React from "react";
import "./SquareButton.css";

export default function SquareButton({
  children,
  onClick,
  variant = "light",
  type = "button",
  className = "",
  ...rest
}) {
  return (
    <button
      type={type}
      className={`square-btn square-btn--${variant} ${className}`.trim()}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
