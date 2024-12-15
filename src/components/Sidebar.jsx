// src/components/Sidebar.js
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import feather from 'feather-icons';

function Sidebar() {
  const location = useLocation(); // Get current route path

  useEffect(() => {
    feather.replace(); // Initialize feather icons
  }, [location.pathname]); // Re-run when path changes

  return (
    <aside className="sidebar">
      <nav className="nav-menu">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          <i data-feather="home"></i> Dashboard
        </Link>
        <Link to="/product" className={location.pathname === '/product' || location.pathname.includes('produk') || location.pathname.includes('product') ? 'active' : ''}>
          <i data-feather="shopping-bag"></i> Produk
        </Link>
        <Link to="/acara" className={location.pathname === '/acara' || location.pathname.includes('acara') || location.pathname.includes('acara') ? 'active' : ''}>
          <i data-feather="watch"></i> Acara
        </Link>
        <Link to="/pesanan" className={location.pathname === '/pesanan' ? 'active' : ''}>
          <i data-feather="file-text"></i> Pesanan
        </Link>
        <Link to="#" className={location.pathname === '/kelola-konten' ? 'active' : ''}>
          <i data-feather="file-plus"></i> Kelola Konten
        </Link>
        <Link to="/pembayaran" className={location.pathname === '/pembayaran' ? 'active' : ''}>
          <i data-feather="dollar-sign"></i> Kelola Pembayaran
        </Link>
        <Link to="/report" className={location.pathname === '/report' ? 'active' : ''}>
          <i data-feather="trending-up"></i> Laporan Penjualan
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
