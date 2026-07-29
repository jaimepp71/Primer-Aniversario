import React, { useState } from 'react';
import LoginScreen from './componentes/LoginScreen';
import InstructionsScreen from './componentes/InstructionsScreen';
import GiftCardsPanel from './componentes/GiftCardsPanel';
import MurdokuFloorplan from './componentes/MurdokuFloorplan';
import MurdokuTools from './componentes/MurdokuTools';
import VictoryModal from './componentes/VictoryModal';
import ErrorModal from './componentes/ErrorModal';

export default function App() {
  // Screen state: 'login' | 'instructions' | 'game'
  const [currentScreen, setCurrentScreen] = useState('login');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVictorious, setIsVictorious] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigateTo = (nextScreen) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentScreen(nextScreen);
      setIsTransitioning(false);
    }, 380);
  };

  // Cell Placements: { "row-col": { giftId, zone } }
  const [placements, setPlacements] = useState({});
  const [selectedGiftId, setSelectedGiftId] = useState('r1');
  const [activeTool, setActiveTool] = useState(null);

  // History stack for UNDO
  const [history, setHistory] = useState([]);

  const handlePlaceGift = (cellKey, giftId, zone) => {
    setHistory((prev) => [...prev, placements]);

    setPlacements((prev) => {
      const next = { ...prev };

      if (giftId) {
        // Remove if this gift was placed elsewhere on the map grid
        Object.keys(next).forEach((key) => {
          if (next[key]?.giftId === giftId) {
            delete next[key];
          }
        });
        next[cellKey] = { giftId, zone };
      } else {
        delete next[cellKey];
      }

      return next;
    });
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const previous = history[history.length - 1];
      setPlacements(previous);
      setHistory((prev) => prev.slice(0, prev.length - 1));
    }
  };

  const handleSubmit = () => {
    const placedKeys = Object.keys(placements);

    if (placedKeys.length < 3) {
      setErrorMessage('Debes colocar los 3 regalos en el tablero antes de pulsar SUBMIT.');
      return;
    }

    const r1CellKey = placedKeys.find((key) => placements[key].giftId === 'r1');
    const r2CellKey = placedKeys.find((key) => placements[key].giftId === 'r2');
    const r3CellKey = placedKeys.find((key) => placements[key].giftId === 'r3');

    const r1Placement = placements[r1CellKey];
    const r2Placement = placements[r2CellKey];
    const r3Placement = placements[r3CellKey];

    // Verification of exact solution:
    // Regalo 1 ➔ Fila 1, Columna 3 (Baño - 1-3)
    // Regalo 2 ➔ Fila 0, Columna 1 (Cocina junto a Nevera - 0-1)
    // Regalo 3 ➔ Fila 3, Columna 2 (Salón junto a Sofá - 3-2)
    const isCorrect =
      r1CellKey === '1-3' &&
      r2CellKey === '0-1' &&
      r3CellKey === '3-2';

    if (isCorrect) {
      setIsVictorious(true);
    } else {
      setErrorMessage(
        'Mira que lo he puesto sencillo... Inténtalo de nuevo anda 😡'
      );
    }
  };

  const handleResetGame = () => {
    setPlacements({});
    setHistory([]);
    setIsVictorious(false);
    setErrorMessage('');
    setSelectedGiftId('r1');
    setActiveTool(null);
    navigateTo('login');
  };

  const placedCount = Object.keys(placements).length;

  return (
    <div className={`screen-transition-wrapper ${isTransitioning ? 'screen-exiting' : 'screen-entering'}`}>
      {/* 1. Full-Page Login Screen */}
      {currentScreen === 'login' && (
        <LoginScreen onLoginSuccess={() => navigateTo('instructions')} />
      )}

      {/* 2. Full-Page Instructions Screen (Edge-to-Edge) */}
      {currentScreen === 'instructions' && (
        <InstructionsScreen onContinue={() => navigateTo('game')} />
      )}

      {/* 3. Main Murdoku Game Screen */}
      {currentScreen === 'game' && (
        <div className="app-container" style={{ paddingTop: '1rem' }}>
          <main className="murdoku-main-layout">
            <GiftCardsPanel
              selectedGiftId={selectedGiftId}
              onSelectGift={(id) => {
                setSelectedGiftId(id);
                setActiveTool(null);
              }}
            />

            <MurdokuFloorplan
              placements={placements}
              onPlaceGift={handlePlaceGift}
              activeTool={activeTool}
              selectedGiftId={selectedGiftId}
            />

            <MurdokuTools
              onUndo={handleUndo}
              onSubmit={handleSubmit}
              placedCount={placedCount}
            />
          </main>

          {/* Modals */}
          {isVictorious && (
            <VictoryModal
              onClose={() => setIsVictorious(false)}
              onResetGame={handleResetGame}
            />
          )}

          {errorMessage && (
            <ErrorModal
              message={errorMessage}
              onClose={() => setErrorMessage('')}
            />
          )}
        </div>
      )}
    </div>
  );
}

