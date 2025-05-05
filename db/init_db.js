const { Pool } = require("pg");

// Replace this with your real Render connection string (or use dotenv)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "your-render-db-url-here",
  ssl: {
    rejectUnauthorized: false,
  },
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    user TEXT NOT NULL,
    text TEXT NOT NULL,
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

const insertSampleDataQuery = `
  INSERT INTO messages (user, text)
  VALUES 
    ('Amando', 'Hi there!'),
    ('Charles', 'Hello World!');
`;

async function initDB() {
  try {
    await pool.query(createTableQuery);
    console.log("✅ messages table created.");

    await pool.query(insertSampleDataQuery);
    console.log("✅ Sample messages inserted.");

    await pool.end();
  } catch (err) {
    console.error("❌ Error initializing database:", err);
    process.exit(1);
  }
}

initDB();
