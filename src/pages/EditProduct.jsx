import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TitleHead from '../components/TitleHead';
import '../assets/edit_produk.css';
import useFetch from '../hooks/useFetch';
import { apiRequest } from '../helpers/apiHelper';

function EditProduct() {
    const { productIndex } = useParams(); // Get the product index from the URL
    const navigate = useNavigate();

    const { data: products, loading, error } = useFetch(`/products/${productIndex}`);  // Menggunakan useFetch untuk mengambil data produk
    const { data: reviews, loadingReview, errorReview } = useFetch(`/reviews`);  // Menggunakan useFetch untuk mengambil data produk

    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [isError, setIsError] = useState(null); // Error state

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

    if (loading || isLoading) return <div>Loading...</div>;  // Menampilkan loading state
    if (error || isError) return <div>Error: {isError}</div>;
    if (loadingReview) return <div>Loading...</div>;  // Menampilkan loading state
    if (errorReview) return <div>Error: {error}</div>;

    const handleSave = async (e) => {
        e.preventDefault();
    
        const updatedProduct = {
          nama_produk: name,
          harga: price,
          stok: stock,
          deskripsi: description,
          satuan: unit,
        };

        // console.log(updatedProduct);
    
        setIsLoading(true);
        try {
            const response = await apiRequest(`/products/${productIndex}`, "PUT", updatedProduct);
    
          if (!response) {
            throw new Error('Failed to update product');
          }
    
          alert('Product updated successfully!');
          navigate(-1); // Navigate back to the previous page
        } catch (error) {
          setIsError(error.message);
        } finally {
          setIsLoading(false);
        }
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
                    <div className="review-container">
                        {reviews && reviews.map((review) => {
                            return (  // Explicitly return the JSX inside the map
                                <div className="review-card" key={review.id}>
                                    <div className="review-image">
                                        <img src={`http://localhost:5000/images/${review.imgSrc}`} alt={review.nama} />
                                    </div>
                                    <div className="review-info">
                                        <h2>{review.nama}</h2>
                                        <div className="rating">
                                            {"★".repeat(review.rating)}
                                        </div>
                                        <p className="date-review">{review.tanggal}</p>
                                        <p className="description">{review.deskripsi}</p>
                                    </div>
                                    <div className="product-actions">
                                        <div className="action-buttons">
                                            <button className="reply-review">Balas komentar</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </section>
            </main>
        </div>
    );
}

export default EditProduct;
