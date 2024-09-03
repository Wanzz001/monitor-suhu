// Import modul yang diperlukan
const express = require('express');
const connection = require('./database'); // Import modul koneksi dari database.js

// Buat aplikasi Express
const app = express();

const path = require('path');


// Menentukan direktori tempat file HTML berada
const publicDirectoryPath = path.join(__dirname, 'public');
app.use(express.static(publicDirectoryPath));

// Endpoint untuk menampilkan tampilan HTML
app.get('/', (req, res) => {
  // Mengirimkan file HTML sebagai respons
  res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

// Endpoint untuk mengambil data dari database
app.get('/data', (req, res) => {
    // Mengubah query SQL untuk mengambil data terbaru berdasarkan ID
    connection.query('SELECT * FROM monitor ORDER BY id DESC LIMIT 1', (error, results, fields) => {
      if (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      // Mengirim data terbaru sebagai respons
      res.json(results[0]);
    });
  });
  


// Endpoint untuk menambahkan data baru ke database
app.get('/add-data', (req, res) => {
    // Mengambil data dari query string
    const newData = {
      kelembapan: req.query.kelembapan,
      suhu_ruang: req.query.suhu_ruang,
      suhu_air: req.query.suhu_air,
      ph_air: req.query.ph_air,
      time: req.query.time
    };
  
    // Query untuk menambahkan data baru ke tabel 'data'
    connection.query('INSERT INTO monitor SET ?', newData, (error, results, fields) => {
      if (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      // Berhasil menambahkan data
      res.status(200).send('Data added successfully');
    });
  });
    

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
