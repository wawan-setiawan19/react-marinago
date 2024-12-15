import { Link } from "react-router-dom";

function AcaraCard({ acara, handleDelete }) {
    const handleDeleteClick = () => {
        handleDelete(acara.id);  // Pass product id to handleDelete
    };
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={`http://localhost:5000/uploads/${acara.image}`} alt={acara.nama_produk} />
                <button className="stock-btn">{acara.tanggal}</button>
            </div>
            <div className="product-info">
                <h2>{acara.nama_acara}</h2>
                <p className="description">{acara.deskripsi}</p>
                <div className="product-details">
                    <Link to="#" className="review-link">
                        Lihat ulasan
                    </Link>
                </div>
            </div>
            <div className="product-actions">
                <div className="rating">
                    {"★".repeat(acara.rating)}
                </div>
                <div className="action-buttons">
                    <Link to={`/edit-acara/${acara.id}`} className="edit-btn">
                        <i data-feather="edit-2"></i>
                    </Link>
                    <button className="delete-btn" onClick={handleDeleteClick}>
                        <i data-feather="trash"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AcaraCard;
