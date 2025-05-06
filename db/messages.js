const pool = require("./pool");

// Get all messages
async function getAllMessages() {
  const result = await pool.query("SELECT * FROM messages ORDER BY added DESC");
  return result.rows;
}

// Insert a new message
async function insertMessage(user, text) {
  await pool.query("INSERT INTO messages (username, text) VALUES ($1, $2)", [user, text]);
}

async function getMessageById(id) {
    const result = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
    return result.rows
}

// Delete all messages
async function deleteMessages() {
  await pool.query("DELETE FROM messages");
}

module.exports = {
  getAllMessages,
  insertMessage,
  deleteMessages,
};

