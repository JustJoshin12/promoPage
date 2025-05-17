const { pool } = require("../config/db");

const createPromoTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS promo_submissions (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(255),
      last_name VARCHAR(255),
      attendance_frequency TEXT,
      comment TEXT,
      submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  await pool.query(query);
  console.log("✅ Promo Submissions table ready in PostgreSQL");
};

createPromoTable();

module.exports = pool;
