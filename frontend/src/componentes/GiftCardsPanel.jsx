import React from 'react';
import { GIFTS } from '../data/gameData';

export default function GiftCardsPanel({ selectedGiftId, onSelectGift }) {
  const giftsData = [
    {
      id: 'r1',
      name: 'Regalo 1',
      avatar: '🛁',
      bgClass: 'avatar-bg-1',
      clue: (
        <>
          <span className="clue-highlight">Pista:</span> Se encuentra en el baño.
        </>
      )
    },
    {
      id: 'r2',
      name: 'Regalo 2',
      avatar: '🧊',
      bgClass: 'avatar-bg-2',
      clue: (
        <>
          <span className="clue-highlight">Pista:</span> Se encuentra al lado de la nevera.
        </>
      )
    },
    {
      id: 'r3',
      name: 'Regalo 3',
      avatar: '🛋️',
      bgClass: 'avatar-bg-3',
      clue: (
        <>
          <span className="clue-highlight">Pista General:</span> Se encuentra al lado del sofá.
        </>
      )
    }
  ];

  return (
    <div className="murdoku-left-panel">
      <div className="suspects-header">
        <h3>Regalos</h3>
        <p>Haz clic para seleccionar y colocar en las celdas</p>
      </div>

      <div className="murdoku-cards-grid">
        {giftsData.map((gift) => {
          const isSelected = selectedGiftId === gift.id;

          return (
            <div
              key={gift.id}
              className={`murdoku-suspect-card ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelectGift(gift.id)}
            >
              <div className={`suspect-avatar-box ${gift.bgClass}`}>
                <span className="avatar-emoji">{gift.avatar}</span>
              </div>
              <div className="suspect-name-bar">{gift.name}</div>
              <div className="suspect-clue-box">{gift.clue}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
