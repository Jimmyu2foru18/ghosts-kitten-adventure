import React from 'react';
import { Level } from './types';

// Visual Assets as Components for cleaner usage
export const FrostyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="55" r="40" fill="#F8FAFC" /> {/* White Body */}
    <path d="M20 25 L10 5 L40 20 Z" fill="#F8FAFC" /> {/* Left Ear */}
    <path d="M80 25 L90 5 L60 20 Z" fill="#F8FAFC" /> {/* Right Ear */}
    <circle cx="35" cy="50" r="5" fill="#38BDF8" /> {/* Blue Eye */}
    <circle cx="65" cy="50" r="5" fill="#38BDF8" /> {/* Blue Eye */}
    <path d="M45 60 Q50 65 55 60" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" /> {/* Mouth */}
    <circle cx="50" cy="58" r="2" fill="#FDA4AF" /> {/* Nose */}
  </svg>
);

export const FlurryIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="55" r="40" fill="#94A3B8" /> {/* Grey Body */}
    <path d="M20 25 L10 5 L40 20 Z" fill="#94A3B8" />
    <path d="M80 25 L90 5 L60 20 Z" fill="#94A3B8" />
    <circle cx="35" cy="50" r="5" fill="#FDE047" /> {/* Yellow Eye */}
    <circle cx="65" cy="50" r="5" fill="#FDE047" /> {/* Yellow Eye */}
    <path d="M45 60 Q50 65 55 60" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
    <circle cx="50" cy="58" r="2" fill="#FDA4AF" />
    <path d="M30 40 Q40 30 50 40" stroke="#CBD5E1" strokeWidth="2" opacity="0.5"/> {/* Stripes */}
  </svg>
);

export const GhostGirlIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Hair Back */}
    <path d="M20 30 Q50 10 80 30 V 80 Q50 90 20 80 Z" fill="#0F172A" />
    {/* Face */}
    <circle cx="50" cy="45" r="25" fill="#F1F5F9" />
    {/* Bangs/Hair Front */}
    <path d="M25 40 Q50 20 75 40 Q75 25 50 20 Q25 25 25 40 Z" fill="#0F172A" />
    <path d="M20 40 L20 90" stroke="#0F172A" strokeWidth="0" />
    {/* Eyes */}
    <circle cx="42" cy="45" r="2" fill="#0F172A" />
    <circle cx="58" cy="45" r="2" fill="#0F172A" />
    {/* Blush */}
    <circle cx="38" cy="50" r="2" fill="#FDA4AF" opacity="0.5"/>
    <circle cx="62" cy="50" r="2" fill="#FDA4AF" opacity="0.5"/>
  </svg>
);

export const GhostEnemyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 80 Q20 20 50 20 Q80 20 80 80 L70 70 L60 80 L50 70 L40 80 L30 70 L20 80 Z" fill="#A855F7" opacity="0.8" />
    <circle cx="40" cy="45" r="3" fill="#FDE047" />
    <circle cx="60" cy="45" r="3" fill="#FDE047" />
  </svg>
);

