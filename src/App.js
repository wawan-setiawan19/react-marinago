// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import Pesanan from './pages/Pesanan';
import Pembayaran from './pages/Pembayaran';
import Report from './pages/Report';
import './assets/index.css';
import './assets/edit_produk.css';
import './assets/detail_pesanan.css';
import './assets/produk.css';
import './assets/laporan_penjualan.css';
import feather from 'feather-icons';
import Header from './components/Header';
import EditProduct from './pages/EditProduct';
import CreateProduct from './pages/CreateProduct';

function App() {
  useEffect(() => {
    feather.replace(); // Initialize feather icons
  }, []);
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/pesanan" element={<Pesanan />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/report" element={<Report />} />
        <Route path="/edit-produk/:productIndex" element={<EditProduct />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
