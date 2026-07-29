import React, { useState } from 'react';
import { Grid, Unlock, RotateCcw } from 'lucide-react';
import { GIFTS, LOCATIONS, EXACT_SOLUTION } from '../data/gameData';

export default function DeductionGrid({ onVictory, onError }) {
  // Grid state: object mapping "giftId-locationId" -> "" | "X" | "CHECK"
  const [gridState, setGridState] = useState({});

  // Cycle cell state: Empty -> X -> CHECK -> Empty
  const handleCellClick = (giftId, locationId) => {
    const key = `${giftId}-${locationId}`;
    const currentState = gridState[key] || '';

    let nextState = '';
    if (currentState === '') {
      nextState = 'X';
    } else if (currentState === 'X') {
      nextState = 'CHECK';
    } else {
      nextState = '';
    }

    setGridState((prev) => ({
      ...prev,
      [key]: nextState
    }));
  };

  const handleReset = () => {
    setGridState({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check solution
    let isCorrect = true;

    for (const gift of GIFTS) {
      const correctLocId = EXACT_SOLUTION[gift.id];

      // Verify correct location is marked with CHECK
      const correctKey = `${gift.id}-${correctLocId}`;
      if (gridState[correctKey] !== 'CHECK') {
        isCorrect = false;
        break;
      }

      // Verify no other location for this gift is marked with CHECK
      for (const loc of LOCATIONS) {
        if (loc.id !== correctLocId) {
          const invalidKey = `${gift.id}-${loc.id}`;
          if (gridState[invalidKey] === 'CHECK') {
            isCorrect = false;
            break;
          }
        }
      }
    }

    if (isCorrect) {
      onVictory();
    } else {
      onError('Deducción incorrecta. Revisa las 5 pistas narrativas y ajusta las marcas de la rejilla antes de reintentar.');
    }
  };

  return (
    <div className="deduction-section">
      <div className="deduction-card">
        <h2 className="section-title">
          <Grid size={20} color="var(--accent-gold)" />
          REJILLA DE DEDUCCIÓN MURDOKU (3 REGALOS × 5 UBICACIONES)
        </h2>

        <div className="murdoku-instructions">
          <strong>Instrucciones del Rompecabezas:</strong>
          <ol>
            <li>Lee las 5 pistas narrativas superiores. Cada una descarta o confirma una ubicación.</li>
            <li>Haz clic en las celdas de la rejilla para alternar el estado: <strong>Un clic para descartar ❌</strong>, <strong>otro para confirmar ✔</strong>, <strong>otro para limpiar</strong>.</li>
            <li>Cuando tengas los 3 pares confirmados (✔), pulsa <strong>«Resolver el Caso 🔓»</strong>.</li>
          </ol>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="murdoku-table-container">
            <table className="murdoku-table">
              <thead>
                <tr>
                  <th className="gift-row-label">Regalos / Ubicaciones</th>
                  {LOCATIONS.map((loc) => (
                    <th key={loc.id}>
                      {loc.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {GIFTS.map((gift) => (
                  <tr key={gift.id}>
                    <td className="gift-row-label">{gift.name}</td>
                    {LOCATIONS.map((loc) => {
                      const key = `${gift.id}-${loc.id}`;
                      const cellVal = gridState[key] || '';

                      return (
                        <td
                          key={loc.id}
                          className={`murdoku-cell ${
                            cellVal === 'X' ? 'cell-discard' : cellVal === 'CHECK' ? 'cell-confirm' : ''
                          }`}
                          onClick={() => handleCellClick(gift.id, loc.id)}
                        >
                          {cellVal === 'X' ? '❌' : cellVal === 'CHECK' ? '✔' : ''}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="deduction-actions">
            <button type="button" className="btn-secondary" onClick={handleReset} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <RotateCcw size={16} />
              Limpiar Rejilla
            </button>

            <button type="submit" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <Unlock size={18} />
              Resolver el Caso 🔓
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
