import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TitleHead from '../components/TitleHead';
import '../assets/edit_produk.css';
import useFetch from '../hooks/useFetch';
import { apiRequest } from '../helpers/apiHelper';

function EditAcara() {
    const { productIndex } = useParams(); // Get the product index from the URL
    const navigate = useNavigate();

    const { data: products, loading, error } = useFetch(`/acaras/${productIndex}`);  // Menggunakan useFetch untuk mengambil data produk
    // const { data: reviews, loadingReview, errorReview } = useFetch(`/reviews`);  // Menggunakan useFetch untuk mengambil data produk

    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [isError, setIsError] = useState(null); // Error state

    // State for each field
    const [name, setName] = useState('');
    const [date, setDate] = useState(null);
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (products) {
            const product = products; // Assuming the product is the first one in the array
            // console.log(product)
            setName(product.nama_acara);
            setDate(product.tanggal ? new Date(product.tanggal).toISOString().split('T')[0] : ''); // Format to YYYY-MM-DD
            setDescription(product.deskripsi);
        }
    }, [products]); // Update state when products data changes

    if (loading || isLoading) return <div>Loading...</div>;  // Menampilkan loading state
    if (error || isError) return <div>Error: {isError}</div>;

    const handleSave = async (e) => {
        e.preventDefault();
    
        const updatedProduct = {
          nama_produk: name,
          tanggal: date,
          deskripsi: description,
        };

        // console.log(updatedProduct);
    
        setIsLoading(true);
        try {
            const response = await apiRequest(`/acaras/${productIndex}`, "PUT", updatedProduct);
    
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
                        </div>
                        <div className="identity-product">
                            <div className="form-group">
                                <label className="label-identity">Nama Acara</label>
                                <div className='label-identity'>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="label-identity">Tanggal</label>
                                <div className='label-identity'>
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={(e) => setName(e.target.value)}
                                    />
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
                </section>
            </main>
        </div>
    );
}

export default EditAcara;
