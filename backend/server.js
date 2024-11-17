const express = require('express');
const cors = require('cors')
const productRoutes = require('./routes/productRoutes')
const path = require('path');
const app = express();
const PORT = 5000;

const corsOptions = {
    origin: 'http://localhost:3000', // Ganti dengan URL frontend Anda
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };

  app.use(cors(corsOptions));

// Middleware untuk parsing JSON
app.use(express.json());

// Contoh route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/products', productRoutes)

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});