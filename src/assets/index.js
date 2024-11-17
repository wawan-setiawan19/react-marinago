// Sample data for orders and payments
const orders = [
    { nomor: 1, tanggal: '15-10-2024', nama: 'Lorem Ipsum', produk: 'Lorem Ipsum...', jumlah: '1 kg', total: 'Rp 35.000', status: 'Pending', pembayaran: 'PM12', pengiriman: 'Pending' },
    { nomor: 2, tanggal: '15-10-2024', nama: 'Lorem Ipsum', produk: 'Lorem Ipsum...', jumlah: '1 kg', total: 'Rp 35.000', status: 'Pending', pembayaran: 'PM13', pengiriman: 'Pending' },
    { nomor: 3, tanggal: '09-10-2024', nama: 'Lorem Ipsum', produk: 'Lorem Ipsum...', jumlah: '1 kg', total: 'Rp 35.000', status: 'Proses', pembayaran: 'PM14', pengiriman: 'Dikemas' },
    { nomor: 4, tanggal: '09-10-2024', nama: 'Lorem Ipsum', produk: 'Lorem Ipsum...', jumlah: '1 kg', total: 'Rp 35.000', status: 'Proses', pembayaran: 'PM15', pengiriman: 'Dikemas' },
    { nomor: 5, tanggal: '09-10-2024', nama: 'Lorem Ipsum', produk: 'Lorem Ipsum...', jumlah: '1 kg', total: 'Rp 35.000', status: 'Proses', pembayaran: 'PM16', pengiriman: 'Dikemas' },
  ];
  
  const payments = [
    { nomor: 1, tanggal: '15-10-2024', nama: 'Lorem Ipsum', produk: 'Jambu Merah...', jenisPembayaran: 'Transfer Bank', total: 'Rp 35.000', statusPembayaran: 'Menunggu Konfirmasi' },
    { nomor: 2, tanggal: '15-10-2024', nama: 'Lorem Ipsum', produk: 'Jambu Merah...', jenisPembayaran: 'Transfer Bank', total: 'Rp 35.000', statusPembayaran: 'Menunggu Konfirmasi' },
  ];
  
  // Function to render table rows
  function renderTable(data, tableId) {
    const tableBody = document.getElementById(tableId);
    tableBody.innerHTML = data.map(item => `
      <tr>
        <td>ORD${item.nomor}</td>
        <td>${item.tanggal}</td>
        <td>${item.nama}</td>
        <td>${item.produk}</td>
        <td>${item.jumlah || item.jenisPembayaran || ''}</td>
        <td>${item.total}</td>
        <td className="${item.status == 'Pending' || item.statusPembayaran == 'Menunggu Konfirmasi' ? 'status-pending' : 'status-non-pending' }">${item.status || item.statusPembayaran || ''}</td>
        ${item.pembayaran ? `<td>${item.pembayaran}</td>` : ''}
        ${item.pengiriman ? `<td className="${item.pengiriman == 'Pending' ? 'status-pending' : 'status-non-pending' }">${item.pengiriman}</td>` : ''}
        <td><a href="${tableId == 'order-table' ? './detail_pesanan.html' : ''}" className="detail-btn">Detail</a></td>
      </tr>
    `).join('');
}

const btnLogout = document.querySelector('.logout-btn')
const modalConfirmation = document.getElementById('modalConfirmation');
btnLogout.addEventListener('click', () => {
  modalConfirmation.classList.add('show'); // Tampilkan modal dengan animasi
});

const closeModalButtons = document.querySelectorAll('.close-modal');

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    modalConfirmation.classList.remove('show'); // Menghapus kelas 'show' untuk menutup modal
  });
});



  
  // Render tables on load
  document.addEventListener('DOMContentLoaded', () => {
    const orderTable = document.getElementById('order-table');
    const paymentTable = document.getElementById('payment-table');
  
    if (orderTable) {
      renderTable(orders, 'order-table');
    }
  
    if (paymentTable) {
      renderTable(payments, 'payment-table');
    }
  });
  
  