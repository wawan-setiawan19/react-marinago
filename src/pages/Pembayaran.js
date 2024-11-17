// src/pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import ConfirmationModal from '../components/ConfirmationModal';
import TitleHead from '../components/TitleHead';

function Pembayaran() {
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
                    </div>
                </section>
            </main>
            <ConfirmationModal />
        </div>
    );
}

export default Pembayaran;
