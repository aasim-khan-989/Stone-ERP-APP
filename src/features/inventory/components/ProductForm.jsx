export default function ProductForm() {
  return (
    <div className="bg-white border border-zinc-200 rounded-3xl p-5">
      <h3 className="font-semibold text-lg mb-4">
        Add Product
      </h3>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          className="w-full h-12 px-4 border border-zinc-300 rounded-xl"
        />

        <input
          type="text"
          placeholder="Category"
          className="w-full h-12 px-4 border border-zinc-300 rounded-xl"
        />

        <input
          type="text"
          placeholder="Unit"
          className="w-full h-12 px-4 border border-zinc-300 rounded-xl"
        />

        <button className="w-full h-12 bg-black text-white rounded-xl">
          Save Product
        </button>
      </div>
    </div>
  );
}