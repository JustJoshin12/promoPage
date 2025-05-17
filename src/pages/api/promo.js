import { Pool } from "pg";
const isProd = process.env.NODE_ENV === "production";
console.log(process.env.PGHOST);

export const pool = new Pool({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  ssl: {
    rejectUnauthorized: false, // 🔒 Force SSL for Neon
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { firstName, lastName, attendanceFrequency, comment } = req.body;

  if (!firstName || !lastName || !attendanceFrequency || !comment) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS promo_submissions (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(255),
        last_name VARCHAR(255),
        attendance_frequency TEXT,
        comment TEXT,
        submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    const result = await pool.query(
      `INSERT INTO promo_submissions (first_name, last_name, attendance_frequency, comment)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [firstName, lastName, attendanceFrequency, comment]
    );

    return res
      .status(201)
      .json({ message: "Submission saved!", data: result.rows[0] });
  } catch (err) {
    console.error("Error saving promo submission:", err);
    return res.status(500).json({ message: "Server error" });
  }
}
