'use client';

import { useRef, useEffect, useState } from 'react';

const COLS = 19;
const ROWS = 21;
const BLOCK = 20;
const CANVAS_WIDTH = COLS * BLOCK;
const CANVAS_HEIGHT = ROWS * BLOCK;

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
type Ghost = { x: number; y: number; dir: Direction; color: string; vulnerable: boolean; originalColor: string };

export default function CanvasPacman({
  onGameOver,
  start,
  onPlayAgain,
  onPublishScore,
  playerAddress,
}: {
  onGameOver: (score: number, level: number) => void;
  start: boolean;
  onPlayAgain?: () => void;
  onPublishScore?: (score: number, level: number) => void;
  playerAddress?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameLoopRef = useRef<number | undefined>(undefined);
  const mazeRef = useRef<number[][]>(MAZE.map(row => [...row]));

  const [isGameOver, setIsGameOver] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);

  const pacmanRef = useRef({
    x: 9,
    y: 15,
    dir: 'RIGHT' as Direction,
    nextDir: 'RIGHT' as Direction,
    moving: true,
    respawning: false,
    respawnTimer: 0,
    animFrame: 0
  });

  const ghostsRef = useRef<Ghost[]>([
    { x: 9, y: 9, dir: 'UP',    color: '#FF0000', vulnerable: false, originalColor: '#FF0000' },
    { x: 8, y: 10, dir: 'LEFT',  color: '#FFB8FF', vulnerable: false, originalColor: '#FFB8FF' },
    { x: 9, y: 10, dir: 'UP',    color: '#00FFFF', vulnerable: false, originalColor: '#00FFFF' },
    { x: 10,y: 10, dir: 'RIGHT', color: '#FFB847', vulnerable: false, originalColor: '#FFB847' }
  ]);

  const gameStateRef = useRef({
    score: 0,
    level: 1,
    lives: 3,
    powerMode: false,
    powerTimer: 0,
    gameOver: false,
    dotsRemaining: 0,
    paused: false,
    frameCount: 0
  });

  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(3);

  useEffect(() => {
    const dotCount = MAZE.flat().filter(cell => cell === 1 || cell === 2).length;
    gameStateRef.current.dotsRemaining = dotCount;
  }, []);

  const canMove = (x: number, y: number): boolean => {
  // Handle tunnel passage ONLY on row 9 (middle row)
  if (y === 9 && (x < 0 || x >= COLS)) {
    return true; // Allow tunnel passage
  }
  
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

  const movePacman = () => {
  const pacman = pacmanRef.current;

  if (pacman.respawning) {
    pacman.respawnTimer--;
    if (pacman.respawnTimer <= 0) {
      pacman.respawning = false;
      pacman.moving = true;
    }
    return;
  }

  // Smoother (every 2 frames)
  if (gameStateRef.current.frameCount % 2 !== 0) return;

  const nextOffset = getDirectionOffset(pacman.nextDir);
  if (canMove(pacman.x + nextOffset.dx, pacman.y + nextOffset.dy)) {
    pacman.dir = pacman.nextDir;
    pacman.moving = true;
  }

  if (pacman.moving) {
    const offset = getDirectionOffset(pacman.dir);
    const newX = pacman.x + offset.dx;
    const newY = pacman.y + offset.dy;

    if (canMove(newX, newY)) {
      pacman.x = newX;
      pacman.y = newY;

      // Handle tunnel teleportation ONLY on row 9 (middle tunnel)
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
      } else if (cell === 2) {
        mazeRef.current[pacman.y][pacman.x] = 3;
        gameStateRef.current.score += 50;
        gameStateRef.current.dotsRemaining--;
        gameStateRef.current.powerMode = true;
        gameStateRef.current.powerTimer = 120;
        ghostsRef.current.forEach(g => { g.vulnerable = true; });
        setScore(gameStateRef.current.score);
      }

      pacman.animFrame = (pacman.animFrame + 1) % 8;
    } else {
      pacman.moving = false;
    }
  }
};

  const moveGhosts = () => {
    // Slower ghosts (every 5 frames)
    if (gameStateRef.current.frameCount % 5 !== 0) return;

    ghostsRef.current.forEach(ghost => {
      const directions: Direction[] = ['UP', 'DOWN', 'LEFT', 'RIGHT'];
      const possibleDirs = directions.filter(dir => {
        const offset = getDirectionOffset(dir);
        return canMove(ghost.x + offset.dx, ghost.y + offset.dy);
      });

      if (possibleDirs.length > 0) {
        const pacman = pacmanRef.current;
        const dx = pacman.x - ghost.x;
        const dy = pacman.y - ghost.y;

        let preferredDir: Direction;
        if (Math.abs(dx) > Math.abs(dy)) preferredDir = dx > 0 ? 'RIGHT' : 'LEFT';
        else preferredDir = dy > 0 ? 'DOWN' : 'UP';

        if (ghost.vulnerable) {
          switch (preferredDir) {
            case 'UP': preferredDir = 'DOWN'; break;
            case 'DOWN': preferredDir = 'UP'; break;
            case 'LEFT': preferredDir = 'RIGHT'; break;
            case 'RIGHT': preferredDir = 'LEFT'; break;
          }
        }

        if (possibleDirs.includes(preferredDir) && Math.random() < 0.5) {
          ghost.dir = preferredDir;
        } else {
          ghost.dir = possibleDirs[Math.floor(Math.random() * possibleDirs.length)];
        }
      }

      const offset = getDirectionOffset(ghost.dir);
      const newX = ghost.x + offset.dx;
      const newY = ghost.y + offset.dy;

      if (canMove(newX, newY)) {
        ghost.x = newX; ghost.y = newY;
        if (ghost.x < 0) ghost.x = COLS - 1;
        if (ghost.x >= COLS) ghost.x = 0;
      }
    });
  };

  const checkCollisions = () => {
    const pacman = pacmanRef.current;
    if (pacman.respawning || gameStateRef.current.paused) return;

    ghostsRef.current.forEach(ghost => {
      if (ghost.x === pacman.x && ghost.y === pacman.y) {
        if (ghost.vulnerable) {
          gameStateRef.current.score += 200;
          setScore(gameStateRef.current.score);
          ghost.x = 9;
          ghost.y = 9;
          ghost.vulnerable = false;
          ghost.color = ghost.originalColor;
        } else {
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
            pacman.moving = false;
            pacman.respawning = true;
            pacman.respawnTimer = 50; // 1.5 seconds at 60fps
            pacman.animFrame = 0;

            // Reset ghosts
            ghostsRef.current.forEach((g, i) => {
              g.x = 9;
              g.y = 9 + (i % 2);
              g.vulnerable = false;
              g.color = g.originalColor;
            });

            gameStateRef.current.powerMode = false;
            gameStateRef.current.powerTimer = 0;

            // Brief pause before resuming
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

  const checkLevelComplete = () => {
    if (gameStateRef.current.dotsRemaining <= 0) {
      gameStateRef.current.level++;
      gameStateRef.current.score += 1000;
      setLevel(gameStateRef.current.level);
      setScore(gameStateRef.current.score);

      mazeRef.current = MAZE.map(row => [...row]);
      gameStateRef.current.dotsRemaining = MAZE.flat().filter(cell => cell === 1 || cell === 2).length;

      const pacman = pacmanRef.current;
      pacman.x = 9; pacman.y = 15;
      pacman.dir = 'RIGHT'; pacman.nextDir = 'RIGHT';
      pacman.moving = true; pacman.respawning = false; pacman.animFrame = 0;

      ghostsRef.current.forEach((g, i) => {
        g.x = 9; g.y = 9 + (i % 2);
        g.vulnerable = false; g.color = g.originalColor;
      });

      gameStateRef.current.powerMode = false;
      gameStateRef.current.powerTimer = 0;
    }
  };

  const gameLoop = () => {
    if (gameStateRef.current.gameOver) return;
    
    // Don't process game logic when paused, but continue the loop
    if (!gameStateRef.current.paused) {
      gameStateRef.current.frameCount++;
      
      movePacman();
      moveGhosts();
      checkCollisions();
      checkLevelComplete();

      if (gameStateRef.current.powerMode) {
        gameStateRef.current.powerTimer--;
        if (gameStateRef.current.powerTimer <= 0) {
          gameStateRef.current.powerMode = false;
          ghostsRef.current.forEach(g => {
            g.vulnerable = false;
            g.color = g.originalColor;
          });
        }
      }
    }

    draw();
    gameLoopRef.current = window.setTimeout(gameLoop, 50);
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

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
            ctx.fillStyle = '#FFFF00';
            ctx.beginPath();
            ctx.arc(px + BLOCK / 2, py + BLOCK / 2, 6, 0, Math.PI * 2);
            ctx.fill();
            break;
        }
      });
    });

    const pac = pacmanRef.current;
    const pacX = pac.x * BLOCK + BLOCK / 2;
    const pacY = pac.y * BLOCK + BLOCK / 2;

    if (!pac.respawning || pac.respawnTimer % 10 < 5) {
      ctx.fillStyle = '#FFFF00';
      ctx.beginPath();
      ctx.arc(pacX, pacY, BLOCK / 2 - 2, 0, Math.PI * 2);
      ctx.fill();

      // mouth wedge
      const mouthAngle = Math.PI / 3;
      const mouthOpen = pac.animFrame < 4;
      const actualMouthAngle = mouthOpen ? mouthAngle : Math.PI / 6;

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
        ctx.arc(pacX, pacY, BLOCK / 2 - 2, startAngle, startAngle + actualMouthAngle, false);
        ctx.closePath();
        ctx.fill();
      }
    }

    ghostsRef.current.forEach(ghost => {
      const gx = ghost.x * BLOCK + BLOCK / 2;
      const gy = ghost.y * BLOCK + BLOCK / 2;

      if (ghost.vulnerable) {
        if (gameStateRef.current.powerTimer < 30 && gameStateRef.current.powerTimer % 8 < 4) {
          ctx.fillStyle = '#FFF';
        } else {
          ctx.fillStyle = '#0000FF';
        }
      } else {
        ctx.fillStyle = ghost.originalColor;
      }

      ctx.beginPath();
      ctx.arc(gx, gy - 2, BLOCK / 2 - 2, Math.PI, 0);
      ctx.fillRect(gx - BLOCK / 2 + 2, gy - 2, BLOCK - 4, BLOCK / 2);
      ctx.fill();

      ctx.fillStyle = '#FFF';
      ctx.fillRect(gx - 6, gy - 8, 4, 4);
      ctx.fillRect(gx + 2, gy - 8, 4, 4);
      ctx.fillStyle = '#000';
      ctx.fillRect(gx - 5, gy - 7, 2, 2);
      ctx.fillRect(gx + 3, gy - 7, 2, 2);
    });
  };

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
          if (!pac.moving && !pac.respawning) pac.moving = true;
          break;
        case 'ArrowDown':
        case 'KeyS':
          e.preventDefault();
          pac.nextDir = 'DOWN';
          if (!pac.moving && !pac.respawning) pac.moving = true;
          break;
        case 'ArrowLeft':
        case 'KeyA':
          e.preventDefault();
          pac.nextDir = 'LEFT';
          if (!pac.moving && !pac.respawning) pac.moving = true;
          break;
        case 'ArrowRight':
        case 'KeyD':
          e.preventDefault();
          pac.nextDir = 'RIGHT';
          if (!pac.moving && !pac.respawning) pac.moving = true;
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGameOver]);

  useEffect(() => {
    if (start && !gameStateRef.current.gameOver) {
      gameStateRef.current = {
        score: 0,
        level: 1,
        lives: 3,
        powerMode: false,
        powerTimer: 0,
        gameOver: false,
        dotsRemaining: MAZE.flat().filter(cell => cell === 1 || cell === 2).length,
        paused: false,
        frameCount: 0
      };

      setScore(0);
      setLevel(1);
      setLives(3);
      setIsGameOver(false);

      mazeRef.current = MAZE.map(row => [...row]);

      pacmanRef.current = {
        x: 9,
        y: 15,
        dir: 'RIGHT',
        nextDir: 'RIGHT',
        moving: true,
        respawning: false,
        respawnTimer: 0,
        animFrame: 0
      };

      ghostsRef.current = [
        { x: 9, y: 9, dir: 'UP',    color: '#FF0000', vulnerable: false, originalColor: '#FF0000' },
        { x: 8, y: 10, dir: 'LEFT',  color: '#FFB8FF', vulnerable: false, originalColor: '#FFB8FF' },
        { x: 9, y: 10, dir: 'UP',    color: '#00FFFF', vulnerable: false, originalColor: '#00FFFF' },
        { x: 10,y: 10, dir: 'RIGHT', color: '#FFB847', vulnerable: false, originalColor: '#FFB847' }
      ];

      gameLoopRef.current = window.setTimeout(gameLoop, 50);
    }
    return () => { if (gameLoopRef.current) clearTimeout(gameLoopRef.current); };
  }, [start]);

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
        version: '1.0'
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

      {/* HUD with orange hearts for lives */}
      <div style={{
        position: 'absolute',
        top: `${-50 * scale}px`,
        left: '0',
        width: `${containerWidth}px`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `0 ${8 * scale}px`,
        color: '#FFFF00',
        fontFamily: 'monospace',
        fontSize: `${16 * scale}px`,
        fontWeight: 'bold',
        pointerEvents: 'none',
        transform: `scale(${scale})`,
        transformOrigin: 'top left'
      }}>
        <div>Score: {score}</div>
        <div>Level: {level}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          Lives: {Array.from({length: lives}, (_, i) => '🧡').join('')}
        </div>
      </div>

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
          zIndex: 9999
        }}>
          <div style={{
            background: '#333',
            padding: '40px',
            borderRadius: '10px',
            textAlign: 'center',
            border: '2px solid #FFD700',
            minWidth: '300px',
            position: 'relative'
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
              <div>Final Score: <span style={{ color: '#FFFF00' }}>{gameStateRef.current.score}</span></div>
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
    </div>
  );
}
