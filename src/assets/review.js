const products = [
  {
    nama: "Krisna",
    tanggal: "15/10/2024",
    deskripsi: "Agrowisata TOPPP, buah jambunya juga TOPP",
    rating: 5,
    imgSrc: "./images/avatar.png"
  },
  {
    nama: "Krisna",
    tanggal: "15/10/2024",
    deskripsi: "Agrowisata TOPPP, buah jambunya juga TOPP",
    rating: 5,
    imgSrc: "./images/avatar.png"
  },
  {
    nama: "Krisna",
    tanggal: "15/10/2024",
    deskripsi: "Agrowisata TOPPP, buah jambunya juga TOPP",
    rating: 5,
    imgSrc: "./images/avatar.png"
  },
  {
    nama: "Krisna",
    tanggal: "15/10/2024",
    deskripsi: "Agrowisata TOPPP, buah jambunya juga TOPP",
    rating: 5,
    imgSrc: "./images/avatar.png"
  },
  {
    nama: "Krisna",
    tanggal: "15/10/2024",
    deskripsi: "Agrowisata TOPPP, buah jambunya juga TOPP",
    rating: 5,
    imgSrc: "./images/avatar.png"
  },
  {
    nama: "Krisna",
    tanggal: "15/10/2024",
    deskripsi: "Agrowisata TOPPP, buah jambunya juga TOPP",
    rating: 5,
    imgSrc: "./images/avatar.png"
  },
  {
    nama: "Krisna",
    tanggal: "15/10/2024",
    deskripsi: "Agrowisata TOPPP, buah jambunya juga TOPP",
    rating: 5,
    imgSrc: "./images/avatar.png"
  },
  {
    nama: "Krisna",
    tanggal: "15/10/2024",
    deskripsi: "Agrowisata TOPPP, buah jambunya juga TOPP",
    rating: 5,
    imgSrc: "./images/avatar.png"
  },
];

// Function to render product cards
function renderProducts(products) {
  const productContainer = document.querySelector('.review-container');
  productContainer.innerHTML = products.map(product => `
    <div className="review-card">
      <div className="review-image">
        <img src="${product.imgSrc}" alt="${product.nama}">
      </div>
      <div className="review-info">
        <h2>${product.nama}</h2>
        <div className="rating">
          ${"★".repeat(product.rating)}
        </div>
        <p className="date-review">${product.tanggal}</p>
        <p className="description">${product.deskripsi}</p>
      </div>
      <div className="product-actions">
        <div className="action-buttons">
          <button className="reply-review">Balas komentar</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Render the products on load
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
  feather.replace();
});