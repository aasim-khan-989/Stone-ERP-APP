import PageHeader from "../../../components/ui/PageHeader";

import { products } from "../data/products";
import { stockInTransactions } from "../data/stockIn";
import { stockOutTransactions } from "../data/stockOut";

import { calculateDeadStock } from "../utils/deadStockCalculations";

export default function DeadStockPage() {
  const deadStockData = calculateDeadStock(
    products,
    stockInTransactions,
    stockOutTransactions
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Dead Stock"
        subtitle="Products with no recent movement"
      />

      {deadStockData.map((product) => (
        <div
          key={product.id}
          className="bg-white border border-zinc-200 rounded-3xl p-5"
        >
          <h3 className="font-semibold">
            {product.name}
          </h3>

          <p className="text-sm text-zinc-500 mt-2">
            Last Movement:{" "}
            {product.lastMovement || "No Activity"}
          </p>

          <p className="text-sm text-zinc-500">
            Days Since Movement:{" "}
            {product.daysSinceMovement ?? "-"}
          </p>

          <p
            className={`mt-2 font-semibold ${
              product.isDeadStock
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {product.isDeadStock
              ? "Dead Stock"
              : "Active Stock"}
          </p>
        </div>
      ))}
    </div>
  );
}