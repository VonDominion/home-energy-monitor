function Input({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  disabled = false,
  required = false,
  className = "",
  error = "",
}) {
  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={name}
          className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-muted"
        >
          {label}
        </label>
      )}

      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`
          bg-surface
          border
          ${error ? "border-warn text-warn" : "border-border-strong text-ink"}
          rounded-sm
          px-3
          py-2
          text-sm
          font-sans
          focus:border-ink
          focus:outline-none
          disabled:bg-stone-50
          disabled:text-ink-faint
          ${className}
        `}
      />

      {error && (
        <span className="mt-1 text-xs font-sans text-warn">
          {error}
        </span>
      )}
    </div>
  );
}

export default Input;