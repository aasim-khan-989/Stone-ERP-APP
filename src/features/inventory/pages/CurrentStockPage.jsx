import PageHeader from "../../../components/ui/PageHeader";

import { products } from "../data/products";
import { stockInTransactions } from "../data/stockIn";
import { stockOutTransactions } from "../data/stockOut";

import { calculateCurrentStock } from "../utils/stockCalculations";

import StockSummaryCard from "../components/StockSummaryCard";

export default function CurrentStockPage() {
  const stockData =
    calculateCurrentStock(
      products,
      stockInTransactions,
      stockOutTransactions
    );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Current Stock"
        subtitle="Live inventory balance"
      />

      <div className="space-y-4">
        {stockData.map((item) => (
          <StockSummaryCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}