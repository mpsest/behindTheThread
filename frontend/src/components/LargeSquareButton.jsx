import "./LargeSquareButton.css";

export default function LargeSquareButton({
  as: Component = "button",
  children,
  className = "",
  type = "button",
  ...rest
}) {
  const props =
    Component === "button"
      ? {
          type,
          ...rest,
        }
      : rest;

  return (
    <Component className={`large-square-btn ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}
