// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Pesanan from "./pages/Pesanan";
import Pembayaran from "./pages/Pembayaran";
import Report from "./pages/Report";
import './assets/index.css';
import './assets/edit_produk.css';
import './assets/detail_pesanan.css';
import './assets/produk.css';
import './assets/laporan_penjualan.css';
import feather from "feather-icons";
import Header from "./components/Header";
import EditProduct from "./pages/EditProduct";
import CreateProduct from "./pages/CreateProduct";
import ConfirmationModal from "./components/ConfirmationModal";
import Login from "./pages/Login";

// Protected Route Component
// const ProtectedRoute = ({ children, isLogin }) => {
//   return isLogin ? children : <Login />;
// };

function App() {
  const [isLogoutNotif, setIsLogoutNotif] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const logout = async () => {
    setIsLogoutNotif(true);
  };

  const handleLogout = () => {
    localStorage.setItem("login", false);
    setIsLogin(false);
    setIsLogoutNotif(false);
  };

  const closeModal = () => {
    setIsLogoutNotif(false);
  };

  const onLogin = () => {
    setIsLogin(true);
    localStorage.setItem("login", true);
  };

  const ProtectedRoute = ({ children, isLogin, onLogin }) => {
    return isLogin ? children : <Login onLogin={onLogin} />;
  };

  useEffect(() => {
    feather.replace(); // Initialize feather icons
    const statusLocalLogin = JSON.parse(localStorage.getItem("login")) ?? false;
    setIsLogin(statusLocalLogin);
  }, []);

  return (
    <>
      {isLogin && <Header logout={logout} />}
      <Router>
        <Routes>
          <Route
            path="/"
            element={isLogin ? <Dashboard /> : <Login onLogin={onLogin} />}
          />
          <Route
            path="/product"
            element={
              <ProtectedRoute isLogin={isLogin} onLogin={onLogin}>
                <Product />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-product"
            element={
              <ProtectedRoute isLogin={isLogin} onLogin={onLogin}>
                <CreateProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pesanan"
            element={
              <ProtectedRoute isLogin={isLogin} onLogin={onLogin}>
                <Pesanan />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pembayaran"
            element={
              <ProtectedRoute isLogin={isLogin} onLogin={onLogin}>
                <Pembayaran />
              </ProtectedRoute>
            }
          />
          <Route
            path="/report"
            element={
              <ProtectedRoute isLogin={isLogin} onLogin={onLogin}>
                <Report />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-produk/:productIndex"
            element={
              <ProtectedRoute isLogin={isLogin} onLogin={onLogin}>
                <EditProduct />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
      {isLogoutNotif && (
        <ConfirmationModal
          classOpt={
            isLogoutNotif ? "confirmation-modal show" : "confirmation-modal"
          }
          onClose={closeModal}
          onLogout={handleLogout}
        />
      )}
    </>
  );
}

export default App;
