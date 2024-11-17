// src/pages/Product.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import ConfirmationModal from '../components/ConfirmationModal';
import TitleHead from '../components/TitleHead';
import ProductCard from '../components/ProductCard';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import { apiRequest } from '../helpers/apiHelper';

function Product() {
    const { data: products, loading, error, refetch } = useFetch('/products');  // Menggunakan useFetch untuk mengambil data produk

    if (loading) return <div>Loading...</div>;  // Menampilkan loading state
    if (error) return <div>Error: {error}</div>;

    const handleDelete = async (productId) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                // Make the DELETE request to the backend
                await apiRequest(`/products/${productId}`, "DELETE");
                alert("Product deleted successfully!");
                refetch();
                // You can also update the state to remove the product from the UI here
            } catch (error) {
                alert(`Error deleting product: ${error.message}`);
            }
        }
    };

    return (
        <div>
            <TitleHead title={"Produk"} />
            <main className="main-content">
                <Sidebar />
                <section className="overview">
                <Link to={`/create-product/`} className='edit-btn'>
                        Tambah <i data-feather="plus"></i>
                    </Link>
                    <div id="product-container">
                        {products.map((product, index) => (
                            <ProductCard key={index} product={product} productIndex={index} handleDelete = {handleDelete}/>
                        ))}
                    </div>
                </section>
            </main>
            <ConfirmationModal />
        </div>
    );
}

export default Product;
