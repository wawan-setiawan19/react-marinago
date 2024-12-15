// src/pages/acara.js
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import TitleHead from "../components/TitleHead";
import AcaraCard from "../components/AcaraCard";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { apiRequest } from "../helpers/apiHelper";
import ConfirmationDelete from "../components/ConfirmationDelete";

function Acara() {
  const { data: acaras, loading, error, refetch } = useFetch("/acaras"); // Menggunakan useFetch untuk mengambil data produk
  const [isDelete, setIsDelete] = useState(false);
  const [acaraDelete, setacaraDelete] = useState(null);

  if (loading) return <div>Loading...</div>; // Menampilkan loading state
  if (error) return <div>Error: {error}</div>;

  const handleDelete = async (acaraId) => {
    setIsDelete(true);
    setacaraDelete(acaraId);
  };

  const closeModal = () => {
    setIsDelete(false);
  };

  const onDelete = async () => {
    try {
      // Make the DELETE request to the backend
      await apiRequest(`/acaras/${acaraDelete}`, "DELETE");
      alert("acara deleted successfully!");
      setIsDelete(false)
      refetch();
      // You can also update the state to remove the acara from the UI here
    } catch (error) {
      alert(`Error deleting acara: ${error.message}`);
      setIsDelete(false)
    }
  };

  return (
    <div>
      <TitleHead title={"Acara"} />
      <main className="main-content">
        <Sidebar />
        <section className="overview">
          <Link to={`/create-acara/`} className="edit-btn">
            Tambah <i data-feather="plus"></i>
          </Link>
          <div id="acara-container">
            {acaras.length > 0 && acaras.map((acara, index) => (
              <AcaraCard
                key={index}
                acara={acara}
                acaraIndex={index}
                handleDelete={handleDelete}
              />
            ))}
            {acaras.length === 0 && <div>Data belum ada!</div>}
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

export default Acara;
