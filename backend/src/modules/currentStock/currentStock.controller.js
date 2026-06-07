const currentStockService =
  require("./currentStock.service");

async function getCurrentStock(
  req,
  res
) {
  try {
    const stock =
      await currentStockService.getCurrentStock();

    res.json(stock);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message:
        "Failed to fetch current stock",
    });
  }
}

module.exports = {
  getCurrentStock,
};