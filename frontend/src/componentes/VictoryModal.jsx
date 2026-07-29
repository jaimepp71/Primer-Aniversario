import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { RotateCcw } from 'lucide-react';
import { VICTORY_DATA } from '../data/gameData';

export default function VictoryModal({ onResetGame }) {
  useEffect(() => {
    try {
      confetti({
        particleCount: 130,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log('Confetti triggered');
    }
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ maxWidth: '580px', borderColor: 'var(--accent-gold)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.8rem' }}>
          <div
            className="custom-leaflet-marker"
            style={{ width: '72px', height: '72px', fontSize: '2.6rem', background: 'rgba(229, 193, 88, 0.2)' }}
          >
            🏆
          </div>
        </div>

        <h2 className="modal-title">{VICTORY_DATA.title}</h2>

        <p className="modal-text" style={{ fontSize: '0.95rem', marginBottom: '1.25rem', marginTop: '0.5rem' }}>
          {VICTORY_DATA.message}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem', textAlign: 'left' }}>
          {VICTORY_DATA.revelations.map((rev, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-surface)',
                border: '1.5px solid var(--border-gold)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.9rem 1.1rem'
              }}
            >
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: '700', color: 'var(--accent-burgundy)', fontSize: '1.2rem', marginBottom: '0.2rem' }}>
                {rev.gift}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-dark)', lineHeight: '1.5' }}>{rev.detail}</div>
            </div>
          ))}
        </div>

        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--accent-gold-dark)', marginBottom: '1.5rem', fontSize: '1rem', textAlign: 'center' }}>
          {VICTORY_DATA.closingText}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className="sales-submit-btn"
            onClick={onResetGame}
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', width: '100%', maxWidth: '280px', padding: '0.85rem 1.5rem' }}
          >
            <RotateCcw size={18} />
            <span>Reiniciar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
