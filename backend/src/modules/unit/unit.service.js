const pool = require("../../config/db");

async function getAllUnits() {
  const result = await pool.query(`
    SELECT *
    FROM units
    ORDER BY id DESC
  `);

  return result.rows;
}

async function createUnit(data) {
  const {
    name,
    ucode,
    notes,
  } = data;

  const result = await pool.query(
    `
    INSERT INTO units
    (
      name,
      ucode,
      notes
    )
    VALUES
    (
      $1,
      $2,
      $3
    )
    RETURNING *
    `,
    [
      name,
      ucode,
      notes,
    ]
  );

  return result.rows[0];
}

module.exports = {
  getAllUnits,
  createUnit,
};