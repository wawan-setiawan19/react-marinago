// src/hooks/useFetch.js
import { useState, useEffect } from 'react';
import { apiRequest } from '../helpers/apiHelper'; // Import apiRequest

const useFetch = (endpoint, method = 'GET', body = null) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await apiRequest(endpoint, method, body); // Menggunakan apiRequest helper function
                setData(result); // Menyimpan data yang diterima
            } catch (err) {
                setError(err.message); // Menyimpan pesan error jika terjadi kesalahan
            } finally {
                setLoading(false); // Menandakan bahwa loading selesai
            }
        };

        fetchData();
    }, [endpoint, method, body]); // Menambahkan dependencies untuk re-fetching jika ada perubahan

    return { data, loading, error };
};

export default useFetch;
