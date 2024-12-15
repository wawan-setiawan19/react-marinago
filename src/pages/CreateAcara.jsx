// src/pages/acara.js
import React, { useState } from "react";
import { apiRequest } from "../helpers/apiHelper";
import TitleHead from "../components/TitleHead";
import Sidebar from "../components/Sidebar";
// import ConfirmationModal from '../components/ConfirmationModal';
import { useNavigate } from "react-router-dom";

function CreateAcara() {
  const [formData, setFormData] = useState({
    nama_acara: "",
    tanggal : Date.now(),
    deskripsi: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Untuk melakukan redirect setelah form disubmit
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formDataWithImage = new FormData(); // Menggunakan FormData untuk menangani file upload

    // // Menambahkan data form lainnya ke FormData
    formDataWithImage.append("nama_acara", formData.nama_acara);
    formDataWithImage.append("deskripsi", formData.deskripsi);
    formDataWithImage.append("tanggal", formData.tanggal);

    // Jika ada gambar, tambahkan ke FormData
    if (image) {
      formDataWithImage.append("image", image);
    }

    try {
      const result = await apiRequest("/acaras", "POST", formDataWithImage);
      alert(`Acara berhasil ditambahkan dengan ID: ${result.id}`);
      setFormData({ nama_acara: "", harga: "", stok: "", deskripsi: "" }); // Reset form
      navigate("/acara");
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
      <TitleHead title={"Acara"} />
      <main className="main-content">
        <Sidebar />
        <section className="overview">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="label-identity">Nama Acara:</label>
              <div className="label-identity">
                <input
                  type="text"
                  className="label-identity"
                  value={formData.nama_acara}
                  onChange={(e) =>
                    setFormData({ ...formData, nama_acara: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="form-group">
              <label className="label-identity">Tanggal Acara:</label>
              <div className="label-identity">
                <input
                  type="date"
                  className="label-identity"
                  value={formData.tanggal}
                  onChange={(e) =>
                    setFormData({ ...formData, tanggal: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="form-group">
              <label className="label-identity">Deskripsi Acara</label>
              <div className="label-identity">
                <textarea
                  value={formData.deskripsi}
                  onChange={(e) =>
                    setFormData({ ...formData, deskripsi: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="form-group">
              <label>thumbnail:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange} // Menangani perubahan input gambar
              />
              {image && <p>Selected image: {image.name}</p>}{" "}
              {/* Menampilkan nama gambar yang dipilih */}
            </div>
            <button type="submit" disabled={loading} className="view-btn">
              {loading ? "Saving..." : "Add acara"}
            </button>
          </form>
          {error && <div>Error: {error}</div>}
        </section>
      </main>
      {/* <ConfirmationModal /> */}
    </div>
  );
}

export default CreateAcara;
