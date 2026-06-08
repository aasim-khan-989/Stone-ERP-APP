import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import DashboardPage from "../features/dashboard/pages/DashboardPage";
import InventoryPage from "../features/inventory/pages/InventoryPage";
import ReportsPage from "../features/reports/pages/ReportsPage";
import SettingsPage from "../features/settings/pages/SettingsPage";

import CategoriesPage from "../features/inventory/pages/CategoriesPage";
import UnitsPage from "../features/inventory/pages/UnitsPage";

import ProductsPage from "../features/inventory/pages/ProductsPage";
import AddStockPage from "../features/inventory/pages/AddStockPage";
import StockOutPage from "../features/inventory/pages/StockOutPage";
import CurrentStockPage from "../features/inventory/pages/CurrentStockPage";

import StockLedgerPage from "../features/inventory/pages/StockLedgerPage";
import DeadStockPage from "../features/inventory/pages/DeadStockPage";
import StockAsOfDatePage from "../features/inventory/pages/StockAsOfDatePage";


export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={<DashboardPage />}
        />

        <Route
          path="/inventory"
          element={<InventoryPage />}
        />

        <Route
          path="/inventory/categories"
          element={<CategoriesPage />}
        />

        <Route
          path="/inventory/units"
          element={<UnitsPage />}
        />

        <Route
          path="/inventory/products"
          element={<ProductsPage />}
        />

        <Route
          path="/inventory/add-stock"
          element={<AddStockPage />}
        />

<Route
  path="/inventory/stock-out"
  element={<StockOutPage />}
/>

        <Route
          path="/inventory/current-stock"
          element={<CurrentStockPage />}
        />

        <Route
          path="/reports"
          element={<ReportsPage />}
        />

        <Route
          path="/settings"
          element={<SettingsPage />}
        />

        <Route
  path="/inventory/stock-ledger"
  element={<StockLedgerPage />}
/>

<Route
  path="/inventory/dead-stock"
  element={<DeadStockPage />}
/>

<Route
  path="/inventory/stock-as-of-date"
  element={<StockAsOfDatePage />}
/>
      </Route>
    </Routes>
  );
}