const pool = require('./pool');

async function initDB() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL,
        text TEXT NOT NULL,
        added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("✅ messages table ensured.");

    // Check if sample data already exists
    const res = await pool.query("SELECT COUNT(*) FROM messages");
    if (parseInt(res.rows[0].count) === 0) {
      await pool.query(`
        INSERT INTO messages (username, text)
        VALUES 
          ('Amando', 'Hi there!'),
          ('Charles', 'Hello World!');
      `);
      console.log("✅ Sample messages inserted.");
    } else {
      console.log("ℹ️ Sample messages already exist. Skipping insertion.");
    }

    await pool.end();
  } catch (err) {
    console.error("❌ Error initializing database:", err);
    process.exit(1);
  }
}

initDB();
