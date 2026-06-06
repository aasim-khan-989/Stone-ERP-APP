import PageHeader from "../../../components/ui/PageHeader";

import ProductForm from "../components/ProductForm";
import ProductCard from "../components/ProductCard";

import { products } from "../data/products";

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Products"
        subtitle="Manage inventory products"
      />

      <ProductForm />

      <div className="space-y-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}