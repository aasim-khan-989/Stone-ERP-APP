export default function ProductCard({
  product,
}) {
  return (
    <div className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">
            {product.name}
          </h3>

          <p className="text-sm text-zinc-500">
            {product.pcode}
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-1 text-sm text-zinc-500">
        <p>
          Category:
          {" "}
          {product.category_name}
        </p>

        <p>
          Unit:
          {" "}
          {product.unit_name}
        </p>

        <p>
          Brand:
          {" "}
          {product.brand || "-"}
        </p>

        <p>
          Size:
          {" "}
          {product.size || "-"}
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