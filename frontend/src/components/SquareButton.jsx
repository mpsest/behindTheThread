import React from "react";
import "./SquareButton.css";

export default function SquareButton({
  as: Component = "button",
  children,
  onClick,
  variant = "light",
  type = "button",
  className = "",
  ...rest
}) {
  const props =
    Component === "button"
      ? {
          type,
          onClick,
          ...rest,
        }
      : {
          onClick,
          ...rest,
        };

  return (
    <Component
      className={`square-btn square-btn--${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
