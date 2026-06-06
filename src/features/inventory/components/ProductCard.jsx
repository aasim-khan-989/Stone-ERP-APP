export default function ProductCard({
  product,
}) {
  return (
    <div className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-sm">
      <h3 className="font-semibold text-lg">
        {product.name}
      </h3>

      <div className="mt-3 space-y-1 text-sm text-zinc-500">
        <p>
          Category: {product.category}
        </p>

        <p>
          Unit: {product.unit}
        </p>

        <p>
          Status: {product.status}
        </p>
      </div>

      <div className="flex gap-2 mt-4">
        <button className="flex-1 bg-black text-white py-2 rounded-xl">
          Edit
        </button>

        <button className="flex-1 bg-red-600 text-white py-2 rounded-xl">
          Delete
        </button>
      </div>
    </div>
  );
}