// src/pages/Product.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import ConfirmationModal from '../components/ConfirmationModal';
import TitleHead from '../components/TitleHead';
import ProductCard from '../components/ProductCard';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

function Product() {
    const { data: products, loading, error } = useFetch('/products');  // Menggunakan useFetch untuk mengambil data produk

    if (loading) return <div>Loading...</div>;  // Menampilkan loading state
    if (error) return <div>Error: {error}</div>;

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
                            <ProductCard key={index} product={product} productIndex={index} />
                        ))}
                    </div>
                </section>
            </main>
            <ConfirmationModal />
        </div>
    );
}

export default Product;
