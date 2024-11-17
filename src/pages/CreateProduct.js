// src/pages/Product.js
import React, { useState } from 'react';
import { apiRequest } from '../helpers/apiHelper';
import TitleHead from '../components/TitleHead';
import Sidebar from '../components/Sidebar';
import ConfirmationModal from '../components/ConfirmationModal';
import { useNavigate } from 'react-router-dom';

function Product() {
    const [formData, setFormData] = useState({ nama_produk: '', harga: '', stok: '', deskripsi: '', satuan: 'kg' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);  // Untuk melakukan redirect setelah form disubmit
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formDataWithImage = new FormData(); // Menggunakan FormData untuk menangani file upload

        // // Menambahkan data form lainnya ke FormData
        formDataWithImage.append('nama_produk', formData.nama_produk);
        formDataWithImage.append('harga', formData.harga);
        formDataWithImage.append('stok', formData.stok);
        formDataWithImage.append('deskripsi', formData.deskripsi);
        formDataWithImage.append('satuan', formData.satuan);

        // Jika ada gambar, tambahkan ke FormData
        if (image) {
            formDataWithImage.append('image', image);
        }

        try {
            const result = await apiRequest("/products", "POST", formDataWithImage);
            alert(`Produk berhasil ditambahkan dengan ID: ${result.id}`);
            setFormData({ nama_produk: '', harga: '', stok: '', deskripsi: '' }); // Reset form
            navigate('/product');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    return (
        <div>
            <TitleHead title={"Produk"} />
            <main className="main-content">
                <Sidebar />
                <section className="overview">
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label className='label-identity'>Nama Produk:</label>
                            <div className='label-identity'>
                                <input
                                    type="text"
                                    className='label-identity'
                                    value={formData.nama_produk}
                                    onChange={(e) => setFormData({ ...formData, nama_produk: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className='form-group'>
                            <label className='label-identity'>Harga:</label>
                            <div className='label-identity'>
                                <input
                                    type="number"
                                    value={formData.harga}
                                    onChange={(e) => setFormData({ ...formData, harga: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="label-identity">Harga Produk</label>
                            <div>
                                <div className='label-identity'>
                                    <select
                                        value={formData.satuan}
                                        onChange={(e) => setFormData({ ...formData, satuan: e.target.value })}
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
                        <div className='form-group'>
                            <label className='label-identity'>Stok:</label>
                            <div className='label-identity'>
                                <input
                                    type="number"
                                    value={formData.stok}
                                    onChange={(e) => setFormData({ ...formData, stok: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="label-identity">Deskripsi Produk</label>
                            <div className='label-identity'>
                                <textarea
                                    value={formData.deskripsi}
                                    onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className='form-group'>
                            <label>thumbnail:</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange} // Menangani perubahan input gambar
                            />
                            {image && <p>Selected image: {image.name}</p>} {/* Menampilkan nama gambar yang dipilih */}
                        </div>
                        <button type="submit" disabled={loading} className='view-btn'>
                            {loading ? 'Saving...' : 'Add Product'}
                        </button>
                    </form>
                    {error && <div>Error: {error}</div>}
                </section>
            </main>
            <ConfirmationModal />
        </div>
    );
}

export default Product;
