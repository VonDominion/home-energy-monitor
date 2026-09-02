function Card({ children, className = "", interactive = false }) {
  const baseStyles =
    "bg-surface border border-border rounded-sm p-5";

  const interactiveStyles = interactive
    ? "hover:border-border-strong transition-colors"
    : "";

  return (
    <div className={`${baseStyles} ${interactiveStyles} ${className}`}>
      {children}
    </div>
  );
}

export default Card;