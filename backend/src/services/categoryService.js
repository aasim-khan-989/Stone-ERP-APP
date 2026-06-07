const pool = require("../config/db");

async function getAllCategories() {
  const result = await pool.query(`
    SELECT *
    FROM categories
    ORDER BY id DESC
  `);

  return result.rows;
}

async function createCategory(data) {
  const { name, notes } = data;

  const result = await pool.query(
    `
    INSERT INTO categories
    (
      name,
      notes
    )
    VALUES
    (
      $1,
      $2
    )
    RETURNING *
    `,
    [name, notes]
  );

  return result.rows[0];
}

module.exports = {
  getAllCategories,
  createCategory,
};