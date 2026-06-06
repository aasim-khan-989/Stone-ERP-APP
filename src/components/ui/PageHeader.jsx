export default function PageHeader({
  title,
  subtitle,
}) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold">
        {title}
      </h1>

      {subtitle && (
        <p className="text-zinc-500 mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}