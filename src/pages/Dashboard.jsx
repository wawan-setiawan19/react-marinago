// src/pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar';
// import ConfirmationModal from '../components/ConfirmationModal';
import TitleHead from '../components/TitleHead';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import OrderSection from '../components/OrderSection';
import PaymentSection from '../components/PaymentSection';

function Dashboard() {
  const { data: orders, loading: loadingOrders, error: errorOrders } = useFetch('/orders');
  const { data: payments, loading: loadingPayments, error: errorPayments } = useFetch('/payments');

  if (loadingOrders || loadingPayments) return <div>Loading.....</div>;
  if (errorOrders || errorPayments) return <div>Error loading data...</div>;

  // Assuming that "Pesanan Hari Ini" is the number of orders today
  const todayOrders = orders ? orders.filter(order => new Date(order.tanggal).toDateString() === new Date().toDateString()).length : 0;
  
  // Assuming that "Pending" refers to orders that are either pending or waiting for payment confirmation
  const pendingOrders = orders ? orders.filter(order => order.status === 'Pending' || order.statusPembayaran === 'Menunggu Konfirmasi').length : 0;

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
              <span>{todayOrders}</span>
              <p>Pesanan Hari Ini</p>
            </div>
            <div className="card pending">
              <div>
                <i data-feather="clock"></i>
              </div>
              <span>{pendingOrders}</span>
              <p>Pending</p>
            </div>
          </div>

          <h2>Lihat pesanan terbaru hari ini</h2>
          <div className="order-section">
            <OrderSection orders={orders} />
            <div className="view-section">
              <Link to={'/pesanan'} className='view-btn'>
                Lihat di Pesanan
              </Link>
            </div>
          </div>

          <h2>Lihat pembayaran yang belum dikonfirmasi</h2>
          <div className="payment-section">
            <PaymentSection payments={payments} />
            <div className="view-section">
              <Link to={'/pembayaran'} className='view-btn'>
                Lihat di Pembayaran
              </Link>
            </div>
          </div>
        </section>
      </main>
      {/* <ConfirmationModal /> */}
    </div>
  );
}

export default Dashboard;
