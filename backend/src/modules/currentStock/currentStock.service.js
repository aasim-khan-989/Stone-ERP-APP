const pool = require("../../config/db");

async function getCurrentStock() {
  const result = await pool.query(`
    SELECT
      p.id,
      p.pcode,
      p.name,

      COALESCE(
        SUM(
          CASE
            WHEN st.transaction_type = 'IN'
            THEN st.quantity
            ELSE 0
          END
        ),
        0
      ) AS total_in,

      COALESCE(
        SUM(
          CASE
            WHEN st.transaction_type = 'OUT'
            THEN st.quantity
            ELSE 0
          END
        ),
        0
      ) AS total_out,

      COALESCE(
        SUM(
          CASE
            WHEN st.transaction_type = 'IN'
            THEN st.quantity

            WHEN st.transaction_type = 'OUT'
            THEN -st.quantity

            ELSE 0
          END
        ),
        0
      ) AS available_stock

    FROM products p

    LEFT JOIN stock_transactions st
      ON p.id = st.product_id

    GROUP BY
      p.id,
      p.pcode,
      p.name

    ORDER BY p.name
  `);

  return result.rows;
}

module.exports = {
  getCurrentStock,
};