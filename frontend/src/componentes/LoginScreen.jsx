import React, { useState } from 'react';
import { Calendar, ShieldAlert, Lock } from 'lucide-react';
import { VALID_LOGIN_DATES } from '../data/gameData';

export default function LoginScreen({ onLoginSuccess }) {
  const [dateInput, setDateInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!dateInput) {
      setErrorMessage('Hola mi vidaa! Selecciona o escribe la fecha de cuando empezó todo para poder iniciar...');
      return;
    }

    // Input type="date" yields YYYY-MM-DD
    let formattedDate = dateInput;
    if (dateInput.includes('-')) {
      const [year, month, day] = dateInput.split('-');
      formattedDate = `${day}/${month}/${year}`;
    }

    if (VALID_LOGIN_DATES.includes(formattedDate) || VALID_LOGIN_DATES.includes(dateInput)) {
      onLoginSuccess();
    } else {
      setErrorMessage('Fecha incorrecta 😡');
    }
  };

  return (
    <div className="login-full-wrapper">
      <div className="login-sales-container">
        {/* Left Side: Modern SaaS Style Form Panel */}
        <div className="login-sales-left">
          <div className="sales-brand-header">
            <h2 className="sales-brand-logo">1 de agosto de 2025...</h2>
          </div>

          <div className="sales-form-content">
            <h1 className="sales-welcome-title">
              Feliz aniversario! ❤️
            </h1>

            <p className="sales-welcome-subtitle">
              Hola mi vidaa! Selecciona o escribe la fecha de cuando empezó todo para poder iniciar...
            </p>

            {errorMessage && (
              <div className="error-alert-banner sales-error-banner">
                <ShieldAlert size={18} />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="sales-login-form">
              <div className="sales-field-group">
                <label className="sales-input-label">
                  <Calendar size={15} color="var(--accent-burgundy)" />
                  FECHA DE INICIO
                </label>
                <input
                  type="date"
                  className="sales-date-input"
                  value={dateInput}
                  onChange={(e) => {
                    setDateInput(e.target.value);
                    setErrorMessage('');
                  }}
                  required
                />
              </div>

              <button type="submit" className="sales-submit-btn">
                <Lock size={18} />
                <span>Comenzar</span>
              </button>
            </form>
          </div>

          <div className="sales-left-footer">
            <span>Espero que te gusten tus regalos, y que podamos seguir sumando muchos años más juntos... ❤️</span>
          </div>
        </div>

        {/* Right Side: Couple Photo Hero */}
        <div className="login-sales-right">
          <img
            src="./couple-photo.jpg"
            alt="Foto de Pareja"
            className="sales-couple-photo"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
    </div>
  );
}
