export default function StockSummaryCard({
  item,
}) {
  return (
    <div className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">
            {item.name}
          </h3>

          <p className="text-sm text-zinc-500">
            {item.brand}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-zinc-500">
            Available
          </p>

          <p className="text-xl font-bold">
            {item.availableStock}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-xs text-zinc-500">
            Total In
          </p>

          <p className="font-semibold">
            {item.totalIn}
          </p>
        </div>

        <div>
          <p className="text-xs text-zinc-500">
            Total Out
          </p>

          <p className="font-semibold">
            {item.totalOut}
          </p>
        </div>
      </div>
    </div>
  );
}