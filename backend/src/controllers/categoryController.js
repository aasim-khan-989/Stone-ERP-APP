const categoryService = require(
  "../services/categoryService"
);

async function getCategories(
  req,
  res
) {
  try {
    const categories =
      await categoryService.getAllCategories();

    res.json(categories);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message:
        "Failed to fetch categories",
    });
  }
}

async function createCategory(
  req,
  res
) {
  try {
    const category =
      await categoryService.createCategory(
        req.body
      );

    res.status(201).json(category);
  } catch (error) {
    console.error(error);

res.status(500).json({
  error: error.message,
});

    res.status(500).json({
      message:
        "Failed to create category",
    });
  }
}

module.exports = {
  getCategories,
  createCategory,
};