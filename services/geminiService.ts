// This service provides static pre-made messages.
// It completely replaces the previous AI integration to avoid API quota limits.

export type MessageType = 'INTRO' | 'WIN' | 'DEATH' | 'KEY' | 'GAME_COMPLETE';

const INTRO_MESSAGES: Record<number, string> = {
  1: "Welcome to my mansion, little ones. Use the Arrow Keys or WASD to move. You must find the Golden Key to unlock the Red Door.",
  2: "Shhh... do you see them? The purple spirits haunt this room. Watch their movement patterns carefully to avoid them.",
  3: "This room is dangerous. The floor spikes are sharp! Watch where you step and time your movements.",
  4: "Pillars create blind spots. Move cautiously, the shadows hide behind them.",
  5: "Spike Alley! You must find the correct gap in the wall to reach the key safely. Not every path is clear.",
  6: "The room is divided. You may need to lure the spirits away to reach the key safely.",
  7: "Such a tiny room! There is very little space to hide from the spirit here. Be quick!",
  8: "A zig-zag path. Do not rush, or you might run straight into a ghost.",
  9: "The forest of pillars... it's easy to get lost. Keep your eyes on the key.",
  10: "You've made it far, but the spirits are getting restless. Can you survive the Ghost House?",
  11: "A long, narrow bridge. One wrong step and you'll be cornered. Timing is everything.",
  12: "Four corners, four dangers. The key is protected by the patrol.",
  13: "The key is surrounded! You'll need to be brave to snatch it from the traps.",
  14: "A labyrinth of walls. The path is not always clear. Find the opening.",
  15: "Halfway through the darkness. The path splits—choose wisely.",
  16: "Hopscotch over the spikes. Watch the floor pattern closely.",
  17: "A horseshoe shape. You have to go all the way around to get back.",
  18: "The Rush! The spirits are fast here. Do not hesitate.",
  19: "Another maze, but tighter. The walls are closing in.",
  20: "The final chamber! The spirits are all around you. Prove your courage one last time!"
};

const DEATH_MESSAGES = [
  "Oh no! The shadows claimed you... Let me bring you back to the start.",
  "Be careful! My mansion is not a safe place for kittens.",
  "That looked painful. Try again, I'm watching over you.",
  "The spirits are restless today. Don't let them touch you!",
  "Poor kitty. The darkness is hungry.",
  "Do not fear, you have nine lives... or at least infinite retries."
];

const WIN_MESSAGES = [
  "Well done! You've unlocked the path forward.",
  "Splendid! The next room awaits.",
  "You are clever little kittens. Keep going.",
  "The door opens for you. Proceed with caution.",
  "Excellent. You are getting closer to freedom."
];

export const getGhostGirlMessage = (type: MessageType, levelId: number = 1, extraInfo: string = ""): string => {
  switch (type) {
    case 'INTRO':
      return INTRO_MESSAGES[levelId] || "Another room... stay close to me.";
    
    case 'KEY':
      return "You found the Key! The door is now unlocked. Hurry to the exit!";
    
    case 'WIN':
      return WIN_MESSAGES[(levelId - 1) % WIN_MESSAGES.length] || "Proceed to the next room.";
    
    case 'DEATH':
      if (extraInfo.includes("spike") || extraInfo.includes("trap")) {
        return "Ouch! Those spikes are deadly. Avoid the lightning bolts!";
      }
      return DEATH_MESSAGES[Math.floor(Math.random() * DEATH_MESSAGES.length)];
    
    case 'GAME_COMPLETE':
      return "You have explored all the rooms I have for you. You are truly brave cats. You are free... for now.";
      
    default:
      return "...";
  }
};