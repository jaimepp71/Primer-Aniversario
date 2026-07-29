import React, { useState } from 'react';
import { RenderObstacleImage } from './ObjectIcons';
import { MULTI_BLOCK_GRID } from './MurdokuFloorplanData';

// Dynamic cell borders: 4px solid black for room walls/edges, 1px solid black for internal grid cells
function getCellWallBorders(row, col) {
  const findCell = (r, c) => MULTI_BLOCK_GRID.find((cell) => cell.row === r && cell.col === c);
  const currentCell = findCell(row, col);
  if (!currentCell) return {};

  const currentZone = currentCell.zone;

  const topCell = findCell(row - 1, col);
  const bottomCell = findCell(row + 1, col);
  const leftCell = findCell(row, col - 1);
  const rightCell = findCell(row, col + 1);

  return {
    borderTop: !topCell || topCell.zone !== currentZone ? '4px solid #000000' : '1px solid rgba(0, 0, 0, 0.35)',
    borderBottom: !bottomCell || bottomCell.zone !== currentZone ? '4px solid #000000' : '1px solid rgba(0, 0, 0, 0.35)',
    borderLeft: !leftCell || leftCell.zone !== currentZone ? '4px solid #000000' : '1px solid rgba(0, 0, 0, 0.35)',
    borderRight: !rightCell || rightCell.zone !== currentZone ? '4px solid #000000' : '1px solid rgba(0, 0, 0, 0.35)'
  };
}

export default function MurdokuFloorplan({ placements, onPlaceGift, activeTool, selectedGiftId }) {
  const [warningMsg, setWarningMsg] = useState('');
  const [hoveredCellKey, setHoveredCellKey] = useState(null);

  const giftMap = {
    r1: { name: 'Regalo 1', emoji: '🎁' },
    r2: { name: 'Regalo 2', emoji: '🧊' },
    r3: { name: 'Regalo 3', emoji: '🛋️' }
  };

  // Calculate sets of eliminated rows & columns from placed gifts
  const placedRowCols = Object.keys(placements).map((key) => {
    const [r, c] = key.split('-').map(Number);
    return { row: r, col: c, giftId: placements[key].giftId };
  });

  const eliminatedRows = new Set(placedRowCols.map((p) => p.row));
  const eliminatedCols = new Set(placedRowCols.map((p) => p.col));

  const isCellEliminated = (row, col) => {
    const cellKey = `${row}-${col}`;
    if (placements[cellKey]) return false; // Cell with placed gift is not eliminated
    return eliminatedRows.has(row) || eliminatedCols.has(col);
  };

  const handleCellClick = (cell) => {
    setWarningMsg('');

    const cellKey = `${cell.row}-${cell.col}`;

    if (cell.isBlocked) {
      setWarningMsg(`Ahí hay un objeto! No te has leído las instrucciones 😡.`);
      return;
    }

    if (isCellEliminated(cell.row, cell.col)) {
      setWarningMsg(`❌ Fila o columna eliminada por otro regalo. No se pueden colocar regalos en la misma fila ni columna.`);
      return;
    }

    if (selectedGiftId) {
      if (placements[cellKey]?.giftId === selectedGiftId) {
        onPlaceGift(cellKey, null, cell.zone);
      } else {
        onPlaceGift(cellKey, selectedGiftId, cell.zone);
      }
    }
  };

  return (
    <div className="murdoku-center-panel">
      <div className="floorplan-header">
        <h2>Murdoku del Apartamento</h2>
      </div>

      {warningMsg && (
        <div className="blocked-cell-warning">
          {warningMsg}
        </div>
      )}

      {/* Grid Floorplan Map Frame */}
      <div className="murdoku-grid-map-frame">
        <div className="murdoku-grid-map">
          {MULTI_BLOCK_GRID.map((cell) => {
            const cellKey = `${cell.row}-${cell.col}`;
            const placedData = placements[cellKey];
            const placedGift = placedData ? giftMap[placedData.giftId] : null;
            const wallBorders = getCellWallBorders(cell.row, cell.col);
            const isHovered = hoveredCellKey === cellKey;
            const eliminated = isCellEliminated(cell.row, cell.col);

            return (
              <div
                key={cellKey}
                className={`murdoku-grid-cell zone-${cell.zone} ${cell.isBlocked ? 'blocked-cell' : 'free-cell'} ${placedGift ? 'has-gift-token' : ''
                  } ${eliminated ? 'eliminated-cell' : ''} ${isHovered ? 'cell-hovered' : ''}`}
                style={wallBorders}
                onClick={() => handleCellClick(cell)}
                onMouseEnter={() => setHoveredCellKey(cellKey)}
                onMouseLeave={() => setHoveredCellKey(null)}
              >
                {/* Room Title Tag Banner at Room Edge */}
                {cell.zoneTitle && <div className="murdoku-room-title-banner">{cell.zoneTitle}</div>}

                {/* Fixed Obstacle Image or Placed Gift Token */}
                {cell.isBlocked ? (
                  <div className="obstacle-image-wrapper">
                    <RenderObstacleImage name={cell.obstacle} size={84} />
                  </div>
                ) : placedGift ? (
                  <div className="gift-token-item">
                    <span className="gift-token-emoji">{placedGift.emoji}</span>
                    <span className="gift-token-name">{placedGift.name}</span>
                  </div>
                ) : null}

                {/* Black Elimination Cross Overlay (Matching Reference Image) */}
                {eliminated && (
                  <div className="elimination-cross-box">
                    <span className="cross-symbol">✖</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
