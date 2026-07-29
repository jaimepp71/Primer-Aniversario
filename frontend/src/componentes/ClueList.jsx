import React from 'react';

export default function ClueList() {
  const cluesData = [
    {
      id: 1,
      text: (
        <>
          <span className="clue-highlight">Regalo 1:</span> Se encuentra en el baño.
        </>
      )
    },
    {
      id: 2,
      text: (
        <>
          <span className="clue-highlight">Regalo 2:</span> Se encuentra al lado de la nevera.
        </>
      )
    },
    {
      id: 3,
      text: (
        <>
          <span className="clue-highlight">Pista General:</span> Se encuentra al lado del sofá.
        </>
      )
    }
  ];

  return (
    <div style={{ marginBottom: '2.5rem' }}>
      {/* Section Title matching Image */}
      <div className="section-header-row">
        <div className="section-num-circle">1</div>
        <h2 className="section-title-italic">Las pistas</h2>
      </div>

      {/* Clues Cards Container */}
      <div className="clues-container">
        {cluesData.map((clue) => (
          <div key={clue.id} className="clue-card-light">
            <div className="clue-badge-green">{clue.id}</div>
            <div className="clue-card-text">{clue.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
