// src/pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import ConfirmationModal from '../components/ConfirmationModal';
import TitleHead from '../components/TitleHead';

function Pesanan() {
    return (
        <div>
            <TitleHead title={"Pesanan"} />
            <main className="main-content">
                <Sidebar />
                <section className="overview">
                    <div className="cards">
                        <div className="card order-in">
                            <div>
                                <i data-feather="menu"></i>
                            </div>
                            <span>8</span>
                            <p>Pesanan Masuk</p>
                        </div>
                        <div className="card order-done">
                            <div>
                                <i data-feather="check-circle"></i>
                            </div>
                            <span>0</span>
                            <p>Pesanan Selesai</p>
                        </div>
                        <div className="card order-proses">
                            <div>
                                <i data-feather="rotate-ccw"></i>
                            </div>
                            <span>6</span>
                            <p>Proses</p>
                        </div>
                        <div className="card pending">
                            <div>
                                <i data-feather="clock"></i>
                            </div>
                            <span>2</span>
                            <p>Pending</p>
                        </div>
                    </div>
                    <h3 className="title-table">Kelola Pesanan</h3>
                    <div className="order-section">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
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
                    </div>
                </section>
            </main>
            <ConfirmationModal />
        </div>
    );
}

export default Pesanan;