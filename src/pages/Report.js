// src/pages/Dashboard.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import ConfirmationModal from '../components/ConfirmationModal';
import TitleHead from '../components/TitleHead';

function Report() {
    return (
        <div>
            <TitleHead title={"Laporan Penjualan"} />
            <main className="main-content">
                <Sidebar />
                <section className="overview">
                    <div className="filter-section">
                        <div>
                            <div>Dari Tanggal</div>
                            <div>1 Oktober 2024</div>
                        </div>
                        <div>
                            <div>Hingga Tanggal</div>
                            <div>31 Oktober 2024</div>
                        </div>
                    </div>
                    <div className="download-section">
                        <div>
                            <div>Laporan Penjualan</div>
                            <div>31 Oktober 2024</div>
                        </div>
                        <div className="btn-download">
                            <button><i data-feather="printer"></i>Cetak</button>
                        </div>
                    </div>
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

export default Report;