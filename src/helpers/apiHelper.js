const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

/**
 * Helper function untuk membuat request ke API.
 *
 * @param {string} endpoint - Endpoint API (tanpa prefix /api jika proxy digunakan).
 * @param {string} method - HTTP Method (GET, POST, PUT, DELETE).
 * @param {Object} body - Data yang akan dikirim (opsional).
 * @returns {Promise} - Hasil response dari API.
 */
export const apiRequest = async (endpoint, method = "GET", body = null) => {
    try {
      const headers = {};
  
      // Jika body adalah FormData, jangan set Content-Type secara manual
      if (!(body instanceof FormData)) {
        headers["Content-Type"] = "application/json"; // Default untuk JSON
      }
  
      const options = {
        method,
        headers,
      };
  
      if (body) {
        // Jika body adalah FormData, jangan stringifikasi
        if (body instanceof FormData) {
          options.body = body; // FormData tidak perlu diubah menjadi JSON
        } else {
          options.body = JSON.stringify(body); // Stringify jika body bukan FormData
        }
      }
  
      const response = await fetch(`${API_BASE_URL}/api${endpoint}`, options);
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Terjadi kesalahan pada server");
      }
  
      return await response.json();
    } catch (err) {
      console.error("API Request Error:", err.message);
      throw err;
    }
  };
  
