'use client';

import type { LeaderboardEntry, GameType, PersonalBests } from '../../types';
import { getLeaderboardScale } from '../../utils/responsive';

interface LeaderboardPanelProps {
  isPaid: boolean;
  isOfflineMode: boolean;
  selectedGame: GameType;
  leaderboard: LeaderboardEntry[];
  isLoadingLeaderboard: boolean;
  personalBests: PersonalBests;
  address?: string;
}

export default function LeaderboardPanel({
  isPaid,
  isOfflineMode,
  selectedGame,
  leaderboard,
  isLoadingLeaderboard,
  personalBests,
  address
}: LeaderboardPanelProps) {
  if (!isPaid && !isOfflineMode) return null;

  // Fix: Use specific game leaderboards instead of combined for filtering
  const gameSpecificLeaderboard = selectedGame === 'tetris' ? 
    leaderboard.filter(e => e.gameType === 'tetris') :
    selectedGame === 'pacman' ?
    leaderboard.filter(e => e.gameType === 'pacman') :
    leaderboard;

  const uniqueLeaderboard = gameSpecificLeaderboard.reduce((acc: LeaderboardEntry[], cur) => {
    const existingIndex = acc.findIndex(entry =>
      entry.displayAddress === cur.displayAddress ||
      (entry as any).walletAddress === (cur as any).walletAddress
    );
    if (existingIndex === -1) acc.push(cur);
    else if (cur.score > acc[existingIndex].score) acc[existingIndex] = cur;
    return acc;
  }, []).sort((a, b) => b.score - a.score);

  const { width: leaderboardWidth, fontSize: leaderboardFontSize } = getLeaderboardScale();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const isTablet = typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth <= 1024;

  const personalBest = selectedGame === 'tetris' ? personalBests.tetris : 
                     selectedGame === 'pacman' ? personalBests.pacman : undefined;

  // Calculate responsive padding and spacing
  const containerPadding = isMobile ? '12px' : isTablet ? '14px' : '16px';
  const headerPadding = isMobile ? '15px' : '20px';
  const itemPadding = isMobile ? '8px' : '12px';
  const itemGap = isMobile ? '8px' : '12px';

  return (
    <div style={{
      position: 'fixed',
      top: isMobile ? '60px' : '70px',
      right: isMobile ? '10px' : '20px',
      width: leaderboardWidth,
      background: 'linear-gradient(135deg, rgba(8, 8, 12, 0.95) 0%, rgba(15, 15, 20, 0.95) 100%)',
      border: '1px solid rgba(255, 61, 20, 0.3)',
      borderRadius: '16px',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 25px 50px -12px rgba(255, 61, 20, 0.4)',
      zIndex: 1000,
      overflow: 'hidden',
      maxHeight: isMobile ? 'calc(100vh - 120px)' : 'calc(100vh - 100px)'
    }}>
      <div style={{
        position: 'relative',
        padding: headerPadding,
        background: 'linear-gradient(135deg, rgba(15, 15, 20, 0.8) 0%, rgba(25, 25, 35, 0.8) 100%)',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255, 61, 20, 0.2)'
      }}>
        <h2 style={{
          margin: 0,
          color: '#E5E7EB',
          fontSize: leaderboardFontSize,
          fontWeight: '600',
          letterSpacing: '0.5px'
        }}>
          🏆 {selectedGame === 'tetris' ? 'TETRIS' : selectedGame === 'pacman' ? 'PACMAN' : 'ARCADE'} LEADERBOARD
        </h2>
      </div>

      {/* Personal Best Section */}
      {selectedGame && (
        <div style={{
          padding: containerPadding,
          borderBottom: '1px solid rgba(255, 61, 20, 0.1)',
          background: 'rgba(80, 255, 214, 0.02)'
        }}>
          <div style={{
            fontSize: `calc(${leaderboardFontSize} - 2px)`,
            fontWeight: '600',
            color: '#50FFD6',
            marginBottom: '8px',
            textAlign: 'center'
          }}>
            👤 PERSONAL BEST
          </div>
          {address && !isOfflineMode ? (
            personalBest ? (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: itemGap,
                padding: itemPadding,
                background: 'rgba(80, 255, 214, 0.1)',
                border: '1px solid rgba(80, 255, 214, 0.3)',
                borderRadius: '8px'
              }}>
                <div style={{
                  fontSize: leaderboardFontSize,
                  fontWeight: '600',
                  minWidth: '28px',
                  textAlign: 'center',
                  color: '#50FFD6'
                }}>
                  🌟
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      fontSize: leaderboardFontSize,
                      fontWeight: '600',
                      color: '#50FFD6'
                    }}>
                      {personalBest.score?.toLocaleString() || '0'}
                    </span>
                    <span style={{
                      fontSize: `calc(${leaderboardFontSize} - 4px)`,
                      padding: '2px 4px',
                      background: selectedGame === 'pacman' ? 'rgba(255, 215, 0, 0.1)' : 'rgba(80, 255, 214, 0.1)',
                      border: `1px solid ${selectedGame === 'pacman' ? 'rgba(255, 215, 0, 0.2)' : 'rgba(80, 255, 214, 0.2)'}`,
                      borderRadius: '4px',
                      color: selectedGame === 'pacman' ? '#FFD700' : '#50FFD6'
                    }}>
                      {selectedGame === 'pacman' ? `Lv.${personalBest.level}` : `L.${personalBest.lines}`}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{
                textAlign: 'center',
                color: '#6B7280',
                fontSize: `calc(${leaderboardFontSize} - 2px)`,
                padding: itemPadding,
                background: 'rgba(107, 114, 128, 0.1)',
                borderRadius: '8px'
              }}>
                No score recorded yet
              </div>
            )
          ) : (
            <div style={{
              padding: itemPadding,
              background: 'rgba(107, 114, 128, 0.1)',
              border: '1px solid rgba(107, 114, 128, 0.2)',
              borderRadius: '8px',
              filter: 'blur(4px)',
              textAlign: 'center',
              color: '#6B7280',
              fontSize: `calc(${leaderboardFontSize} - 2px)`
            }}>
              Connect wallet to view
            </div>
          )}
        </div>
      )}

      <div style={{ 
        padding: containerPadding, 
        maxHeight: isMobile ? '200px' : isTablet ? '220px' : '250px', 
        overflowY: 'auto' 
      }}>
        {isLoadingLeaderboard ? (
          <div style={{ 
            textAlign: 'center', 
            color: '#6B7280', 
            padding: '20px', 
            fontSize: leaderboardFontSize 
          }}>
            Loading...
          </div>
        ) : uniqueLeaderboard.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#6B7280', padding: '20px' }}>
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>🎯</div>
            <div style={{ fontSize: leaderboardFontSize }}>No scores yet!</div>
            <div style={{ fontSize: `calc(${leaderboardFontSize} - 2px)`, marginTop: '5px' }}>
              Be the first to publish to blockchain!
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {uniqueLeaderboard.slice(0, 10).map((entry, index) => (
              <div key={`entry-${index}`} style={{
                display: 'flex',
                alignItems: 'center',
                gap: itemGap,
                padding: itemPadding,
                background: 'rgba(15, 15, 20, 0.4)',
                border: '1px solid rgba(55, 65, 81, 0.3)',
                borderRadius: '8px'
              }}>
                <div style={{
                  fontSize: leaderboardFontSize,
                  fontWeight: '600',
                  minWidth: '28px',
                  textAlign: 'center',
                  color: '#E5E7EB'
                }}>
                  {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: 'Monaco, Menlo, monospace',
                    fontSize: `calc(${leaderboardFontSize} - 3px)`,
                    color: '#9CA3AF',
                    marginBottom: '2px'
                  }}>
                    {entry.displayAddress}
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{
                      fontSize: leaderboardFontSize,
                      fontWeight: '600',
                      color: '#50FFD6'
                    }}>
                      {entry.score?.toLocaleString() || '0'}
                    </span>
                    <span style={{
                      fontSize: `calc(${leaderboardFontSize} - 4px)`,
                      padding: '2px 4px',
                      background: selectedGame === 'pacman' ? 'rgba(255, 215, 0, 0.1)' : 'rgba(80, 255, 214, 0.1)',
                      border: `1px solid ${selectedGame === 'pacman' ? 'rgba(255, 215, 0, 0.2)' : 'rgba(80, 255, 214, 0.2)'}`,
                      borderRadius: '4px',
                      color: selectedGame === 'pacman' ? '#FFD700' : '#50FFD6'
                    }}>
                      {selectedGame === 'pacman' ? '🍒 PAC' : '🧱 TET'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}