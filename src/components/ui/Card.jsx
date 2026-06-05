export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`rounded-3xl border p-5 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}