import React from 'react';
import { EntityType, Level, Position, CatName } from '../types';
import { FrostyIcon, FlurryIcon, GhostEnemyIcon } from '../constants';
import { KeyIcon, LockClosedIcon, BoltIcon } from '@heroicons/react/24/solid';

interface GameBoardProps {
  level: Level;
  playerPos: Position;
  enemies: Position[];
  activeCat: CatName;
  hasKey: boolean;
}

const CELL_SIZE = 60; // Fixed pixel size for rigid board

export const GameBoard: React.FC<GameBoardProps> = ({ level, playerPos, enemies, activeCat, hasKey }) => {
  const { layout } = level;

  // Helper to check if a position has an enemy
  const getEnemyAt = (x: number, y: number) => enemies.find(e => e.x === x && e.y === y);

  const boardWidth = layout[0].length * CELL_SIZE;
  const boardHeight = layout.length * CELL_SIZE;

  return (
    <div 
      className="relative bg-slate-800 border-4 border-slate-700 rounded-lg shadow-2xl overflow-hidden mx-auto"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${layout[0].length}, ${CELL_SIZE}px)`,
        gridTemplateRows: `repeat(${layout.length}, ${CELL_SIZE}px)`,
        width: `${boardWidth}px`,
        height: `${boardHeight}px`,
        flexShrink: 0 // Prevent flex container from shrinking this
      }}
    >
      {layout.map((row, y) => (
        row.map((cellType, x) => {
          const isPlayer = playerPos.x === x && playerPos.y === y;
          const enemy = getEnemyAt(x, y);

          let cellContent = null;

          if (isPlayer) {
            cellContent = activeCat === CatName.FROSTY 
              ? <FrostyIcon className="w-4/5 h-4/5 animate-pulse" />
              : <FlurryIcon className="w-4/5 h-4/5 animate-pulse" />;
          } else if (enemy) {
            cellContent = <GhostEnemyIcon className="w-4/5 h-4/5 text-purple-400 animate-bounce" />;
          } else {
            switch (cellType) {
              case EntityType.WALL:
                cellContent = <div className="w-full h-full bg-slate-900 border border-slate-800" />;
                break;
              case EntityType.GOAL:
                cellContent = (
                  <div className={`w-full h-full flex items-center justify-center ${hasKey ? 'bg-cyan-900/50' : 'bg-red-900/20'}`}>
                    <LockClosedIcon className={`w-3/4 h-3/4 ${hasKey ? 'text-cyan-400 animate-pulse' : 'text-red-800'}`} />
                  </div>
                );
                break;
              case EntityType.KEY:
                cellContent = (
                  <div className="w-full h-full flex items-center justify-center">
                    <KeyIcon className="w-3/5 h-3/5 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] animate-bounce" />
                  </div>
                );
                break;
              case EntityType.SPIKE:
                cellContent = (
                  <div className="w-full h-full flex items-center justify-center">
                    <BoltIcon className="w-3/5 h-3/5 text-red-500" />
                  </div>
                );
                break;
              default:
                cellContent = <div className="w-full h-full" />; // Empty floor
            }
          }

          return (
            <div 
              key={`${x}-${y}`} 
              className={`
                relative w-full h-full flex items-center justify-center
                ${cellType === EntityType.WALL ? 'bg-slate-950' : 'bg-slate-800/50'}
                ${(x + y) % 2 === 0 ? 'opacity-90' : 'opacity-100'} 
              `}
            >
              {cellContent}
            </div>
          );
        })
      ))}
    </div>
  );
};