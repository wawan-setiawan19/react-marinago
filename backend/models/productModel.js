const db = require('../db');

// Fungsi untuk mendapatkan semua pengguna
const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, results) => {
      if (err) {
        reject(err); // Jika error, kembalikan error
      } else {
        resolve(results); // Jika sukses, kembalikan hasil
      }
    });
  });
};

// Fungsi untuk mendapatkan pengguna berdasarkan ID
const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM products WHERE id = ?';
    db.query(sql, [id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]); // Ambil data pertama (karena ID unik)
      }
    });
  });
};

// Fungsi untuk menambahkan pengguna baru
const createProduct = (data) => {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO products SET ?';
    db.query(sql, data, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};
