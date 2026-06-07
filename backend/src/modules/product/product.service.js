const pool = require("../../config/db");

async function getAllProducts() {
  const result = await pool.query(`
    SELECT
      p.*,
      c.name AS category_name,
      u.name AS unit_name,
      u.ucode
    FROM products p
    JOIN categories c
      ON p.category_id = c.id
    JOIN units u
      ON p.unit_id = u.id
    ORDER BY p.id DESC
  `);

  return result.rows;
}

async function createProduct(data) {
  const {
    pcode,
    name,
    category_id,
    unit_id,
    brand,
    size,
    series,
    color,
    notes,
  } = data;

  const result = await pool.query(
    `
    INSERT INTO products
    (
      pcode,
      name,
      category_id,
      unit_id,
      brand,
      size,
      series,
      color,
      notes
    )
    VALUES
    (
      $1,$2,$3,$4,$5,$6,$7,$8,$9
    )
    RETURNING *
    `,
    [
      pcode,
      name,
      category_id,
      unit_id,
      brand,
      size,
      series,
      color,
      notes,
    ]
  );

  return result.rows[0];
}

module.exports = {
  getAllProducts,
  createProduct,
};