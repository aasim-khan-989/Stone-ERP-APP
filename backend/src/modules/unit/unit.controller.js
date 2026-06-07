const unitService = require(
  "./unit.service"
);

async function getUnits(
  req,
  res
) {
  try {
    const units =
      await unitService.getAllUnits();

    res.json(units);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message:
        "Failed to fetch units",
    });
  }
}

async function createUnit(
  req,
  res
) {
  try {
    const unit =
      await unitService.createUnit(
        req.body
      );

    res.status(201).json(unit);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message:
        "Failed to create unit",
    });
  }
}

module.exports = {
  getUnits,
  createUnit,
};