const db = require('./database');

function createUser({ name, email, passwordHash }) {
  const stmt = db.prepare(
    'INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)'
  );
  const result = stmt.run(name, email, passwordHash);
  return findUserById(result.lastInsertRowid);
}

function findUserByEmail(email) {
  return db.prepare('SELECT * FROM users WHERE email = ?').get(email);
}

function findUserById(id) {
  return db
    .prepare('SELECT id, name, email, created_at FROM users WHERE id = ?')
    .get(id);
}

module.exports = { createUser, findUserByEmail, findUserById };
