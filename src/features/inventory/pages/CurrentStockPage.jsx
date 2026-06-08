import PageHeader from "../../../components/ui/PageHeader";

import StockSummaryCard from "../components/StockSummaryCard";

import useCurrentStock from "../hooks/useCurrentStock";

export default function CurrentStockPage() {
  const {
    data,
    loading,
  } = useCurrentStock();

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
        title="Current Stock"
        subtitle="Live inventory balance"
      />

      <div className="space-y-4">
        {data.map((item) => (
          <StockSummaryCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}