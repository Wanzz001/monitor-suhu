// Import modul mysql
const mysql = require('mysql');

// Buat koneksi ke database MySQL
const connection = mysql.createConnection({
  host: 'mysql.railway.internal',
  user: 'root',
  password: 'rVCPYlSXYNpIOxRBQWwWLwYLIeYUjhCW', // Karena Anda tidak menggunakan password
  database: 'railway' // Nama database yang Anda gunakan
});

// Coba membuat koneksi
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Export koneksi agar dapat digunakan di file lain
module.exports = connection;
