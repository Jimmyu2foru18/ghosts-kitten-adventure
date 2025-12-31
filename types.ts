export enum EntityType {
  EMPTY = 0,
  WALL = 1,
  PLAYER = 2,
  ENEMY = 3,
  GOAL = 4,
  KEY = 5,
  SPIKE = 6,
}

export enum GameState {
  START = 'START',
  PLAYING = 'PLAYING',
  WON = 'WON',
  GAME_OVER = 'GAME_OVER',
}

export enum CatName {
  FROSTY = 'Frosty',
  FLURRY = 'Flurry',
}

export interface Position {
  x: number;
  y: number;
}

export interface Level {
  id: number;
  layout: number[][]; // 0: Empty, 1: Wall, 4: Goal, 5: Key, 6: Spike
  startPos: Position;
  enemies: Position[];
}

export interface ChatMessage {
  sender: 'user' | 'yuki';
  text: string;
}
