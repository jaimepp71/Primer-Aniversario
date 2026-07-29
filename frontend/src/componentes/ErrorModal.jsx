import React from 'react';
import { RefreshCw } from 'lucide-react';

export default function ErrorModal({ message, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content error-modal" style={{ maxWidth: '520px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.8rem' }}>
          <div
            className="custom-leaflet-marker"
            style={{ width: '72px', height: '72px', fontSize: '2.6rem', background: 'rgba(230, 57, 70, 0.15)', borderColor: '#e63946' }}
          >
            ⚠️
          </div>
        </div>

        <h2 className="modal-title error">INCORRECTO</h2>

        <p className="modal-text" style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.8rem', color: 'var(--text-dark)' }}>
          {message || 'Mira que lo he puesto sencillo... Inténtalo de nuevo anda 😡'}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className="sales-submit-btn"
            onClick={onClose}
            style={{
              width: '100%',
              maxWidth: '300px',
              padding: '0.85rem 1.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem'
            }}
          >
            <RefreshCw size={18} />
            <span>Reintentar</span>
          </button>
        </div>
      </div>
    </div>
  );
}