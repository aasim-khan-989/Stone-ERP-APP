import { Link } from "react-router-dom";
import PageHeader from "../../../components/ui/PageHeader";

export default function InventoryPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Inventory"
        subtitle="Manage inventory operations"
      />

      {/* Setup */}

      <div>
        <h2 className="font-semibold text-lg mb-4">
          Setup
        </h2>

        <div className="grid gap-4">
          <Link
            to="/inventory/categories"
            className="bg-white border border-zinc-200 rounded-3xl p-5"
          >
            Categories
          </Link>

          <Link
            to="/inventory/units"
            className="bg-white border border-zinc-200 rounded-3xl p-5"
          >
            Units
          </Link>

          <Link
            to="/inventory/products"
            className="bg-white border border-zinc-200 rounded-3xl p-5"
          >
            Products
          </Link>
        </div>
      </div>

      {/* Transactions */}

      <div>
        <h2 className="font-semibold text-lg mb-4">
          Transactions
        </h2>

        <div className="grid gap-4">
          <Link
            to="/inventory/add-stock"
            className="bg-white border border-zinc-200 rounded-3xl p-5"
          >
            Add Stock
          </Link>

          <Link
            to="/inventory/release-stock"
            className="bg-white border border-zinc-200 rounded-3xl p-5"
          >
            Release Stock
          </Link>
        </div>
      </div>

      {/* Reports */}

      <div>
        <h2 className="font-semibold text-lg mb-4">
          Reports
        </h2>

        <div className="grid gap-4">
          <Link
            to="/inventory/current-stock"
            className="bg-white border border-zinc-200 rounded-3xl p-5"
          >
            Current Stock
          </Link>

          <Link
            to="/inventory/stock-ledger"
            className="bg-white border border-zinc-200 rounded-3xl p-5"
          >
            Stock Ledger
          </Link>

          <Link
            to="/inventory/dead-stock"
            className="bg-white border border-zinc-200 rounded-3xl p-5"
          >
            Dead Stock
          </Link>

          <Link
            to="/inventory/stock-as-of-date"
            className="bg-white border border-zinc-200 rounded-3xl p-5"
          >
            Stock As Of Date
          </Link>
        </div>
      </div>
    </div>
  );
}