import PageHeader from "../../../components/ui/PageHeader";
import CategoryForm from "../components/CategoryForm";
import { categories } from "../data/categories";

export default function CategoriesPage() {
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
            className="bg-white border border-zinc-200 rounded-2xl p-4"
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
}