// src/pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import ConfirmationModal from '../components/ConfirmationModal';
import TitleHead from '../components/TitleHead';

function Dashboard() {
  return (
    <div>
      <TitleHead title={"Dashboard"} />
      <main className="main-content">
        <Sidebar />
        <section className="overview">
          <h1>Apa yang perlu di cek hari ini?</h1>
          <div className="cards">
            <div className="card order">
              <div>
                <i data-feather="check-circle"></i>
              </div>
              <span>6</span>
              <p>Pesanan Hari Ini</p>
            </div>
            <div className="card pending">
              <div>
                <i data-feather="clock"></i>
              </div>
              <span>2</span>
              <p>Pending</p>
            </div>
          </div>
          <h2>Lihat pesanan terbaru hari ini</h2>
          <div className="order-section">
            <table>
              <thead>
                <tr>
                  <th>Nomor</th>
                  <th>Tanggal</th>
                  <th>Nama</th>
                  <th>Produk</th>
                  <th>Jumlah / Kg</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Pembayaran</th>
                  <th>Pengiriman</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody id="order-table">
              </tbody>
            </table>
            <div className="view-section">
              <a href="./pesanan.html" className="view-btn">Lihat di Pesanan</a>
            </div>
          </div>

          <h2>Lihat pembayaran yang belum dikonfirmasi</h2>
          <div className="payment-section">
            <table>
              <thead>
                <tr>
                  <th>Nomor</th>
                  <th>Tanggal</th>
                  <th>Nama</th>
                  <th>Produk</th>
                  <th>Jenis Pembayaran</th>
                  <th>Total</th>
                  <th>Status Pembayaran</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody id="payment-table">
              </tbody>
            </table>
            <div className="view-section">
              <a href="./pembayaran.html" className="view-btn">Lihat di Kelola Pembayaran</a>
            </div>
          </div>
        </section>
      </main>
      <ConfirmationModal />
    </div>
  );
}

export default Dashboard;
