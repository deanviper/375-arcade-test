'use client';

import type { GameType } from '../../types';
import { getResponsiveStyles } from '../../utils/responsive';

interface GameReadyScreenProps {
  selectedGame: GameType;
  address?: string;
  isOfflineMode: boolean;
}

export default function GameReadyScreen({ selectedGame, address, isOfflineMode }: GameReadyScreenProps) {
  const responsiveStyles = getResponsiveStyles();

  const containerStyle = {
    minHeight: '100vh',
    maxHeight: '100vh',
    background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2a2a2a 100%)',
    color: 'white',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    overflow: 'hidden'
  } as const;

  const cardStyle = {
    background: 'linear-gradient(135deg, rgba(8, 8, 12, 0.9) 0%, rgba(25, 25, 35, 0.9) 100%)',
    border: '2px solid rgba(80, 255, 214, 0.3)',
    borderRadius: '20px',
    padding: responsiveStyles.cardPadding,
    backdropFilter: 'blur(12px)',
    boxShadow: '0 25px 50px -12px rgba(80, 255, 214, 0.2)',
    textAlign: 'center' as const,
    transition: 'all 0.3s ease'
  };

  return (
    <div style={containerStyle}>
      <div style={{ padding: '100px 20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={cardStyle}>
          <div style={{
            width: '64px',
            height: '64px',
            backgroundImage: selectedGame === 'tetris' ? 'url(/blocks.png)' : 'url(/pacman.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            marginBottom: '20px',
            margin: '0 auto 20px auto'
          }}></div>
          <h2 style={{ marginBottom: '20px', color: '#10b981' }}>
            ✅ Ready to Play {selectedGame === 'tetris' ? 'Tetris' : 'Pacman'}!
          </h2>
          <p style={{ marginBottom: '30px', color: '#B9C1C1', fontSize: '18px' }}>
            Press <kbd style={{
              background: 'rgba(255, 61, 20, 0.2)',
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid rgba(255, 61, 20, 0.3)',
              color: '#FF3D14',
              fontFamily: 'Monaco, monospace'
            }}>SPACEBAR</kbd> to start
          </p>
          <div style={{ fontSize: '14px', color: '#B9C1C1' }}>
            {selectedGame === 'tetris' ? (
              <>
                <p>🎯 Clear lines to score points</p>
                <p>⚡ Speed increases every 4 lines</p>
              </>
            ) : (
              <>
                <p>🍒 Eat all dots to advance levels</p>
                <p>👻 Avoid ghosts or eat power pellets</p>
                <p>🎮 Use arrow keys or WASD to move</p>
              </>
            )}
            {address && !isOfflineMode && (
              <p>🏆 Publish scores to blockchain leaderboard!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}