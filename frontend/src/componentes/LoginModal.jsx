import React, { useState } from 'react';
import { Lock, Calendar, ShieldAlert } from 'lucide-react';
import { VALID_LOGIN_DATES } from '../data/gameData';

export default function LoginModal({ onLoginSuccess }) {
  const [dateInput, setDateInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanDate = dateInput.trim();

    if (!cleanDate) {
      setErrorMessage('Por favor introduce la fecha en formato DD/MM/AAAA.');
      return;
    }

    if (VALID_LOGIN_DATES.includes(cleanDate)) {
      onLoginSuccess();
    } else {
      setErrorMessage('Fecha incorrecta. Introduce una de las fechas autorizadas del expediente (DD/MM/AAAA).');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <div className="custom-leaflet-marker" style={{ width: '64px', height: '64px', fontSize: '2rem' }}>
            🕵️‍♂️
          </div>
        </div>

        <h2 className="modal-title">TARJETA DE ACCESO</h2>
        <p className="brand-subtitle" style={{ marginBottom: '1.5rem', color: 'var(--accent-gold)' }}>
          SUITE DEL ANIVERSARIO · ACCESO AL EXPEDIENTE
        </p>

        <p className="modal-text">
          Un año juntos y, en algún rincón de este apartamento, se esconden tres regalos. Introduce la fecha clave para desbloquear el caso.
        </p>

        {errorMessage && (
          <div
            style={{
              background: 'rgba(230, 57, 70, 0.15)',
              border: '1px solid var(--accent-red)',
              color: 'var(--accent-red)',
              padding: '0.7rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.85rem',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              gap: '0.5rem'
            }}
          >
            <ShieldAlert size={16} />
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="input-group">
            <label className="input-label" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
              <Calendar size={16} color="var(--accent-gold)" />
              Introduce la Fecha (DD/MM/AAAA):
            </label>
            <input
              type="text"
              className="deduction-input"
              placeholder="Ej: 22/05/2025 o 01/08/2025"
              value={dateInput}
              onChange={(e) => {
                setDateInput(e.target.value);
                setErrorMessage('');
              }}
              autoFocus
            />
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <Lock size={18} />
            Ingresar al Expediente
          </button>
        </form>
      </div>
    </div>
  );
}
