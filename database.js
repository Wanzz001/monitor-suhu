// Import modul mysql
const mysql = require('mysql');

// Buat koneksi ke database MySQL
const connection = mysql.createConnection({
  port: 3306,
  host: 'bpj12v8wgtwt3lnbmu8s-mysql.services.clever-cloud.com',
  user: 'ux29f5wz9ypwlmus',
  password: 'nlbCODddsiYdgIwLOTr0', // Karena Anda tidak menggunakan password
  database: 'bpj12v8wgtwt3lnbmu8s' // Nama database yang Anda gunakan
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
