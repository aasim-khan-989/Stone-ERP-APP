export default function LedgerEntryCard({
  entry,
}) {
  return (
    <div className="bg-white border border-zinc-200 rounded-2xl p-4">
      <div className="flex justify-between">
        <div>
          <p className="font-medium">
            {entry.transactionDate}
          </p>

          <p className="text-sm text-zinc-500">
            {entry.referenceNo}
          </p>
        </div>

        <div>
          <span
            className={`text-sm font-semibold ${
              entry.type === "IN"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {entry.type}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-xs text-zinc-500">
            Quantity
          </p>

          <p className="font-semibold">
            {entry.quantity}
          </p>
        </div>

        <div>
          <p className="text-xs text-zinc-500">
            Balance
          </p>

          <p className="font-semibold">
            {entry.balance}
          </p>
        </div>
      </div>
    </div>
  );
}