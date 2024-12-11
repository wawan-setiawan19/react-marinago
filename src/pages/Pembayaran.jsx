// src/pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar';
// import ConfirmationModal from '../components/ConfirmationModal';
import TitleHead from '../components/TitleHead';
import PaymentSection from '../components/PaymentSection';
import useFetch from '../hooks/useFetch';

function Pembayaran() {
    const { data: payments, loading: loadingPayments, error: errorPayments } = useFetch('/payments');
    if(loadingPayments) return <div>Loading</div>
    if(errorPayments) return <div>Error</div>
    return (
        <div>
            <TitleHead title={"Pembayaran"} />
            <main className="main-content">
                <Sidebar />
                <section className="overview">
                    <div className="cards">
                        <div className="card order-done">
                            <div>
                                <i data-feather="check-circle"></i>
                            </div>
                            <span>6</span>
                            <p>Telah Dikonfirmasi</p>
                        </div>
                        <div className="card pending">
                            <div>
                                <i data-feather="clock"></i>
                            </div>
                            <span>2</span>
                            <p>Menunggu Konfirmasi</p>
                        </div>
                    </div>
                    <h3 className="title-table">Lihat pembayaran yang belum dikonfirmasi</h3>
                    <div className="payment-section">
                        <PaymentSection payments={payments} />
                    </div>
                </section>
            </main>
            {/* <ConfirmationModal /> */}
        </div>
    );
}

export default Pembayaran;
