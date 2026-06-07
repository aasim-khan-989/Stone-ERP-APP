const stockTransactionService =
  require("./stockTransaction.service");

async function getTransactions(
  req,
  res
) {
  try {
    const transactions =
      await stockTransactionService.getAllTransactions();

    res.json(transactions);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message:
        "Failed to fetch transactions",
    });
  }
}

async function createTransaction(
  req,
  res
) {
  try {
    const transaction =
      await stockTransactionService.createTransaction(
        req.body
      );

    res.status(201).json(transaction);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message:
        "Failed to create transaction",
    });
  }
}

module.exports = {
  getTransactions,
  createTransaction,
};