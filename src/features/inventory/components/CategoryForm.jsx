export default function CategoryForm() {
  return (
    <div className="bg-white border border-zinc-200 rounded-3xl p-5">
      <h3 className="font-semibold mb-4">
        Add Category
      </h3>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Category Name"
          className="w-full h-12 px-4 border border-zinc-300 rounded-xl"
        />

        <button className="w-full h-12 bg-black text-white rounded-xl">
          Save Category
        </button>
      </div>
    </div>
  );
}