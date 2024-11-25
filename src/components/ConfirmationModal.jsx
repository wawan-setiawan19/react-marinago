// src/components/ConfirmationModal.js
import React from 'react';

function ConfirmationModal({onClose, classOpt, onLogout}) {   
  return (
    <div className={classOpt} id="modalConfirmation">
      <h3>Yakin ingin keluar?</h3>
      <div className="btn-confirmation">
        <button className="close-modal" onClick={onClose}>Tidak</button>
        <button className="close-modal" onClick={onLogout}>Ya</button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
