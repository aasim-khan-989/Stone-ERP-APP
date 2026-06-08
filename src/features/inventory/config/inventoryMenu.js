export const inventoryMenu = [
  {
    title: "Setup",
    items: [
      {
        label: "Categories",
        path: "/inventory/categories",
      },
      {
        label: "Units",
        path: "/inventory/units",
      },
      {
        label: "Products",
        path: "/inventory/products",
      },
    ],
  },

  {
    title: "Transactions",
    items: [
      {
        label: "Stock In",
        path: "/inventory/add-stock",
      },
      {
        label: "Stock Out",
        path: "/inventory/stock-out",
      },
      {
        label: "Stock Adjustment",
        path: "/inventory/stock-adjustment",
      },
    ],
  },

  {
    title: "Reports",
    items: [
      {
        label: "Current Stock",
        path: "/inventory/current-stock",
      },
      {
        label: "Stock Ledger",
        path: "/inventory/stock-ledger",
      },
      {
        label: "Dead Stock",
        path: "/inventory/dead-stock",
      },
      {
        label: "Stock As Of Date",
        path: "/inventory/stock-as-of-date",
      },
      {
        label: "Transaction History",
        path: "/inventory/transaction-history",
      },
    ],
  },

  {
    title: "Audit",
    items: [
      {
        label: "Audit Logs",
        path: "/inventory/audit-logs",
      },
    ],
  },
];