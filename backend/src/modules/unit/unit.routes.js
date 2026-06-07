const express = require("express");

const router = express.Router();

const {
  getUnits,
  createUnit,
} = require("./unit.controller");

router.get(
  "/",
  getUnits
);

router.post(
  "/",
  createUnit
);

module.exports = router;