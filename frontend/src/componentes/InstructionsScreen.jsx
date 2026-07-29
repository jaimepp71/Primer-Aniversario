import React from 'react';
import { Sparkles, MapPin, AlertCircle, Grid, ArrowRight } from 'lucide-react';

export default function InstructionsScreen({ onContinue }) {
  return (
    <div className="full-screen-login-wrapper instructions-full-wrapper">
      <div className="instructions-standalone-card">

        <h1 className="sales-welcome-title" style={{ fontSize: '2.1rem', marginBottom: '0.8rem', textAlign: 'center' }}>
          ¿Cómo jugar?
        </h1>

        <p className="sales-welcome-subtitle" style={{ fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1.8rem', textAlign: 'center', maxWidth: '640px' }}>
          Hay tres pequeños regalos escondidos por el apartamento... Para averiguar sus ubicaciones, tendrás que resolver un Murdoku!! Aunque sé que te sabes las reglas, te las resumo:
        </p>

        {/* 4 Instruction Step Cards in 2x2 Grid (Balanced spacing) */}
        <div className="sales-instructions-grid-2x2" style={{ width: '100%', marginBottom: '1.8rem' }}>
          <div className="sales-step-card centered-step-card">
            <div className="sales-step-num" style={{ marginBottom: '0.3rem' }}>1</div>
            <div className="sales-step-text centered-step-text">
              <h3 style={{ marginBottom: '0.5rem' }}><Sparkles size={17} color="var(--accent-burgundy)" /> Objetivo</h3>
              <p style={{ lineHeight: '1.55' }}>Deberás colocar los tres regalos en sus celdas correspondientes. Cuando los hayas colocado, podrás resolver.</p>
            </div>
          </div>

          <div className="sales-step-card centered-step-card">
            <div className="sales-step-num" style={{ marginBottom: '0.3rem' }}>2</div>
            <div className="sales-step-text centered-step-text">
              <h3 style={{ marginBottom: '0.5rem' }}><MapPin size={17} color="var(--accent-burgundy)" /> Pistas</h3>
              <p style={{ lineHeight: '1.55' }}>En el panel izquierdo encontrarás las tarjetas de los regalos con sus pistas (son muy fáciles...).</p>
            </div>
          </div>

          <div className="sales-step-card centered-step-card">
            <div className="sales-step-num" style={{ marginBottom: '0.3rem' }}>3</div>
            <div className="sales-step-text centered-step-text">
              <h3 style={{ marginBottom: '0.5rem' }}><AlertCircle size={17} color="var(--accent-burgundy)" /> Celdas Bloqueadas</h3>
              <p style={{ lineHeight: '1.55' }}>Hay celdas ocupadas por objetos. En ellas no podrás colocar los regalos.</p>
            </div>
          </div>

          <div className="sales-step-card centered-step-card">
            <div className="sales-step-num" style={{ marginBottom: '0.3rem' }}>4</div>
            <div className="sales-step-text centered-step-text">
              <h3 style={{ marginBottom: '0.5rem' }}><Grid size={17} color="var(--accent-burgundy)" /> Eliminación Murdoku</h3>
              <p style={{ lineHeight: '1.55' }}>Al colocar un regalo en una posición, su fila y columna quedan eliminadas con una ✖.</p>
            </div>
          </div>
        </div>

        <button onClick={onContinue} className="sales-submit-btn" style={{ width: '100%', maxWidth: '420px', margin: '0 auto' }}>
          <span>Empezar Murdoku!</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}