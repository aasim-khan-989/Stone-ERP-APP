const pool = require("../../config/db");

async function getAllTransactions() {
  const result = await pool.query(`
    SELECT
      st.*,
      p.pcode,
      p.name AS product_name
    FROM stock_transactions st
    JOIN products p
      ON st.product_id = p.id
    ORDER BY st.id DESC
  `);

  return result.rows;
}

async function createTransaction(data) {
  const {
    product_id,
    transaction_type,
    quantity,
    rate,
    amount,
    reference_no,
    remarks,
    transaction_date,
  } = data;

  const result = await pool.query(
    `
    INSERT INTO stock_transactions
    (
      product_id,
      transaction_type,
      quantity,
      rate,
      amount,
      reference_no,
      remarks,
      transaction_date
    )
    VALUES
    (
      $1,$2,$3,$4,$5,$6,$7,$8
    )
    RETURNING *
    `,
    [
      product_id,
      transaction_type,
      quantity,
      rate,
      amount,
      reference_no,
      remarks,
      transaction_date,
    ]
  );

  return result.rows[0];
}

module.exports = {
  getAllTransactions,
  createTransaction,
};