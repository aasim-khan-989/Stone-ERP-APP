import PageHeader from "../../../components/ui/PageHeader";

import CategoryForm from "../components/CategoryForm";

import useCategories from "../hooks/useCategories";

export default function CategoriesPage() {
  const {
    categories,
    loading,
  } = useCategories();

  if (loading) {
    return (
      <div className="p-4">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Categories"
        subtitle="Manage product categories"
      />

      <CategoryForm />

      <div className="space-y-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="
              bg-white
              border
              border-zinc-200
              rounded-2xl
              p-4
            "
          >
            <div className="font-medium">
              {category.name}
            </div>

            <div
              className="
                text-sm
                text-zinc-500
              "
            >
              {category.notes}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}