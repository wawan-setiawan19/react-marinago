// src/components/ConfirmationModal.js
import React from 'react';

function ConfirmationModal() {
  return (
    <div className="confirmation-modal" id="modalConfirmation">
      <h3>Yakin ingin keluar?</h3>
      <div className="btn-confirmation">
        <button className="close-modal">Tidak</button>
        <button className="close-modal">Ya</button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
