export function calculateDeadStock(
  products,
  stockInTransactions,
  stockOutTransactions
) {
  const today = new Date();

  return products.map((product) => {
    const movements = [
      ...stockInTransactions,
      ...stockOutTransactions,
    ]
      .filter(
        (transaction) =>
          transaction.productId === product.id
      )
      .sort(
        (a, b) =>
          new Date(b.transactionDate) -
          new Date(a.transactionDate)
      );

    const lastMovement =
      movements.length > 0
        ? movements[0].transactionDate
        : null;

    const daysSinceMovement =
      lastMovement
        ? Math.floor(
            (today -
              new Date(lastMovement)) /
              (1000 * 60 * 60 * 24)
          )
        : null;

    return {
      ...product,
      lastMovement,
      daysSinceMovement,
      isDeadStock:
        daysSinceMovement > 90,
    };
  });
}