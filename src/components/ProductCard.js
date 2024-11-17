import { Link } from "react-router-dom";

function ProductCard({ product, productIndex }) {
    return (
        <div className="product-card">
            <div className="product-image">
            <img src={`http://localhost:5000/uploads/${product.image}`} alt={product.nama_produk} />
                <button className="stock-btn">Stok: {product.stok} {product.satuan}</button>
            </div>
            <div className="product-info">
                <h2>{product.nama_produk}</h2>
                <p className="price">{product.harga} / {product.satuan}</p>
                <p className="description">{product.deskripsi}</p>
                <div className="product-details">
                    <Link to="#" className="review-link">
                        Lihat ulasan
                    </Link>
                </div>
            </div>
            <div className="product-actions">
                <div className="rating">
                    {"★".repeat(product.rating)}
                </div>
                <div className="action-buttons">
                    <Link to={`/edit-produk/${product.id}`} className="edit-btn">
                        <i data-feather="edit-2"></i>
                    </Link>
                    <button className="delete-btn">
                        <i data-feather="trash"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
