import React, { useState, useEffect, useCallback } from 'react';
import { GameBoard } from './components/GameBoard';
import { GhostGirlInterface } from './components/GhostGirlInterface';
import { 
  Level, 
  Position, 
  CatName, 
  GameState, 
  EntityType, 
  ChatMessage 
} from './types';
import { LEVELS, FrostyIcon, FlurryIcon } from './constants';
import { getGhostGirlMessage, MessageType } from './services/geminiService';
import { ArrowUpIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

const App: React.FC = () => {
  const [currentLevelIdx, setCurrentLevelIdx] = useState(0);
  const [level, setLevel] = useState<Level>(LEVELS[0]);
  const [playerPos, setPlayerPos] = useState<Position>(LEVELS[0].startPos);
  const [enemies, setEnemies] = useState<Position[]>(LEVELS[0].enemies);
  const [activeCat, setActiveCat] = useState<CatName>(CatName.FROSTY);
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [hasKey, setHasKey] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { sender: 'yuki', text: "Welcome... I am the Ghost Girl. Stay close to me." }
  ]);

  // Helper to add message
  const addGhostMessage = (type: MessageType, lvlId: number = 1, extra: string = "") => {
    const text = getGhostGirlMessage(type, lvlId, extra);
    setChatMessages(prev => [...prev, { sender: 'yuki', text }]);
  };

  // Initialize Level
  const initLevel = useCallback((levelIndex: number) => {
    const newLevel = LEVELS[levelIndex];
    setLevel(newLevel);
    setPlayerPos(newLevel.startPos);
    setEnemies(JSON.parse(JSON.stringify(newLevel.enemies))); // Deep copy
    setHasKey(false);
    setGameState(GameState.PLAYING);
    
    // Trigger Ghost Girl intro for level
    // We need to use a timeout or effect to ensure this runs after state update, 
    // but direct call is fine here as it doesn't depend on render
    // Use setTimeout to make it feel like a reaction
    setTimeout(() => {
        addGhostMessage('INTRO', newLevel.id);
    }, 500);

  }, []);

  const handleMove = useCallback((dx: number, dy: number) => {
    if (gameState !== GameState.PLAYING) return;

    setPlayerPos(prev => {
      const newX = prev.x + dx;
      const newY = prev.y + dy;

      // Check Bounds
      if (
        newY < 0 || newY >= level.layout.length ||
        newX < 0 || newX >= level.layout[0].length
      ) return prev;

      const cellType = level.layout[newY][newX];

      // Check Walls
      if (cellType === EntityType.WALL) return prev;

      // Check Spikes (Simple hazard)
      if (cellType === EntityType.SPIKE) {
        handleGameOver("stepped on a trap");
        return prev; // Or move and die? Let's handle death logic separately
      }

      // Valid Move
      return { x: newX, y: newY };
    });
  }, [gameState, level]);

  const moveEnemies = useCallback(() => {
    if (gameState !== GameState.PLAYING) return;
    
    setEnemies(prevEnemies => {
      return prevEnemies.map(enemy => {
        // Simple AI: Move towards player occasionally
        if (Math.random() > 0.6) return enemy; // Stutter movement

        const dx = playerPos.x - enemy.x;
        const dy = playerPos.y - enemy.y;
        
        let moveX = 0;
        let moveY = 0;

        if (Math.abs(dx) > Math.abs(dy)) {
          moveX = dx > 0 ? 1 : -1;
        } else {
          moveY = dy > 0 ? 1 : -1;
        }

        // Check if blocked by wall
        const targetX = enemy.x + moveX;
        const targetY = enemy.y + moveY;

        if (
            targetY >= 0 && targetY < level.layout.length &&
            targetX >= 0 && targetX < level.layout[0].length &&
            level.layout[targetY][targetX] !== EntityType.WALL
        ) {
            return { x: targetX, y: targetY };
        }

        return enemy;
      });
    });
  }, [playerPos, level, gameState]);

  // Game Loop for logic checks (Collision, Win, Items)
  useEffect(() => {
    if (gameState !== GameState.PLAYING) return;

    const cell = level.layout[playerPos.y][playerPos.x];

    // Check Key
    if (cell === EntityType.KEY && !hasKey) {
      setHasKey(true);
      addGhostMessage('KEY', level.id);
    }

    // Check Goal
    if (cell === EntityType.GOAL) {
      if (hasKey) {
        handleWin();
      } else {
        // Bumped locked door - optional feedback
      }
    }

    // Check Enemy Collision
    const hitEnemy = enemies.some(e => e.x === playerPos.x && e.y === playerPos.y);
    if (hitEnemy) {
      handleGameOver("caught by a shadow wisp");
    }
    
    // Check Spike Collision (redundant with move but safe)
    if (cell === EntityType.SPIKE) {
        handleGameOver("stepped on a spike");
    }

  }, [playerPos, enemies, hasKey, gameState, level]);

  // Enemy Movement Loop
  useEffect(() => {
    const interval = setInterval(moveEnemies, 800);
    return () => clearInterval(interval);
  }, [moveEnemies]);

  const handleWin = () => {
    setGameState(GameState.WON);
    addGhostMessage('WIN', level.id);
  };

  const handleGameOver = (reason: string) => {
    setGameState(GameState.GAME_OVER);
    addGhostMessage('DEATH', level.id, reason);
  };

  const nextLevel = () => {
    const nextIdx = currentLevelIdx + 1;
    if (nextIdx < LEVELS.length) {
      setCurrentLevelIdx(nextIdx);
      initLevel(nextIdx);
    } else {
      // Loop or Finish
      addGhostMessage('GAME_COMPLETE', 0);
      setCurrentLevelIdx(0);
      initLevel(0);
    }
  };

  const restartLevel = () => {
    initLevel(currentLevelIdx);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch(e.key) {
        case 'ArrowUp': case 'w': handleMove(0, -1); break;
        case 'ArrowDown': case 's': handleMove(0, 1); break;
        case 'ArrowLeft': case 'a': handleMove(-1, 0); break;
        case 'ArrowRight': case 'd': handleMove(1, 0); break;
        case ' ': // Space to swap cat
          setActiveCat(prev => prev === CatName.FROSTY ? CatName.FLURRY : CatName.FROSTY);
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleMove]);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-slate-950 text-slate-200 font-sans">
      
      {/* Main Game Area */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        {/* Header */}
        <header className="p-4 flex justify-between items-center bg-slate-900 border-b border-slate-800 z-10">
          <div>
            <h1 className="text-2xl font-spooky text-purple-400 tracking-wider">
              Ghosts Kitten Adventure
            </h1>
            <p className="text-xs text-slate-500">Level {currentLevelIdx + 1} - {activeCat}</p>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => setActiveCat(CatName.FROSTY)}
              className={`p-2 rounded-full border-2 transition-all ${activeCat === CatName.FROSTY ? 'border-blue-400 bg-blue-900/30 scale-110' : 'border-transparent opacity-50'}`}
            >
              <FrostyIcon className="w-8 h-8" />
            </button>
            <button 
              onClick={() => setActiveCat(CatName.FLURRY)}
              className={`p-2 rounded-full border-2 transition-all ${activeCat === CatName.FLURRY ? 'border-yellow-400 bg-yellow-900/30 scale-110' : 'border-transparent opacity-50'}`}
            >
              <FlurryIcon className="w-8 h-8" />
            </button>
          </div>
        </header>

        {/* Game Viewport */}
        <main className="flex-1 flex items-center justify-center p-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black relative">
           
           {gameState === GameState.START && (
             <div className="absolute z-20 bg-slate-900/90 p-8 rounded-2xl border border-purple-500/30 text-center max-w-md shadow-[0_0_50px_rgba(168,85,247,0.2)]">
               <h2 className="text-3xl font-spooky text-purple-300 mb-4">Enter the Mansion</h2>
               <p className="mb-6 text-slate-400">Frosty and Flurry are lost. Help them find the keys to escape.</p>
               <button 
                onClick={() => initLevel(0)}
                className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-bold transition-transform active:scale-95 shadow-lg shadow-purple-900/50"
               >
                 Start Adventure
               </button>
             </div>
           )}

           {gameState === GameState.GAME_OVER && (
             <div className="absolute z-20 bg-red-950/90 p-8 rounded-2xl border border-red-500/30 text-center max-w-md backdrop-blur-sm">
               <h2 className="text-3xl font-spooky text-red-400 mb-4">Spirited Away...</h2>
               <p className="mb-4 text-slate-300 text-sm italic">{chatMessages[chatMessages.length - 1]?.text}</p>
               <button 
                onClick={restartLevel}
                className="flex items-center justify-center gap-2 mx-auto px-6 py-3 bg-red-800 hover:bg-red-700 text-white rounded-lg font-bold transition-all"
               >
                 <ArrowPathIcon className="w-5 h-5"/> Try Again
               </button>
             </div>
           )}

          {gameState === GameState.WON && (
             <div className="absolute z-20 bg-cyan-950/90 p-8 rounded-2xl border border-cyan-500/30 text-center max-w-md backdrop-blur-sm">
               <h2 className="text-3xl font-spooky text-cyan-300 mb-4">Door Unlocked!</h2>
               <button 
                onClick={nextLevel}
                className="px-8 py-3 bg-cyan-700 hover:bg-cyan-600 text-white rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]"
               >
                 Next Room
               </button>
             </div>
           )}

           <GameBoard 
             level={level} 
             playerPos={playerPos} 
             enemies={enemies}
             activeCat={activeCat}
             hasKey={hasKey}
           />
        </main>

        {/* Mobile Controls */}
        <div className="md:hidden p-4 pb-8 bg-slate-900 grid grid-cols-3 gap-2 justify-items-center max-w-xs mx-auto w-full">
           <div />
           <button onClick={() => handleMove(0, -1)} className="p-4 bg-slate-800 rounded-xl active:bg-slate-700"><ArrowUpIcon className="w-6 h-6"/></button>
           <div />
           <button onClick={() => handleMove(-1, 0)} className="p-4 bg-slate-800 rounded-xl active:bg-slate-700"><ArrowLeftIcon className="w-6 h-6"/></button>
           <button onClick={() => handleMove(0, 1)} className="p-4 bg-slate-800 rounded-xl active:bg-slate-700"><ArrowDownIcon className="w-6 h-6"/></button>
           <button onClick={() => handleMove(1, 0)} className="p-4 bg-slate-800 rounded-xl active:bg-slate-700"><ArrowRightIcon className="w-6 h-6"/></button>
        </div>
      </div>

      {/* Sidebar / Ghost Girl Interface */}
      <GhostGirlInterface messages={chatMessages} loading={false} />
      
    </div>
  );
};

export default App;