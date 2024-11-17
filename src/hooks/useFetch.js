// src/hooks/useFetch.js
import { useState, useEffect, useCallback } from 'react';
import { apiRequest } from '../helpers/apiHelper'; // Import apiRequest

const useFetch = (endpoint, method = 'GET', body = null) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Define the fetchData function using useCallback to keep it stable
    const fetchData = useCallback(async () => {
        setLoading(true);  // Start loading
        try {
            const result = await apiRequest(endpoint, method, body); // Menggunakan apiRequest helper function
            setData(result); // Menyimpan data yang diterima
        } catch (err) {
            setError(err.message); // Menyimpan pesan error jika terjadi kesalahan
        } finally {
            setLoading(false); // Menandakan bahwa loading selesai
        }
    }, [endpoint, method, body]);

    // Run the fetchData when the component mounts or dependencies change
    useEffect(() => {
        fetchData();
    }, [fetchData]); // Use fetchData as dependency

    return { data, loading, error, refetch: fetchData };  // Return refetch so it can be used in other components
};

export default useFetch;
