const express = require("express");

const router = express.Router();

const {
  getProducts,
  createProduct,
} = require("./product.controller");

router.get(
  "/",
  getProducts
);

router.post(
  "/",
  createProduct
);

module.exports = router;