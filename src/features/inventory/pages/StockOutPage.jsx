import PageHeader from "../../../components/ui/PageHeader";

export default function StockOutPage() {
  return (
    <div>
      <PageHeader
        title="Stock Out"
        subtitle="Release stock from inventory"
      />

      <div className="bg-white border border-zinc-200 rounded-3xl p-5">
        Stock Out Module
      </div>
    </div>
  );
}