import PageHeader from "../../../components/ui/PageHeader";

import { products } from "../data/products";
import { stockInTransactions } from "../data/stockIn";
import { stockOutTransactions } from "../data/stockOut";

import { generateLedger } from "../utils/ledgerCalculations";

import LedgerEntryCard from "../components/LedgerEntryCard";

export default function StockLedgerPage() {
  const product = products[0];

  const ledger = generateLedger(
    product.id,
    stockInTransactions,
    stockOutTransactions
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Stock Ledger"
        subtitle={product.name}
      />

      <div className="space-y-4">
        {ledger.map((entry) => (
          <LedgerEntryCard
            key={`${entry.type}-${entry.id}`}
            entry={entry}
          />
        ))}
      </div>
    </div>
  );
}