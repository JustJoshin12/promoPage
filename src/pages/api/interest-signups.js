// src/pages/api/interest-signups.js
import { Pool } from "pg";

const databasePool = new Pool({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
});

const emailValidationPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxNameLength = 120;
const maxEmailLength = 254;
const maxCommentLength = 2000;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  const { fullName, emailAddress, commentText } = req.body || {};

  const sanitizedFullName = String(fullName || "").trim();
  const normalizedEmailAddress = String(emailAddress || "")
    .trim()
    .toLowerCase();
  const sanitizedCommentText = String(commentText || "").trim();

  if (!sanitizedFullName || !normalizedEmailAddress || !sanitizedCommentText) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (
    sanitizedFullName.length > maxNameLength ||
    normalizedEmailAddress.length > maxEmailLength ||
    sanitizedCommentText.length > maxCommentLength
  ) {
    return res
      .status(400)
      .json({ message: "One or more fields exceeded allowed length." });
  }

  if (!emailValidationPattern.test(normalizedEmailAddress)) {
    return res.status(400).json({ message: "Invalid email address." });
  }

  try {
    await databasePool.query(`
      CREATE TABLE IF NOT EXISTS interest_signups (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(120) NOT NULL,
        email_address VARCHAR(254) NOT NULL,
        comment_text TEXT NOT NULL,
        submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    const insertResult = await databasePool.query(
      `INSERT INTO interest_signups (full_name, email_address, comment_text)
       VALUES ($1, $2, $3)
       RETURNING id, full_name, email_address, comment_text, submitted_at`,
      [sanitizedFullName, normalizedEmailAddress, sanitizedCommentText]
    );

    return res.status(201).json({
      message: "Submission saved.",
      data: insertResult.rows[0],
    });
  } catch (databaseError) {
    console.error("Error saving interest signup:", databaseError);
    return res.status(500).json({ message: "Server error." });
  }
}
