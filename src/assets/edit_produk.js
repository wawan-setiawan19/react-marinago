const btnMinus = document.querySelector("#btnMinus")
const btnPlus = document.querySelector("#btnPlus")
const stokValue = document.querySelector("#stokValue")
const btnSave = document.querySelector("#btnSave")

if(btnMinus){
  btnMinus.addEventListener("click", () => {
      let stok = parseInt(stokValue.value);
      if (stok > 0) { // Pastikan stok tidak negatif
          stok--;
          stokValue.value = stok;
      }
  });
}

if(btnPlus){
  btnPlus.addEventListener("click", () => {
      let stok = parseInt(stokValue.value);
      stok++;
      stokValue.value = stok;
  });
}


const modalUpdate = document.getElementById('modalUpdate');
if(btnSave){
  btnSave.addEventListener('click', () => {
    modalUpdate.classList.add('show'); // Tampilkan modal dengan animasi
  });
}

// const closeModalButtons = document.querySelectorAll('.close-modal');

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    modalUpdate.classList.remove('show'); // Menghapus kelas 'show' untuk menutup modal
  });
});

