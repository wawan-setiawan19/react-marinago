// src/components/OrderSection.js
import React from 'react';

function OrderSection() {
  return (
    <div className="order-section">
      <h2>Lihat pesanan terbaru hari ini</h2>
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
          {/* Data pesanan ditampilkan di sini */}
        </tbody>
      </table>
      <div className="view-section">
        <a href="/pesanan" className="view-btn">Lihat di Pesanan</a>
      </div>
    </div>
  );
}

export default OrderSection;
