// src/components/PaymentSection.js
import React from 'react';

function PaymentSection() {
  return (
    <div className="payment-section">
      <h2>Lihat pembayaran yang belum dikonfirmasi</h2>
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
          {/* Data pembayaran ditampilkan di sini */}
        </tbody>
      </table>
      <div className="view-section">
        <a href="/pembayaran" className="view-btn">Lihat di Kelola Pembayaran</a>
      </div>
    </div>
  );
}

export default PaymentSection;
