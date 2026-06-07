import { useState } from "react";

import PageHeader from "../../../components/ui/PageHeader";

import { products } from "../data/products";
import { stockInTransactions } from "../data/stockIn";
import { stockOutTransactions } from "../data/stockOut";

import { calculateStockAsOfDate } from "../utils/stockAsOfDate";

export default function StockAsOfDatePage() {
  const [selectedDate, setSelectedDate] =
    useState("2026-06-30");

  const reportData =
    calculateStockAsOfDate(
      selectedDate,
      products,
      stockInTransactions,
      stockOutTransactions
    );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Stock As Of Date"
        subtitle="View stock on any date"
      />

      <div className="bg-white border border-zinc-200 rounded-3xl p-5">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) =>
            setSelectedDate(e.target.value)
          }
          className="w-full h-12 border border-zinc-300 rounded-xl px-4"
        />
      </div>

      <div className="space-y-4">
        {reportData.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-zinc-200 rounded-3xl p-5"
          >
            <h3 className="font-semibold">
              {product.name}
            </h3>

            <p className="text-sm text-zinc-500 mt-2">
              Stock:
              {" "}
              {product.stockAsOfDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}