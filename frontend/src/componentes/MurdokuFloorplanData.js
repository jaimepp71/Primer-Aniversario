// 5x5 Grid Cells (25 Blocks) with Large Central Salón & Irregular Small Rooms
export const MULTI_BLOCK_GRID = [
  // Row 0
  { row: 0, col: 0, zone: 'cocina', obstacle: '☕ Cafetera', isBlocked: true },
  { row: 0, col: 1, zone: 'cocina', obstacle: null, isBlocked: false },
  { row: 0, col: 2, zone: 'cocina', obstacle: '🧊 Nevera', isBlocked: true },
  { row: 0, col: 3, zone: 'bano', obstacle: '🛁 Bañera', isBlocked: true },
  { row: 0, col: 4, zone: 'bano', obstacle: null, isBlocked: false },

  // Row 1
  { row: 1, col: 0, zone: 'cocina', zoneTitle: 'COCINA', obstacle: null, isBlocked: false },
  { row: 1, col: 1, zone: 'sofa', obstacle: null, isBlocked: false },
  { row: 1, col: 2, zone: 'sofa', obstacle: '📺 TV', isBlocked: true },
  { row: 1, col: 3, zone: 'bano', zoneTitle: 'BAÑO', obstacle: null, isBlocked: false },
  { row: 1, col: 4, zone: 'bano', obstacle: '🧼 Lavabo', isBlocked: true },

  // Row 2 - Massive Central Salón (8 Cells Total)
  { row: 2, col: 0, zone: 'noche', obstacle: null, isBlocked: false },
  { row: 2, col: 1, zone: 'sofa', obstacle: null, isBlocked: false },
  { row: 2, col: 2, zone: 'sofa', obstacle: '🛋️ Sofá', isBlocked: true },
  { row: 2, col: 3, zone: 'sofa', obstacle: null, isBlocked: false },
  { row: 2, col: 4, zone: 'sofa', obstacle: null, isBlocked: false },

  // Row 3
  { row: 3, col: 0, zone: 'noche', obstacle: '🛏️ Cama', isBlocked: true },
  { row: 3, col: 1, zone: 'sofa', obstacle: null, isBlocked: false },
  { row: 3, col: 2, zone: 'sofa', zoneTitle: 'SALÓN', obstacle: null, isBlocked: false },
  { row: 3, col: 3, zone: 'balcon', obstacle: null, isBlocked: false },
  { row: 3, col: 4, zone: 'balcon', obstacle: '🌿 Maceta', isBlocked: true },

  // Row 4
  { row: 4, col: 0, zone: 'noche', zoneTitle: 'DORMITORIO', obstacle: null, isBlocked: false },
  { row: 4, col: 1, zone: 'noche', obstacle: '⏰ Despertador', isBlocked: true },
  { row: 4, col: 2, zone: 'balcon', obstacle: null, isBlocked: false },
  { row: 4, col: 3, zone: 'balcon', zoneTitle: 'TERRAZA', obstacle: null, isBlocked: false },
  { row: 4, col: 4, zone: 'balcon', obstacle: '🪑 Silla', isBlocked: true }
];

