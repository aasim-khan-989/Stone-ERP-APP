const express = require("express");

const router = express.Router();

const {
  getCurrentStock,
} = require("./currentStock.controller");

router.get(
  "/",
  getCurrentStock
);

module.exports = router;