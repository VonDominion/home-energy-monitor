function Button({
  children,
  type = "button",
  variant = "primary",
  disabled = false,
  onClick,
  className = "",
}) {
  const baseStyles =
    "font-sans font-semibold rounded-sm px-5 py-2.5 border transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-primary text-ink border-ink hover:bg-primary-hover",

    secondary:
      "bg-transparent border-border-strong text-ink hover:bg-stone-100",

    ghost:
      "border-transparent text-ink text-sm px-0 py-0 hover:text-primary hover:underline underline-offset-4",

    danger:
      "bg-transparent border-border-strong text-warn hover:bg-stone-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;