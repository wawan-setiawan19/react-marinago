// src/components/OrderSection.js
import React from 'react';

function OrderSection({ orders }) {
  return (
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
        {orders.map((item) => {
          return (
            <tr key={item.id}>
              <td>ORD{item.id}</td>
              <td>{item.tanggal}</td>
              <td>{item.nama}</td>
              <td>{item.produk}</td>
              <td>{item.jumlah || item.jenisPembayaran || ''}</td>
              <td>{item.total}</td>
              <td className={item.status === 'Pending' || item.statusPembayaran === 'Menunggu Konfirmasi' ? 'status-pending' : 'status-non-pending'}>
                {item.status || item.statusPembayaran || ''}
              </td>
              <td>{item.pembayaran || ''}</td>
              {item.pengiriman ? (
                <td className={item.pengiriman === 'Pending' ? 'status-pending' : 'status-non-pending'}>
                  {item.pengiriman}
                </td>
              ) : (
                <td></td>
              )}
              <td>
                <a href={`./detail_pesanan.html`} className="detail-btn">Detail</a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default OrderSection;
