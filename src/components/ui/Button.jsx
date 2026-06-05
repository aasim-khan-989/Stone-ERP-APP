
export default function Button({
  children,
  className = "",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`h-12 px-4 rounded-2xl font-medium transition-all ${className}`}
    >
      {children}
    </button>
  );
}