Ghosts Kitten Adventure
========================

A spooky-but-cute puzzle adventure where two kittens, Frosty and Flurry, try to escape a haunted mansion with the guidance of a mysterious ghost girl.

You dodge ghosts, spikes, and traps across 20 handcrafted levels while collecting keys and finding the exit door.

Tech Stack
----------

- React (TypeScript)
- Vite
- Tailwind CSS via CDN

Getting Started
---------------

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the game locally:

   ```bash
   npm run dev
   ```

3. Open the URL shown in the terminal (usually http://localhost:3000).

Controls
--------

- Move: Arrow keys or WASD
- Switch kitten: On-screen toggle in the UI
- Restart level: Restart button when you die or win

Each level introduces new layouts, enemy positions, and spike patterns. If you touch a ghost or a spike, the ghost girl comments on your fate and you restart the level.

Project Scripts
---------------

- `npm run dev` – Start the Vite dev server for local development.
- `npm run build` – Build the production bundle into the `dist` folder.
- `npm run preview` – Preview the built bundle locally.

Deploying to GitHub Pages
-------------------------

This project is already configured to work from the GitHub Pages URL:

https://jimmyu2foru18.github.io/ghosts-kitten-adventure/

The Vite configuration sets the correct base path for production builds so that assets load properly from that URL.
