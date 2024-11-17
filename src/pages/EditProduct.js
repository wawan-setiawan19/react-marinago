import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ConfirmationModal from '../components/ConfirmationModal';
import TitleHead from '../components/TitleHead';
import '../assets/edit_produk.css';
import useFetch from '../hooks/useFetch';

function EditProduct() {
    const { productIndex } = useParams(); // Get the product index from the URL
    const navigate = useNavigate();
    
    const { data: products, loading, error } = useFetch(`/products/${productIndex}`);  // Menggunakan useFetch untuk mengambil data produk
    
    // State for each field
    const [name, setName] = useState('');
    const [stock, setStock] = useState(0);
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [unit, setUnit] = useState('kg');

    useEffect(() => {
        if (products) {
            const product = products; // Assuming the product is the first one in the array
            // console.log(product)
            setName(product.nama_produk);
            setStock(product.stok);
            setPrice(product.harga);
            setDescription(product.deskripsi);
            setUnit(product.satuan || 'kg');
        }
    }, [products]); // Update state when products data changes

    if (loading) return <div>Loading...</div>;  // Menampilkan loading state
    if (error) return <div>Error: {error}</div>;

    const handleSave = () => {
        // Here you would ideally update the product information in the database or state
        alert("Product saved successfully!");
        navigate(-1); // Navigate back to the previous page
    };

    const handleCancel = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <div>
            <TitleHead title="Edit Produk" />
            <main className="main-content">
                <Sidebar />
                <section className="overview">
                    <div className="edit-container">
                        <div className="thumbnail-product">
                            <div className="img-product">
                            <img src={`http://localhost:5000/uploads/${products.image}`} alt={products.nama_produk} />
                            </div>
                            <div className="stok-product">
                                <div className="stok">
                                    <button onClick={() => setStock(stock > 0 ? stock - 1 : 0)}>
                                        <i data-feather="minus"></i>
                                    </button>
                                    <input
                                        type="number"
                                        value={stock}
                                        onChange={(e) => setStock(e.target.value)}
                                    />
                                    <button onClick={() => setStock(stock + 1)}>
                                        <i data-feather="plus"></i>
                                    </button>
                                </div>
                                <span className="satuan">{unit}</span>
                            </div>
                        </div>
                        <div className="identity-product">
                            <div className="form-group">
                                <label className="label-identity">Nama Produk</label>
                                <div className='label-identity'>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="label-identity">Harga Produk</label>
                                <div>
                                    <span>Rp.</span>
                                    <div className='label-identity'>
                                        <input
                                            type="text"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                        <span>/</span>
                                        <select
                                            value={unit}
                                            onChange={(e) => setUnit(e.target.value)}
                                        >
                                            <option value="kg">kg</option>
                                            <option value="botol">botol</option>
                                            <option value="jar">jar</option>
                                            <option value="pack">pack</option>
                                            <option value="paket">paket</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="label-identity">Deskripsi Produk</label>
                                <div className='label-identity'>
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="action-button">
                        <button className="cancel" onClick={handleCancel}>Cancel</button>
                        <button onClick={handleSave}>Save</button>
                    </div>
                    <h4>Semua Ulasan</h4>
                    <hr className="line-ulasan" />
                    <div className="review-container"></div>
                </section>
            </main>
            <ConfirmationModal />
        </div>
    );
}

export default EditProduct;
