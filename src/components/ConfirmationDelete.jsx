// src/components/ConfirmationModal.js
import React from 'react';

function ConfirmationDelete({onClose, classOpt, onDelete}) {   
  return (
    <div className={classOpt} id="modalConfirmation">
      <h3>Yakin ingin hapus data?</h3>
      <div className="btn-confirmation">
        <button className="close-modal" onClick={onClose}>Tidak</button>
        <button className="close-modal" onClick={onDelete}>Ya</button>
      </div>
    </div>
  );
}

export default ConfirmationDelete;
