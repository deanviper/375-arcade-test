'use client';

import type { LeaderboardEntry } from '../../types';
import { getResponsiveStyles } from '../../utils/responsive';

interface MobileWarningModalProps {
  leaderboard: LeaderboardEntry[];
}

export default function MobileWarningModal({ leaderboard }: MobileWarningModalProps) {
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
      <div style={{ padding: '100px 20px', textAlign: 'center', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <div style={cardStyle}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>📱</div>
          <h2 style={{ marginBottom: '20px', color: '#FF3D14' }}>Mobile Device Detected</h2>
          <p style={{ marginBottom: '20px', color: '#B9C1C1' }}>For the best gaming experience, please switch to a PC or desktop computer.</p>
          <div style={{ fontSize: '14px', color: '#9CA3AF', lineHeight: 1.6 }}>
            <div style={{ marginBottom: '15px' }}>🏆 <strong>Top Tetris Players:</strong></div>
            {leaderboard.filter(e => e.gameType === 'tetris').slice(0, 3).map((entry, i) => (
              <div key={i} style={{ marginBottom: '8px' }}>
                {i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉'} {entry.displayAddress}: {entry.score?.toLocaleString()}
              </div>
            ))}
            <div style={{ marginTop: '20px', marginBottom: '15px' }}>🍒 <strong>Top Pacman Players:</strong></div>
            {leaderboard.filter(e => e.gameType === 'pacman').slice(0, 3).map((entry, i) => (
              <div key={i} style={{ marginBottom: '8px' }}>
                {i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉'} {entry.displayAddress}: {entry.score?.toLocaleString()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}