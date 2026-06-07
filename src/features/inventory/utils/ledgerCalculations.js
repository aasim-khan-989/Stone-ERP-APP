export function generateLedger(
  productId,
  stockInTransactions,
  stockOutTransactions
) {
  const stockIn = stockInTransactions.map(
    (transaction) => ({
      ...transaction,
      type: "IN",
    })
  );

  const stockOut = stockOutTransactions.map(
    (transaction) => ({
      ...transaction,
      type: "OUT",
    })
  );

  const transactions = [
    ...stockIn,
    ...stockOut,
  ]
    .filter(
      (transaction) =>
        transaction.productId === productId
    )
    .sort(
      (a, b) =>
        new Date(a.transactionDate) -
        new Date(b.transactionDate)
    );

  let balance = 0;

  return transactions.map((transaction) => {
    if (transaction.type === "IN") {
      balance += transaction.quantity;
    } else {
      balance -= transaction.quantity;
    }

    return {
      ...transaction,
      balance,
    };
  });
}