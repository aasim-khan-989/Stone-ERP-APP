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
       <div className="flex justify-end gap-2 mt-4">
  <button
    className="
      px-4
      py-2
      text-sm
      border
      border-zinc-300
      rounded-lg
      hover:bg-zinc-100
    "
  >
    Edit
  </button>

  <button
    className="
      px-4
      py-2
      text-sm
      border
      border-red-300
      text-red-600
      rounded-lg
      hover:bg-red-50
    "
  >
    Delete
  </button>
</div>
      </div>
    </div>
  );
}