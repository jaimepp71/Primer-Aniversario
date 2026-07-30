// Valid dates for login access (Supports both 22/05/2025 and 01/08/2025)
export const VALID_LOGIN_DATES = ['22/05/2025', '01/08/2025'];

// 5 Apartment Locations (Columns)
export const LOCATIONS = [
  { id: 'sofa', name: 'Salón', icon: '🛋️', label: 'Salón', lat: 40.4168, lng: -3.7038 },
  { id: 'bano', name: 'Baño', icon: '🛁', label: 'Baño', lat: 40.4175, lng: -3.7030 },
  { id: 'cocina', name: 'Cocina', icon: '☕', label: 'Zona Cocina / Cafetera ☕', lat: 40.4182, lng: -3.7045 },
  { id: 'balcon', name: 'Terraza', icon: '🌿', label: 'Terraza', lat: 40.4190, lng: -3.7035 },
  { id: 'noche', name: 'Dormitorio', icon: '🛏️', label: 'Dormitorio', lat: 40.4160, lng: -3.7025 }
];

// 3 Masked Gifts (Rows)
export const GIFTS = [
  { id: 'r1', name: 'Regalo 1', label: 'Regalo 1' },
  { id: 'r2', name: 'Regalo 2', label: 'Regalo 2' },
  { id: 'r3', name: 'Regalo 3', label: 'Regalo 3' }
];

// 3 Narrative Clues for Deductive Solution
export const NARRATIVE_CLUES = [
  {
    id: 1,
    text: '1. El Regalo 1 se encuentra en el baño.'
  },
  {
    id: 2,
    text: '2. El Regalo 2 se encuentra al lado de la nevera.'
  },
  {
    id: 3,
    text: '3. Pista General: El Regalo 3 se encuentra al lado del sofá.'
  }
];

// Exact Mathematical Solution: Unique match for Murdoku logic
export const EXACT_SOLUTION = {
  r1: 'bano',     // Regalo 1 ➔ Baño / Aseo 🛁 (Fila 1, Columna 3)
  r2: 'cocina',   // Regalo 2 ➔ Zona Cocina ☕ (Fila 0, Columna 1)
  r3: 'sofa'      // Regalo 3 ➔ Salón / Sofá 🛋️ (Fila 3, Columna 2)
};

export const EXACT_SOLUTION_CELLS = {
  r1: '1-3',
  r2: '0-1',
  r3: '3-2'
};

export const VICTORY_DATA = {
  title: 'MURDOKU RESUELTO!!! 🏆',
  message: 'Como has podido ver era muy sencillo... Ahora ya conoces las ubicaciones de tus tres regalos! Espero que te gusten ❤️',
  revelations: [
    { gift: 'Regalo 1', detail: 'Está en el baño. La verdad que no tiene mucho misterio... si no lo ves ponte las gafas.' },
    { gift: 'Regalo 2', detail: 'Guardado en uno de los armarios de la cocina...' },
    { gift: 'Regalo 3', detail: 'El tercero está cerca del sofá...' }
  ],
  closingText: 'Feliz Aniversario!!! Que suerte tengo de tenerte ❤️'
};
