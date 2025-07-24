// Reset ghosts with proper release'use client';

import { useRef, useEffect, useState } from 'react';

const COLS = 19;
const ROWS = 21;
const BLOCK = 20;
const CANVAS_WIDTH = COLS * BLOCK;
const CANVAS_HEIGHT = ROWS * BLOCK;

// Much slower, more authentic speeds (reduced by ~70%)
const FRAME_RATE = 30; // Reduced from 60 to 30fps for slower movement
const FRAME_INTERVAL = 1000 / FRAME_RATE;

const MAZE = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0],
  [0,2,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,2,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0],
  [0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0],
  [0,0,0,0,1,0,0,0,3,0,3,0,0,0,1,0,0,0,0],
  [3,3,3,0,1,0,3,3,3,3,3,3,3,0,1,0,3,3,3],
  [0,0,0,0,1,0,3,0,0,3,0,0,3,0,1,0,0,0,0],
  [3,3,3,3,1,3,3,0,3,3,3,0,3,3,1,3,3,3,3],
  [0,0,0,0,1,0,3,0,3,3,3,0,3,0,1,0,0,0,0],
  [3,3,3,0,1,0,3,3,3,3,3,3,3,0,1,0,3,3,3],
  [0,0,0,0,1,0,0,0,3,0,3,0,0,0,1,0,0,0,0],
  [0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0],
  [0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
  [0,2,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,2,0],
  [0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

type Ghost = {
  x: number;
  y: number;
  dir: Direction;
  mode: 'CAGE' | 'CHASE' | 'SCATTER' | 'FRIGHTENED' | 'EATEN' | 'RETURNING';
  color: string;
  originalColor: string;
  personalityType: 'BLINKY' | 'PINKY' | 'INKY' | 'CLYDE';
  releaseTimer: number;
  frightenedTimer: number;
  pauseTimer: number;
  speed: number;
  cornerTargets: { x: number; y: number }[];
};

type Cherry = {
  x: number;
  y: number;
  active: boolean;
  timer: number;
};

// Much slower speed configurations (reduced significantly and further reduced ghost speed)
const SPEED_CONFIG = {
  1: { pacman: 0.3, ghost: 0.22, frightened: 0.15, tunnel: 0.1 }, // Reduced ghost speed by 5%
  2: { pacman: 0.35, ghost: 0.26, frightened: 0.18, tunnel: 0.12 },
  5: { pacman: 0.4, ghost: 0.30, frightened: 0.2, tunnel: 0.15 },
  17: { pacman: 0.4, ghost: 0.30, frightened: 0, tunnel: 0.15 },
  21: { pacman: 0.35, ghost: 0.30, frightened: 0, tunnel: 0.15 }
};

// Power pellet duration per level (in frames at 30fps)
const PELLET_DURATION = {
  1: 180, 2: 150, 3: 120, 4: 90, 5: 60, 6: 150, 7: 60, 8: 60, 9: 30, 10: 150,
  11: 60, 12: 30, 13: 30, 14: 90, 15: 30, 16: 30, 17: 0, 18: 30, 19: 0
};

export default function CanvasPacman({
  start,
  onGameOver,
  onPlayAgain,
  onPublishScore,
  playerAddress,
}: {
  start: boolean;
  onGameOver: (score: number, level: number) => void;
  onPlayAgain?: () => void;
  onPublishScore?: (score: number, level: number) => void;
  playerAddress?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameLoopRef = useRef<number | undefined>(undefined);
  const mazeRef = useRef<number[][]>(MAZE.map(row => [...row]));
  const lastFrameTimeRef = useRef<number>(0);

  const [isGameOver, setIsGameOver] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);

  const pacmanRef = useRef({
    x: 9,
    y: 15,
    dir: 'RIGHT' as Direction,
    nextDir: 'RIGHT' as Direction,
    speed: 0.3,
    eating: false,
    eatTimer: 0,
    animFrame: 0
  });

  const ghostsRef = useRef<Ghost[]>([
    {
      x: 9, y: 9, dir: 'UP', mode: 'CHASE', color: '#FF0000', originalColor: '#FF0000',
      personalityType: 'BLINKY', releaseTimer: 0, frightenedTimer: 0, pauseTimer: 0, speed: 0.22,
      cornerTargets: [{ x: 18, y: 0 }, { x: 18, y: 5 }]
    },
    {
      x: 8, y: 10, dir: 'UP', mode: 'CAGE', color: '#FFB8FF', originalColor: '#FFB8FF',
      personalityType: 'PINKY', releaseTimer: 120, frightenedTimer: 0, pauseTimer: 0, speed: 0.22, // Changed to 4 seconds
      cornerTargets: [{ x: 0, y: 0 }, { x: 5, y: 0 }]
    },
    {
      x: 9, y: 10, dir: 'DOWN', mode: 'CAGE', color: '#00FFFF', originalColor: '#00FFFF',
      personalityType: 'INKY', releaseTimer: 240, frightenedTimer: 0, pauseTimer: 0, speed: 0.22, // Changed to 8 seconds
      cornerTargets: [{ x: 18, y: 20 }, { x: 13, y: 20 }]
    },
    {
      x: 10, y: 10, dir: 'UP', mode: 'CAGE', color: '#FFB847', originalColor: '#FFB847',
      personalityType: 'CLYDE', releaseTimer: 360, frightenedTimer: 0, pauseTimer: 0, speed: 0.22, // Changed to 12 seconds
      cornerTargets: [{ x: 0, y: 20 }, { x: 5, y: 20 }]
    }
  ]);

  const cherryRef = useRef<Cherry>({
    x: 9, y: 12, active: false, timer: 0
  });

  const gameStateRef = useRef({
    score: 0,
    level: 1,
    lives: 3,
    powerMode: false,
    powerTimer: 0,
    gameOver: false,
    dotsRemaining: 0,
    paused: false,
    frameCount: 0,
    ghostCombo: 0,
    pelletFlashTimer: 0
  });

  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(3);

  // Initialize dot count
  useEffect(() => {
    const dotCount = MAZE.flat().filter(cell => cell === 1 || cell === 2).length;
    gameStateRef.current.dotsRemaining = dotCount;
  }, []);

  const getCurrentSpeedConfig = () => {
    const lvl = gameStateRef.current.level;
    if (lvl >= 21) return SPEED_CONFIG[21];
    if (lvl >= 17) return SPEED_CONFIG[17];
    if (lvl >= 5) return SPEED_CONFIG[5];
    if (lvl >= 2) return SPEED_CONFIG[2];
    return SPEED_CONFIG[1];
  };

  const getPelletDuration = () => {
    const lvl = gameStateRef.current.level;
    return PELLET_DURATION[lvl as keyof typeof PELLET_DURATION] || 0;
  };

  const canMove = (x: number, y: number): boolean => {
    if (y === 9 && (x < 0 || x >= COLS)) return true; // Tunnel
    if (x < 0 || x >= COLS || y < 0 || y >= ROWS) return false;
    return mazeRef.current[y][x] !== 0;
  };

  const getDirectionOffset = (dir: Direction) => {
    switch (dir) {
      case 'UP': return { dx: 0, dy: -1 };
      case 'DOWN': return { dx: 0, dy: 1 };
      case 'LEFT': return { dx: -1, dy: 0 };
      case 'RIGHT': return { dx: 1, dy: 0 };
    }
  };

  const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  };

  const getGhostTarget = (ghost: Ghost): { x: number; y: number } => {
    const pacman = pacmanRef.current;
    
    if (ghost.mode === 'SCATTER') {
      return ghost.cornerTargets[0];
    }
    
    if (ghost.mode === 'FRIGHTENED' || ghost.mode === 'CAGE') {
      return { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) };
    }
    
    if (ghost.mode === 'EATEN' || ghost.mode === 'RETURNING') {
      return { x: 9, y: 9 }; // Return to ghost house
    }

    // Chase mode - different AI per ghost
    switch (ghost.personalityType) {
      case 'BLINKY':
        return { x: pacman.x, y: pacman.y };
      
      case 'PINKY':
        const pOffset = getDirectionOffset(pacman.dir);
        return { 
          x: pacman.x + (pOffset.dx * 4), 
          y: pacman.y + (pOffset.dy * 4) 
        };
      
      case 'INKY':
        const blinky = ghostsRef.current[0];
        const iOffset = getDirectionOffset(pacman.dir);
        const midX = pacman.x + (iOffset.dx * 2);
        const midY = pacman.y + (iOffset.dy * 2);
        return {
          x: midX + (midX - blinky.x),
          y: midY + (midY - blinky.y)
        };
      
      case 'CLYDE':
        const dist = getDistance(ghost.x, ghost.y, pacman.x, pacman.y);
        if (dist > 8) {
          return { x: pacman.x, y: pacman.y };
        } else {
          return ghost.cornerTargets[0];
        }
      
      default:
        return { x: pacman.x, y: pacman.y };
    }
  };

  const movePacman = () => {
    const pacman = pacmanRef.current;
    const speedConfig = getCurrentSpeedConfig();
    
    if (pacman.eating && pacman.eatTimer > 0) {
      pacman.eatTimer--;
      return; // Pacman stops briefly when eating
    }
    
    pacman.eating = false;
    
    // Much slower movement - only move every few frames
    if (gameStateRef.current.frameCount % Math.ceil(1 / speedConfig.pacman) !== 0) {
      return;
    }
    
    // Check if we can change direction
    const nextOffset = getDirectionOffset(pacman.nextDir);
    if (canMove(pacman.x + nextOffset.dx, pacman.y + nextOffset.dy)) {
      pacman.dir = pacman.nextDir;
    }

    const offset = getDirectionOffset(pacman.dir);
    const newX = pacman.x + offset.dx;
    const newY = pacman.y + offset.dy;

    if (canMove(newX, newY)) {
      pacman.x = newX;
      pacman.y = newY;

      // Handle tunnel teleportation
      if (pacman.y === 9) {
        if (pacman.x < 0) pacman.x = COLS - 1;
        if (pacman.x >= COLS) pacman.x = 0;
      }

      const cell = mazeRef.current[pacman.y][pacman.x];
      if (cell === 1) {
        mazeRef.current[pacman.y][pacman.x] = 3;
        gameStateRef.current.score += 10;
        gameStateRef.current.dotsRemaining--;
        setScore(gameStateRef.current.score);
        pacman.eating = true;
        pacman.eatTimer = 2; // Brief pause
      } else if (cell === 2) {
        mazeRef.current[pacman.y][pacman.x] = 3;
        gameStateRef.current.score += 50;
        gameStateRef.current.dotsRemaining--;
        gameStateRef.current.powerMode = true;
        gameStateRef.current.powerTimer = getPelletDuration();
        gameStateRef.current.ghostCombo = 0;
        
        // Make all active ghosts frightened
        ghostsRef.current.forEach(g => {
          if (g.mode !== 'CAGE' && g.mode !== 'EATEN' && g.mode !== 'RETURNING') {
            g.mode = 'FRIGHTENED';
            g.frightenedTimer = gameStateRef.current.powerTimer;
            // Reverse direction when becoming frightened
            g.dir = g.dir === 'UP' ? 'DOWN' : 
                   g.dir === 'DOWN' ? 'UP' :
                   g.dir === 'LEFT' ? 'RIGHT' : 'LEFT';
          }
        });
        
        setScore(gameStateRef.current.score);
        pacman.eating = true;
        pacman.eatTimer = 5; // Longer pause for power pellet
      }

      pacman.animFrame = (pacman.animFrame + 1) % 8;
    }
  };

  const moveGhost = (ghost: Ghost) => {
    if (ghost.pauseTimer > 0) {
      ghost.pauseTimer--;
      return;
    }
    
    if (ghost.mode === 'CAGE') {
      if (ghost.releaseTimer > 0) {
        ghost.releaseTimer--;
        return;
      } else {
        ghost.mode = 'CHASE';
        ghost.x = 9; // Ensure proper positioning
        ghost.y = 9; // Move out of cage to center
      }
    }

    // Handle returning to cage after being eaten
    if (ghost.mode === 'RETURNING') {
      if (ghost.x === 9 && ghost.y === 9) {
        ghost.mode = 'CHASE';
        ghost.color = ghost.originalColor;
        ghost.frightenedTimer = 0;
      }
    }

    // Much slower ghost movement
    const speedConfig = getCurrentSpeedConfig();
    const moveInterval = Math.ceil(1 / (ghost.mode === 'FRIGHTENED' ? speedConfig.frightened : 
                                       ghost.mode === 'EATEN' || ghost.mode === 'RETURNING' ? speedConfig.ghost * 2 : 
                                       speedConfig.ghost));
    if (gameStateRef.current.frameCount % moveInterval !== 0) {
      return;
    }

    const target = getGhostTarget(ghost);
    const directions: Direction[] = ['UP', 'DOWN', 'LEFT', 'RIGHT'];
    const possibleDirs = directions.filter(dir => {
      const offset = getDirectionOffset(dir);
      const newX = ghost.x + offset.dx;
      const newY = ghost.y + offset.dy;
      return canMove(newX, newY) && 
             !(dir === 'UP' && ghost.dir === 'DOWN') &&
             !(dir === 'DOWN' && ghost.dir === 'UP') &&
             !(dir === 'LEFT' && ghost.dir === 'RIGHT') &&
             !(dir === 'RIGHT' && ghost.dir === 'LEFT');
    });

    if (possibleDirs.length > 0) {
      if (ghost.mode === 'FRIGHTENED') {
        // Random movement when frightened
        ghost.dir = possibleDirs[Math.floor(Math.random() * possibleDirs.length)];
      } else {
        // Find direction that minimizes distance to target
        let bestDir = ghost.dir;
        let bestDistance = Infinity;
        
        possibleDirs.forEach(dir => {
          const offset = getDirectionOffset(dir);
          const newX = ghost.x + offset.dx;
          const newY = ghost.y + offset.dy;
          const distance = getDistance(newX, newY, target.x, target.y);
          
          if (distance < bestDistance) {
            bestDistance = distance;
            bestDir = dir;
          }
        });
        
        ghost.dir = bestDir;
      }
    }

    const offset = getDirectionOffset(ghost.dir);
    const newX = ghost.x + offset.dx;
    const newY = ghost.y + offset.dy;

    if (canMove(newX, newY)) {
      ghost.x = newX;
      ghost.y = newY;
      
      // Handle tunnel
      if (ghost.y === 9) {
        if (ghost.x < 0) ghost.x = COLS - 1;
        if (ghost.x >= COLS) ghost.x = 0;
      }
    }
  };

  const moveGhosts = () => {
    ghostsRef.current.forEach(ghost => {
      // Update frightened timer
      if (ghost.mode === 'FRIGHTENED' && ghost.frightenedTimer > 0) {
        ghost.frightenedTimer--;
        if (ghost.frightenedTimer <= 0) {
          ghost.mode = 'CHASE';
          ghost.color = ghost.originalColor;
        }
      }
      
      moveGhost(ghost);
    });
  };

  const checkCollisions = () => {
    const pacman = pacmanRef.current;
    if (gameStateRef.current.paused) return;

    ghostsRef.current.forEach((ghost, index) => {
      if (ghost.x === pacman.x && ghost.y === pacman.y) {
        if (ghost.mode === 'FRIGHTENED') {
          // Eat ghost
          gameStateRef.current.ghostCombo++;
          const points = 200 * Math.pow(2, gameStateRef.current.ghostCombo - 1);
          gameStateRef.current.score += points;
          setScore(gameStateRef.current.score);
          
          ghost.mode = 'RETURNING';
          ghost.color = '#666666'; // Gray for eaten ghost
          
          // Pause the entire game for 1 second when eating ghost
          gameStateRef.current.paused = true;
          setTimeout(() => {
            if (!gameStateRef.current.gameOver) {
              gameStateRef.current.paused = false;
            }
          }, 1000); // 1 second pause
          
        } else if (ghost.mode !== 'EATEN' && ghost.mode !== 'RETURNING') {
          // Ghost caught Pacman
          gameStateRef.current.lives--;
          setLives(gameStateRef.current.lives);

          if (gameStateRef.current.lives <= 0) {
            gameStateRef.current.gameOver = true;
            setIsGameOver(true);
            onGameOver(gameStateRef.current.score, gameStateRef.current.level);
          } else {
            // Reset positions
            pacman.x = 9;
            pacman.y = 15;
            pacman.dir = 'RIGHT';
            pacman.nextDir = 'RIGHT';
            pacman.eating = false;
            pacman.eatTimer = 0;

            // Reset ghosts
            const speedConfig = getCurrentSpeedConfig();
            ghostsRef.current.forEach((g, i) => {
              if (i === 0) {
                g.x = 9; g.y = 9; // Blinky starts in center
              } else {
                // Properly position other ghosts in cage
                g.x = 7 + i; g.y = 10; // Spread them out more
              }
              g.mode = i === 0 ? 'CHASE' : 'CAGE';
              g.dir = i % 2 === 0 ? 'UP' : 'DOWN';
              g.speed = speedConfig.ghost;
              g.frightenedTimer = 0;
              g.pauseTimer = 0;
              g.color = g.originalColor;
              g.releaseTimer = i === 0 ? 0 : i * 120; // Stagger release every 4 seconds
            });

            gameStateRef.current.powerMode = false;
            gameStateRef.current.powerTimer = 0;
            gameStateRef.current.ghostCombo = 0;

            // Brief pause
            gameStateRef.current.paused = true;
            setTimeout(() => {
              if (!gameStateRef.current.gameOver) {
                gameStateRef.current.paused = false;
              }
            }, 1000);
          }
        }
      }
    });
  };

  const updateCherry = () => {
    const cherry = cherryRef.current;
    
    if (!cherry.active) {
      // Random chance to spawn cherry (roughly every 15 seconds)
      if (Math.random() < 0.001) {
        cherry.active = true;
        cherry.timer = FRAME_RATE * 15; // 15 seconds
        // Random position in playable area, ensuring it's not in walls
        let attempts = 0;
        do {
          cherry.x = Math.floor(Math.random() * (COLS - 2)) + 1; // Avoid edges
          cherry.y = Math.floor(Math.random() * (ROWS - 2)) + 1; // Avoid edges
          attempts++;
        } while (mazeRef.current[cherry.y][cherry.x] === 0 && attempts < 50);
        
        // If we can't find a good spot, don't spawn
        if (attempts >= 50) {
          cherry.active = false;
        }
      }
    } else {
      cherry.timer--;
      if (cherry.timer <= 0) {
        cherry.active = false;
      }
      
      // Check if Pacman ate cherry
      const pacman = pacmanRef.current;
      if (pacman.x === cherry.x && pacman.y === cherry.y) {
        gameStateRef.current.score += 100;
        setScore(gameStateRef.current.score);
        cherry.active = false;
      }
    }
  };

  const checkLevelComplete = () => {
    if (gameStateRef.current.dotsRemaining <= 0) {
      gameStateRef.current.level++;
      gameStateRef.current.score += 1000;
      setLevel(gameStateRef.current.level);
      setScore(gameStateRef.current.score);

      // Reset maze
      mazeRef.current = MAZE.map(row => [...row]);
      gameStateRef.current.dotsRemaining = MAZE.flat().filter(cell => cell === 1 || cell === 2).length;

      // Reset positions
      const pacman = pacmanRef.current;
      pacman.x = 9; pacman.y = 15;
      pacman.dir = 'RIGHT'; pacman.nextDir = 'RIGHT';
      pacman.eating = false; pacman.eatTimer = 0; pacman.animFrame = 0;

      // Reset ghosts with new speeds
      const speedConfig = getCurrentSpeedConfig();
      ghostsRef.current.forEach((g, i) => {
        if (i === 0) {
          g.x = 9; g.y = 9; // Blinky starts in center
        } else {
          // Properly position other ghosts in cage
          g.x = 7 + i; g.y = 10; // Spread them out more
        }
        g.mode = i === 0 ? 'CHASE' : 'CAGE';
        g.dir = i % 2 === 0 ? 'UP' : 'DOWN';
        g.speed = speedConfig.ghost;
        g.frightenedTimer = 0;
        g.pauseTimer = 0;
        g.color = g.originalColor;
        g.releaseTimer = i === 0 ? 0 : i * 120; // Stagger release every 4 seconds
      });

      gameStateRef.current.powerMode = false;
      gameStateRef.current.powerTimer = 0;
      gameStateRef.current.ghostCombo = 0;
      cherryRef.current.active = false;
    }
  };

  const gameLoop = (currentTime: number) => {
    if (gameStateRef.current.gameOver) return;

    // Maintain consistent 30fps frame rate
    if (currentTime - lastFrameTimeRef.current < FRAME_INTERVAL) {
      gameLoopRef.current = requestAnimationFrame(gameLoop);
      return;
    }
    
    lastFrameTimeRef.current = currentTime;
    
    if (!gameStateRef.current.paused) {
      gameStateRef.current.frameCount++;
      
      movePacman();
      moveGhosts();
      checkCollisions();
      updateCherry();
      checkLevelComplete();

      // Update power mode
      if (gameStateRef.current.powerMode) {
        gameStateRef.current.powerTimer--;
        if (gameStateRef.current.powerTimer <= 0) {
          gameStateRef.current.powerMode = false;
          ghostsRef.current.forEach(g => {
            if (g.mode === 'FRIGHTENED') {
              g.mode = 'CHASE';
              g.color = g.originalColor;
              g.frightenedTimer = 0;
            }
          });
        }
      }
    }

    draw();
    gameLoopRef.current = requestAnimationFrame(gameLoop);
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw maze
    ctx.strokeStyle = '#0000FF';
    ctx.lineWidth = 2;
    mazeRef.current.forEach((row, y) => {
      row.forEach((cell, x) => {
        const px = x * BLOCK;
        const py = y * BLOCK;
        switch (cell) {
          case 0:
            ctx.fillStyle = '#0000FF';
            ctx.fillRect(px, py, BLOCK, BLOCK);
            break;
          case 1:
            ctx.fillStyle = '#FFFF00';
            ctx.beginPath();
            ctx.arc(px + BLOCK / 2, py + BLOCK / 2, 2, 0, Math.PI * 2);
            ctx.fill();
            break;
          case 2:
            // Power pellet with flashing effect
            const flash = gameStateRef.current.frameCount % 20 < 10;
            ctx.fillStyle = flash ? '#FFFF00' : '#FFFFFF';
            ctx.beginPath();
            ctx.arc(px + BLOCK / 2, py + BLOCK / 2, 6, 0, Math.PI * 2);
            ctx.fill();
            break;
        }
      });
    });

    // Draw cherry (only if in valid position)
    const cherry = cherryRef.current;
    if (cherry.active && cherry.x >= 0 && cherry.x < COLS && cherry.y >= 0 && cherry.y < ROWS) {
      ctx.fillStyle = '#FF0000';
      ctx.beginPath();
      ctx.arc(cherry.x * BLOCK + BLOCK / 2, cherry.y * BLOCK + BLOCK / 2, 4, 0, Math.PI * 2);
      ctx.fill();
      // Cherry stem
      ctx.strokeStyle = '#00FF00';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cherry.x * BLOCK + BLOCK / 2, cherry.y * BLOCK + BLOCK / 2 - 4);
      ctx.lineTo(cherry.x * BLOCK + BLOCK / 2 - 2, cherry.y * BLOCK + BLOCK / 2 - 8);
      ctx.stroke();
    }

    // Draw Pacman with better graphics
    const pac = pacmanRef.current;
    const pacX = pac.x * BLOCK + BLOCK / 2;
    const pacY = pac.y * BLOCK + BLOCK / 2;

    ctx.fillStyle = '#FFFF00';
    ctx.beginPath();
    ctx.arc(pacX, pacY, BLOCK / 2 - 1, 0, Math.PI * 2);
    ctx.fill();

    // Pacman mouth animation
    const mouthAngle = Math.PI / 3;
    const mouthOpen = pac.animFrame < 4;
    const actualMouthAngle = mouthOpen ? mouthAngle : Math.PI / 8;

    let startAngle = 0;
    switch (pac.dir) {
      case 'RIGHT': startAngle = -actualMouthAngle / 2; break;
      case 'LEFT': startAngle = Math.PI - actualMouthAngle / 2; break;
      case 'UP': startAngle = -Math.PI / 2 - actualMouthAngle / 2; break;
      case 'DOWN': startAngle = Math.PI / 2 - actualMouthAngle / 2; break;
    }

    if (mouthOpen) {
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.moveTo(pacX, pacY);
      ctx.arc(pacX, pacY, BLOCK / 2 - 1, startAngle, startAngle + actualMouthAngle, false);
      ctx.closePath();
      ctx.fill();
    }

    // Draw ghosts with MUCH better graphics
    ghostsRef.current.forEach(ghost => {
      const gx = ghost.x * BLOCK + BLOCK / 2;
      const gy = ghost.y * BLOCK + BLOCK / 2;

      if (ghost.mode === 'EATEN' || ghost.mode === 'RETURNING') {
        // Just draw eyes when eaten/returning
        ctx.fillStyle = '#FFF';
        ctx.fillRect(gx - 6, gy - 6, 4, 4);
        ctx.fillRect(gx + 2, gy - 6, 4, 4);
        ctx.fillStyle = '#000';
        ctx.fillRect(gx - 5, gy - 5, 2, 2);
        ctx.fillRect(gx + 3, gy - 5, 2, 2);
        return;
      }

      // Ghost body color
      if (ghost.mode === 'FRIGHTENED') {
        // Flashing blue/white when frightened
        const flashTime = ghost.frightenedTimer;
        if (flashTime < 60 && flashTime % 10 < 5) {
          ctx.fillStyle = '#FFFFFF';
        } else {
          ctx.fillStyle = '#0000FF';
        }
      } else {
        ctx.fillStyle = ghost.originalColor;
      }

      // Draw proper ghost shape - rounded top, wavy bottom
      ctx.beginPath();
      
      // Top semicircle
      ctx.arc(gx, gy - 4, BLOCK / 2 - 1, Math.PI, 0, false);
      
      // Straight sides down
      ctx.lineTo(gx + BLOCK / 2 - 1, gy + BLOCK / 2 - 1);
      
      // Wavy bottom edge
      const waveWidth = (BLOCK - 2) / 3;
      for (let i = 0; i < 3; i++) {
        const waveX = gx + BLOCK / 2 - 1 - (waveWidth * (i + 1));
        const waveY = gy + BLOCK / 2 - 1 + (i % 2 === 0 ? -4 : 0);
        ctx.lineTo(waveX, waveY);
      }
      
      // Close path back to start
      ctx.lineTo(gx - BLOCK / 2 + 1, gy + BLOCK / 2 - 1);
      ctx.closePath();
      ctx.fill();

      // Ghost eyes - much better looking
      ctx.fillStyle = '#FFFFFF';
      // Left eye
      ctx.beginPath();
      ctx.arc(gx - 4, gy - 4, 3, 0, Math.PI * 2);
      ctx.fill();
      // Right eye  
      ctx.beginPath();
      ctx.arc(gx + 4, gy - 4, 3, 0, Math.PI * 2);
      ctx.fill();
      
      // Eye pupils - look in movement direction
      ctx.fillStyle = '#000000';
      let eyeOffsetX = 0, eyeOffsetY = 0;
      switch (ghost.dir) {
        case 'LEFT': eyeOffsetX = -1; break;
        case 'RIGHT': eyeOffsetX = 1; break;
        case 'UP': eyeOffsetY = -1; break;
        case 'DOWN': eyeOffsetY = 1; break;
      }
      
      // Left pupil
      ctx.beginPath();
      ctx.arc(gx - 4 + eyeOffsetX, gy - 4 + eyeOffsetY, 1, 0, Math.PI * 2);
      ctx.fill();
      // Right pupil
      ctx.beginPath();
      ctx.arc(gx + 4 + eyeOffsetX, gy - 4 + eyeOffsetY, 1, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameStateRef.current.gameOver) {
        if (e.code === 'Space' && !isGameOver) setIsGameOver(true);
        return;
      }
      
      const pac = pacmanRef.current;
      switch (e.code) {
        case 'ArrowUp':
        case 'KeyW':
          e.preventDefault();
          pac.nextDir = 'UP';
          break;
        case 'ArrowDown':
        case 'KeyS':
          e.preventDefault();
          pac.nextDir = 'DOWN';
          break;
        case 'ArrowLeft':
        case 'KeyA':
          e.preventDefault();
          pac.nextDir = 'LEFT';
          break;
        case 'ArrowRight':
        case 'KeyD':
          e.preventDefault();
          pac.nextDir = 'RIGHT';
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGameOver]);

  // Game initialization
  useEffect(() => {
    if (start && !gameStateRef.current.gameOver) {
      // Reset game state
      gameStateRef.current = {
        score: 0,
        level: 1,
        lives: 3,
        powerMode: false,
        powerTimer: 0,
        gameOver: false,
        dotsRemaining: MAZE.flat().filter(cell => cell === 1 || cell === 2).length,
        paused: false,
        frameCount: 0,
        ghostCombo: 0,
        pelletFlashTimer: 0
      };

      setScore(0);
      setLevel(1);
      setLives(3);
      setIsGameOver(false);

      // Reset maze
      mazeRef.current = MAZE.map(row => [...row]);

      // Reset Pacman
      pacmanRef.current = {
        x: 9,
        y: 15,
        dir: 'RIGHT',
        nextDir: 'RIGHT',
        speed: 0.3,
        eating: false,
        eatTimer: 0,
        animFrame: 0
      };

      // Reset ghosts with proper release timers and positioning
      ghostsRef.current = [
        {
          x: 9, y: 9, dir: 'UP', mode: 'CHASE', color: '#FF0000', originalColor: '#FF0000',
          personalityType: 'BLINKY', releaseTimer: 0, frightenedTimer: 0, pauseTimer: 0, speed: 0.22,
          cornerTargets: [{ x: 18, y: 0 }, { x: 18, y: 5 }]
        },
        {
          x: 8, y: 10, dir: 'UP', mode: 'CAGE', color: '#FFB8FF', originalColor: '#FFB8FF',
          personalityType: 'PINKY', releaseTimer: 120, frightenedTimer: 0, pauseTimer: 0, speed: 0.22, // 4 seconds
          cornerTargets: [{ x: 0, y: 0 }, { x: 5, y: 0 }]
        },
        {
          x: 9, y: 10, dir: 'DOWN', mode: 'CAGE', color: '#00FFFF', originalColor: '#00FFFF',
          personalityType: 'INKY', releaseTimer: 240, frightenedTimer: 0, pauseTimer: 0, speed: 0.22, // 8 seconds
          cornerTargets: [{ x: 18, y: 20 }, { x: 13, y: 20 }]
        },
        {
          x: 10, y: 10, dir: 'UP', mode: 'CAGE', color: '#FFB847', originalColor: '#FFB847',
          personalityType: 'CLYDE', releaseTimer: 360, frightenedTimer: 0, pauseTimer: 0, speed: 0.22, // 12 seconds
          cornerTargets: [{ x: 0, y: 20 }, { x: 5, y: 20 }]
        }
      ];

      // Reset cherry
      cherryRef.current = {
        x: 9, y: 12, active: false, timer: 0
      };

      // Start game loop
      lastFrameTimeRef.current = performance.now();
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    }
    
    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [start]);

  // Game over handlers
  const handleRestart = () => {
    if (onPlayAgain) {
      gameStateRef.current.gameOver = false;
      setIsGameOver(false);
      onPlayAgain();
    }
  };

  const handleTweetScore = () => {
    const gameType = 'PACMAN';
    const sc = gameStateRef.current.score;
    const tweetText = `I scored ${sc.toLocaleString()} points on @375ai_ Arcade's ${gameType}! Powered by @irys_xyz blockchain. https://375-arcade.vercel.app/`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, '_blank');
  };

  const handlePublishScore = async () => {
    if (!playerAddress) {
      alert('No wallet connected');
      return;
    }
    setIsPublishing(true);
    try {
      if (!(window as any).ethereum) throw new Error('No wallet found. Please install MetaMask, OKX, or another Web3 wallet.');

      const scoreData = {
        walletAddress: playerAddress,
        score: gameStateRef.current.score,
        level: gameStateRef.current.level,
        timestamp: Date.now(),
        chainId: process.env.NEXT_PUBLIC_IRYS_CHAIN_ID,
        gameType: 'pacman',
        version: '2.0'
      };

      const tags = [
        { name: 'Application', value: 'Pacman-Leaderboard' },
        { name: 'Type', value: 'Score' },
        { name: 'Player', value: playerAddress },
        { name: 'Score', value: gameStateRef.current.score.toString() },
        { name: 'Level', value: gameStateRef.current.level.toString() },
        { name: 'Timestamp', value: Date.now().toString() },
        { name: 'Content-Type', value: 'application/json' }
      ];

      const { ethers } = await import('ethers');
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const signer = await provider.getSigner();

      const message = `Publish Pacman Score: ${gameStateRef.current.score} points, level ${gameStateRef.current.level} at ${Date.now()}`;
      const signature = await signer.signMessage(message);

      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: scoreData, tags, signature, message })
      });

      const result = await response.json();
      if (result.success) {
        if (onPublishScore) onPublishScore(gameStateRef.current.score, gameStateRef.current.level);
        alert(`🎉 Score published to blockchain!\n\nTransaction ID: ${result.txHash}\n\nYour Pacman score is now permanently stored on the Irys blockchain!`);
      } else throw new Error(result.error || 'Upload failed');
    } catch (e: any) {
      if (e.code === 4001) alert('Transaction cancelled by user');
      else if (e.message?.includes('User rejected')) alert('Transaction rejected by user');
      else alert(`Failed to publish score: ${e.message}`);
    } finally {
      setIsPublishing(false);
    }
  };

  const getResponsiveSize = () => {
    if (typeof window === 'undefined') return { scale: 1, containerWidth: CANVAS_WIDTH };
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const maxGameWidth = Math.min(screenWidth * 0.8, 600);
    const maxGameHeight = Math.min(screenHeight * 0.6, 500);
    const scaleX = maxGameWidth / CANVAS_WIDTH;
    const scaleY = maxGameHeight / CANVAS_HEIGHT;
    const scale = Math.min(scaleX, scaleY, 1.5);
    return { scale: Math.max(scale, 0.6), containerWidth: CANVAS_WIDTH * scale };
  };

  const { scale, containerWidth } = getResponsiveSize();

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        style={{
          background: '#000',
          border: '2px solid #FFD700',
          borderRadius: '8px',
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          imageRendering: 'pixelated'
        }}
      />

      {/* HUD - Positioned at top of game border */}
      <div style={{
        position: 'absolute',
        top: `${-5}px`, // Very close to the top border
        left: '0',
        right: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        pointerEvents: 'none'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(8, 8, 12, 0.9) 0%, rgba(15, 15, 20, 0.9) 100%)',
          border: '2px solid rgba(255, 215, 0, 0.3)',
          borderRadius: '12px',
          padding: '8px 16px',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
          fontSize: `${12 * scale}px`,
          fontFamily: 'monospace',
          fontWeight: 'bold',
          color: '#FFFF00'
        }}>
          <div>Score: {score.toLocaleString()}</div>
          <div>Level: {level}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            Lives: {Array.from({length: lives}, (_, i) => '🧡').join('')}
          </div>
        </div>
      </div>

      {/* Power Mode Indicator */}
      {gameStateRef.current.powerMode && (
        <div style={{
          position: 'absolute',
          top: `${-80 * scale}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#00FFFF',
          fontFamily: 'monospace',
          fontSize: `${14 * scale}px`,
          fontWeight: 'bold',
          animation: 'blink 0.5s infinite'
        }}>
          POWER MODE: {Math.ceil(gameStateRef.current.powerTimer / FRAME_RATE)}s
        </div>
      )}

      {isGameOver && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '24px',
          fontFamily: 'sans-serif',
          zIndex: 10000
        }}>
          <div style={{
            background: '#333',
            padding: '40px',
            borderRadius: '10px',
            textAlign: 'center',
            border: '2px solid #FFD700',
            minWidth: '300px',
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh'
          }}>
            <button
              onClick={() => { setIsGameOver(false); }}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'transparent',
                border: 'none',
                color: '#999',
                fontSize: '24px',
                cursor: 'pointer',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'all 0.2s'
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#999';
              }}
            >
              ×
            </button>

            <h2 style={{ margin: '0 0 20px 0', color: '#FFD700' }}>Game Over!</h2>
            <div style={{ fontSize: '18px', marginBottom: '20px' }}>
              <div>Final Score: <span style={{ color: '#FFFF00' }}>{gameStateRef.current.score.toLocaleString()}</span></div>
              <div>Level Reached: <span style={{ color: '#FF69B4' }}>{gameStateRef.current.level}</span></div>
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={handleRestart}
                style={{
                  padding: '12px 24px',
                  fontSize: '16px',
                  background: '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Play Again
              </button>

              <button
                onClick={handleTweetScore}
                style={{
                  padding: '12px 24px',
                  fontSize: '16px',
                  background: '#1DA1F2',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                🐦 Tweet Score
              </button>

              {playerAddress && (
                <button
                  onClick={handlePublishScore}
                  disabled={isPublishing}
                  style={{
                    padding: '12px 24px',
                    fontSize: '16px',
                    background: isPublishing ? '#7f8c8d' : '#6366f1',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: isPublishing ? 'not-allowed' : 'pointer',
                    opacity: isPublishing ? 0.7 : 1
                  }}
                >
                  {isPublishing ? '⏳ Publishing...' : '🏆 Publish to Leaderboards'}
                </button>
              )}
            </div>

            {isPublishing && (
              <div style={{ marginTop: '15px', fontSize: '14px', color: '#95a5a6' }}>
                Sign the transaction in your wallet to publish your score to the blockchain
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}