export const LEVELS: Level[] = [
  // Level 1: Basics
  {
    id: 1,
    startPos: { x: 1, y: 1 },
    enemies: [{ x: 5, y: 3 }],
    layout: [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 5, 1],
      [1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 0, 1, 1, 0, 1],
      [1, 4, 0, 0, 1, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ],
  },
  // Level 2: Introduction to enemies
  {
    id: 2,
    startPos: { x: 1, y: 1 },
    enemies: [{ x: 4, y: 4 }, { x: 2, y: 5 }],
    layout: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 0, 0, 0, 5, 1],
      [1, 0, 0, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 0, 6, 0, 1, 0, 1],
      [1, 4, 1, 0, 0, 0, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
  },
  // Level 3: Introduction to spikes
  {
    id: 3,
    startPos: { x: 1, y: 5 },
    enemies: [{ x: 3, y: 2 }, { x: 5, y: 5 }, { x: 7, y: 2 }],
    layout: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 5, 0, 0, 0, 6, 0, 0, 0, 1],
      [1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 6, 1, 1, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 0, 1, 1, 1, 0, 1, 4, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
  },
  // Level 4: The Pillars
  {
    id: 4,
    startPos: { x: 1, y: 1 },
    enemies: [{ x: 5, y: 1 }, { x: 5, y: 5 }],
    layout: [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 1, 0, 1, 5, 1],
      [1, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 0, 1, 0, 1, 0, 1],
      [1, 4, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ]
  },
  // Level 5: Spike Alley
  {
    id: 5,
    startPos: { x: 1, y: 3 },
    enemies: [{ x: 6, y: 3 }],
    layout: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 5, 0, 0, 0, 6, 0, 0, 1], // Key Top Left (1,1)
      [1, 1, 1, 0, 1, 1, 1, 0, 1], // Open at x=3, x=7
      [1, 0, 0, 0, 0, 0, 0, 0, 1], // Main Hallway (y=3)
      [1, 1, 0, 1, 1, 0, 1, 1, 1], // Open at x=2, x=5. x=2 leads to goal. x=5 leads to spike.
      [1, 4, 0, 6, 0, 0, 0, 0, 1], // Goal (1,5). Spike (3,5)
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]
  },
  // Level 6: Divided Room
  {
    id: 6,
    startPos: { x: 4, y: 3 },
    enemies: [{ x: 1, y: 1 }, { x: 7, y: 5 }],
    layout: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 5, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 1, 4, 1],
      [1, 0, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]
  },
  // Level 7: Small & Crowded
  {
    id: 7,
    startPos: { x: 1, y: 1 },
    enemies: [{ x: 3, y: 3 }, { x: 4, y: 2 }, { x: 2, y: 4 }],
    layout: [
      [1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 5, 1],
      [1, 0, 1, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 4, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1],
    ]
  },
  // Level 8: Zig Zag
  {
    id: 8,
    startPos: { x: 1, y: 1 },
    enemies: [{ x: 3, y: 3 }, { x: 6, y: 3 }],
    layout: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 0, 0, 0, 1, 5, 1],
      [1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 4, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]
  },
  // Level 9: The Forest (Pillars)
  {
    id: 9,
    startPos: { x: 1, y: 1 },
    enemies: [{ x: 7, y: 1 }, { x: 1, y: 6 }],
    layout: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 1, 0, 1, 0, 1, 5, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 0, 1, 0, 1, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 4, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]
  },
  // Level 10: Ghost House
  {
    id: 10,
    startPos: { x: 4, y: 4 },
    enemies: [{ x: 1, y: 1 }, { x: 7, y: 1 }, { x: 1, y: 7 }, { x: 7, y: 7 }],
    layout: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 5, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 4, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]
  },
  // Level 11: The Long Bridge
  {
    id: 11,
    startPos: { x: 1, y: 2 },
    enemies: [{ x: 5, y: 1 }, { x: 5, y: 3 }],
    layout: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 6, 6, 0, 0, 0, 0, 0, 6, 6, 1],
      [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
      [1, 6, 6, 0, 0, 0, 0, 0, 6, 6, 1],
      [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [1, 4, 0, 0, 0, 0, 0, 0, 0, 5, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]
  },
  // Level 12: Four Corners
  {
    id: 12,
    startPos: { x: 1, y: 1 },
    enemies: [{ x: 3, y: 3 }, { x: 5, y: 3 }],
    layout: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1, 0, 0, 5, 1],
      [1, 0, 1, 0, 0, 0, 1, 0, 1],
      [1, 0, 0, 0, 6, 0, 0, 0, 1],
      [1, 1, 0, 1, 1, 1, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 4, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]
  },
  // Level 13: Danger Key
  {
    id: 13,
    startPos: { x: 1, y: 1 },
    enemies: [{ x: 4, y: 1 }, { x: 4, y: 5 }],
    layout: [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 4, 1],
      [1, 1, 1, 0, 1, 1, 0, 1], // Added opening at (6,2)
      [1, 6, 0, 0, 0, 0, 0, 1], // Removed spike at (6,3)
      [1, 6, 0, 5, 0, 0, 6, 1],
      [1, 6, 0, 0, 0, 0, 6, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ]
  },
  // Level 14: Labyrinth (Fixed)
  {
    id: 14,
    startPos: { x: 1, y: 1 },
    enemies: [{ x: 5, y: 5 }],
    layout: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1], // Opened x=3
      [1, 1, 0, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 1, 5, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 0, 1, 4, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]
  },
  // Level 15: The Split
  {
    id: 15,
    startPos: { x: 4, y: 6 },
    enemies: [{ x: 2, y: 2 }, { x: 6, y: 2 }],
    layout: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 5, 0, 1, 4, 1, 0, 0, 1],
      [1, 0, 0, 1, 0, 1, 0, 0, 1],
      [1, 0, 0, 1, 0, 1, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]
  },
  // Level 16: Hopscotch (Balanced)
  {
    id: 16,
    startPos: { x: 1, y: 3 },
    enemies: [{ x: 3, y: 3 }, { x: 6, y: 3 }],
    layout: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 5, 6, 0, 6, 0, 6, 4, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 6, 0, 6, 0, 6, 0, 6, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]
  },
  // Level 17: The Horseshoe (Enemies Fixed)
  {
    id: 17,
    startPos: { x: 1, y: 1 },
    enemies: [{ x: 1, y: 3 }, { x: 6, y: 2 }],
    layout: [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1, 5, 0, 1],
      [1, 0, 1, 0, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 4, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ]
  },
  // Level 18: The Rush (Widened)
  {
    id: 18,
    startPos: { x: 1, y: 3 },
    enemies: [{ x: 4, y: 1 }, { x: 4, y: 3 }, { x: 4, y: 5 }],
    layout: [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 5, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 0, 0, 1, 1, 1], // Widened connection
      [1, 0, 0, 0, 0, 0, 4, 1],
      [1, 1, 1, 0, 0, 1, 1, 1], // Widened connection
      [1, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ]
  },
  // Level 19: Maze II (Enemy Fixed)
  {
    id: 19,
    startPos: { x: 1, y: 1 },
    enemies: [{ x: 5, y: 1 }, { x: 6, y: 3 }],
    layout: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 5, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 0, 1, 0, 0, 0, 1],
      [1, 4, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]
  },
  // Level 20: The Final Chamber (Opened)
  {
    id: 20,
    startPos: { x: 5, y: 5 },
    enemies: [{ x: 2, y: 2 }, { x: 8, y: 2 }, { x: 2, y: 8 }, { x: 8, y: 8 }],
    layout: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 5, 0, 0, 0, 1, 0, 0, 0, 4, 1],
      [1, 0, 0, 6, 0, 1, 0, 6, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1], // Opened start area
      [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 6, 0, 1, 0, 6, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]
  }
];