export const DEMO_EVENTS = [
  { type: 'start', x: 50, y: 50, user: 'X', delay: 0 },

  // Petal 1: Top
  { type: 'draw', x: 50, y: 30, color: '#6366f1', size: 4, delay: 100 },
  { type: 'draw', x: 55, y: 25, color: '#818cf8', size: 5, delay: 200 },
  { type: 'draw', x: 45, y: 25, color: '#818cf8', size: 5, delay: 300 },
  { type: 'draw', x: 50, y: 50, color: '#6366f1', size: 3, delay: 400 },

  // Petal 2: Top-Right
  { type: 'draw', x: 65, y: 35, color: '#8b5cf6', size: 4, delay: 550 },
  { type: 'draw', x: 75, y: 40, color: '#a78bfa', size: 5, delay: 650 },
  { type: 'draw', x: 70, y: 50, color: '#a78bfa', size: 5, delay: 750 },
  { type: 'draw', x: 50, y: 50, color: '#8b5cf6', size: 3, delay: 850 },

  // Petal 3: Bottom-Right
  { type: 'draw', x: 65, y: 65, color: '#d946ef', size: 4, delay: 1000 },
  { type: 'draw', x: 60, y: 75, color: '#f0abfc', size: 5, delay: 1100 },
  { type: 'draw', x: 50, y: 70, color: '#f0abfc', size: 5, delay: 1200 },
  { type: 'draw', x: 50, y: 50, color: '#d946ef', size: 3, delay: 1300 },

  // Petal 4: Bottom
  { type: 'draw', x: 50, y: 75, color: '#ec4899', size: 4, delay: 1450 },
  { type: 'draw', x: 45, y: 80, color: '#f472b6', size: 5, delay: 1550 },
  { type: 'draw', x: 55, y: 80, color: '#f472b6', size: 5, delay: 1650 },
  { type: 'draw', x: 50, y: 50, color: '#ec4899', size: 3, delay: 1750 },

  // Petal 5: Bottom-Left
  { type: 'draw', x: 35, y: 65, color: '#f43f5e', size: 4, delay: 1900 },
  { type: 'draw', x: 25, y: 60, color: '#fb7185', size: 5, delay: 2000 },
  { type: 'draw', x: 30, y: 50, color: '#fb7185', size: 5, delay: 2100 },
  { type: 'draw', x: 50, y: 50, color: '#f43f5e', size: 3, delay: 2200 },

  // Petal 6: Top-Left
  { type: 'draw', x: 35, y: 35, color: '#f59e0b', size: 4, delay: 2350 },
  { type: 'draw', x: 30, y: 25, color: '#fbbf24', size: 5, delay: 2450 },
  { type: 'draw', x: 40, y: 25, color: '#fbbf24', size: 5, delay: 2550 },
  { type: 'draw', x: 50, y: 50, color: '#f59e0b', size: 3, delay: 2650 },

  { type: 'stop', user: 'X', delay: 2800 },

  // Creative Y Reaction
  { type: 'typing', x: 55, y: 45, text: 'wow...', user: 'Y', delay: 3100 },
  { type: 'typing', x: 55, y: 45, text: 'that flow is insane', user: 'Y', delay: 3600 },
  { type: 'write', x: 55, y: 45, text: 'MASTERPIECE ✨', color: '#10b981', user: 'Y', delay: 4200 },
];