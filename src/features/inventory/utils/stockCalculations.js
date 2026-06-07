export function calculateCurrentStock(
  products,
  stockInTransactions,
  stockOutTransactions
) {
  return products.map((product) => {
    const totalIn = stockInTransactions
      .filter(
        (transaction) =>
          transaction.productId === product.id
      )
      .reduce(
        (sum, transaction) =>
          sum + transaction.quantity,
        0
      );

    const totalOut = stockOutTransactions
      .filter(
        (transaction) =>
          transaction.productId === product.id
      )
      .reduce(
        (sum, transaction) =>
          sum + transaction.quantity,
        0
      );

    return {
      ...product,
      totalIn,
      totalOut,
      availableStock:
        totalIn - totalOut,
    };
  });
}