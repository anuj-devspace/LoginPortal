const db = require('./database');
const bcrypt = require('bcryptjs');


const insertUser = db.prepare(`
  INSERT INTO users (name, email, password_hash)
  VALUES (?, ?, ?)
`);


function addUser(name, email, plainPassword) {
  const passwordHash = bcrypt.hashSync(plainPassword, 10); //  bcrypt.hashSync(textPass , sizeOfSecretPass)  for pass security
  try {
    insertUser.run(name, email, passwordHash);
    console.log(` Added: ${name} (${email})`);
  } catch (err) {
    console.error(` Could not add ${email}: ${err.message}`);
  }
}


const sampleUsers = [
  { name: 'Anuj', email: 'anuj@gmail.com', password: 'password123' },
  { name: 'Shivangi', email: 'shivangi302007@gmail.com', password: 'securepass' },
  { name: 'Amit', email: 'amittt@example.com', password: 'mypassword' },
  { name: 'Alien', email: 'Alien@example.com', password: 'benneDosalover' },
];


sampleUsers.forEach(u => addUser(u.name, u.email, u.password));

console.log('Added some sample users for testing');
