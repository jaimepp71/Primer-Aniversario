import React from 'react';
import { Sparkles, MapPin, AlertCircle, Grid, ArrowRight } from 'lucide-react';

export default function InstructionsScreen({ onContinue }) {
  return (
    <div className="full-screen-login-wrapper instructions-full-wrapper">
      <div className="instructions-standalone-card">

        <h1 className="instructions-title">
          ¿Cómo jugar?
        </h1>

        <p className="instructions-subtitle">
          Hay tres pequeños regalos escondidos por el apartamento... Para averiguar sus ubicaciones, tendrás que resolver un Murdoku!! Aunque sé que te sabes las reglas, te las resumo:
        </p>

        {/* 4 Instruction Step Cards in 2x2 Grid on Desktop, 1 Column on Mobile */}
        <div className="sales-instructions-grid-2x2">
          <div className="sales-step-card">
            <div className="sales-step-num">1</div>
            <div className="sales-step-text">
              <h3><Sparkles size={17} color="var(--accent-burgundy)" /> Objetivo</h3>
              <p>Deberás colocar los tres regalos en sus celdas correspondientes. Cuando los hayas colocado, podrás resolver.</p>
            </div>
          </div>

          <div className="sales-step-card">
            <div className="sales-step-num">2</div>
            <div className="sales-step-text">
              <h3><MapPin size={17} color="var(--accent-burgundy)" /> Pistas</h3>
              <p>En el panel izquierdo encontrarás las tarjetas de los regalos con sus pistas (son muy fáciles...).</p>
            </div>
          </div>

          <div className="sales-step-card">
            <div className="sales-step-num">3</div>
            <div className="sales-step-text">
              <h3><AlertCircle size={17} color="var(--accent-burgundy)" /> Celdas Bloqueadas</h3>
              <p>Hay celdas ocupadas por objetos. En ellas no podrás colocar los regalos.</p>
            </div>
          </div>

          <div className="sales-step-card">
            <div className="sales-step-num">4</div>
            <div className="sales-step-text">
              <h3><Grid size={17} color="var(--accent-burgundy)" /> Eliminación Murdoku</h3>
              <p>Al colocar un regalo en una posición, su fila y columna quedan eliminadas con una ✖.</p>
            </div>
          </div>
        </div>

        <button onClick={onContinue} className="sales-submit-btn instructions-continue-btn">
          <span>Empezar Murdoku!</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}