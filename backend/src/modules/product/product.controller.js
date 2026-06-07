const productService = require(
  "./product.service"
);

async function getProducts(
  req,
  res
) {
  try {
    const products =
      await productService.getAllProducts();

    res.json(products);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message:
        "Failed to fetch products",
    });
  }
}

async function createProduct(
  req,
  res
) {
  try {
    const product =
      await productService.createProduct(
        req.body
      );

    res.status(201).json(product);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message:
        "Failed to create product",
    });
  }
}

module.exports = {
  getProducts,
  createProduct,
};