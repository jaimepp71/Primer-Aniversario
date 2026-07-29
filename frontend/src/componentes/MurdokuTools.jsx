import React from 'react';
import { RotateCcw, Unlock } from 'lucide-react';

export default function MurdokuTools({ onUndo, onSubmit, placedCount }) {
  return (
    <div className="murdoku-right-panel">
      <div className="tools-title">Herramientas</div>

      <div className="tools-buttons-group">
        <button className="tool-btn" onClick={onUndo} title="Deshacer último movimiento">
          <RotateCcw size={22} />
          <span className="tool-label">DESHACER</span>
        </button>
      </div>

      <div className="submit-section">
        <button className="submit-case-btn" onClick={onSubmit}>
          <Unlock size={22} />
          <span>RESOLVER</span>
        </button>
        <div className="submit-counter">
          Regalos colocados: <strong>{placedCount}/3</strong>
        </div>
      </div>
    </div>
  );
}
