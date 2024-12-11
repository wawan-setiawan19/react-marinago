// src/pages/Product.js
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import TitleHead from "../components/TitleHead";
import ProductCard from "../components/ProductCard";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { apiRequest } from "../helpers/apiHelper";
import ConfirmationDelete from "../components/ConfirmationDelete";

function Product() {
  const { data: products, loading, error, refetch } = useFetch("/products"); // Menggunakan useFetch untuk mengambil data produk
  const [isDelete, setIsDelete] = useState(false);
  const [productDelete, setProductDelete] = useState(null);

  if (loading) return <div>Loading...</div>; // Menampilkan loading state
  if (error) return <div>Error: {error}</div>;

  const handleDelete = async (productId) => {
    setIsDelete(true);
    setProductDelete(productId);
  };

  const closeModal = () => {
    setIsDelete(false);
  };

  const onDelete = async () => {
    try {
      // Make the DELETE request to the backend
      await apiRequest(`/products/${productDelete}`, "DELETE");
      alert("Product deleted successfully!");
      setIsDelete(false)
      refetch();
      // You can also update the state to remove the product from the UI here
    } catch (error) {
      alert(`Error deleting product: ${error.message}`);
      setIsDelete(false)
    }
  };

  return (
    <div>
      <TitleHead title={"Produk"} />
      <main className="main-content">
        <Sidebar />
        <section className="overview">
          <Link to={`/create-product/`} className="edit-btn">
            Tambah <i data-feather="plus"></i>
          </Link>
          <div id="product-container">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                productIndex={index}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </section>
      </main>
      {isDelete && (
        <ConfirmationDelete
          classOpt={isDelete ? "confirmation-modal show" : "confirmation-modal"}
          onClose={closeModal}
          onDelete={onDelete}
        />
      )}
    </div>
  );
}

export default Product;
