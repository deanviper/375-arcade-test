import { useState, useEffect } from 'react';
import type { LeaderboardEntry, PersonalBests } from '../types';

export function useLeaderboard(mounted: boolean, address?: string, isConnected?: boolean, isOfflineMode?: boolean) {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [isLoadingLeaderboard, setIsLoadingLeaderboard] = useState(true);
  const [personalBests, setPersonalBests] = useState<PersonalBests>({});

  useEffect(() => {
    if (!mounted) return;
    const loadLeaderboard = async () => {
      try {
        setIsLoadingLeaderboard(true);
        const response = await fetch('/api/leaderboard');
        const data = await response.json();
        if (data.success) {
          // Combine tetris and pacman arrays to ensure all scores are included
          const allScores = [
            ...(data.tetris || []),
            ...(data.pacman || []),
            ...(data.combined || [])
          ];
          setLeaderboard(allScores);
          
          // Load personal bests if wallet connected
          if (address && isConnected && !isOfflineMode) {
            const tetrisScores = (data.tetris || []).filter((entry: LeaderboardEntry) => 
              entry.walletAddress?.toLowerCase() === address.toLowerCase()
            );
            const pacmanScores = (data.pacman || []).filter((entry: LeaderboardEntry) => 
              entry.walletAddress?.toLowerCase() === address.toLowerCase()
            );
            
            setPersonalBests({
              tetris: tetrisScores.length > 0 ? tetrisScores[0] : undefined,
              pacman: pacmanScores.length > 0 ? pacmanScores[0] : undefined
            });
          } else {
            setPersonalBests({});
          }
        } else {
          setLeaderboard([]);
          setPersonalBests({});
        }
      } catch (e) {
        console.error(e);
        setLeaderboard([]);
        setPersonalBests({});
      } finally {
        setIsLoadingLeaderboard(false);
      }
    };
    loadLeaderboard();
  }, [mounted, address, isConnected, isOfflineMode]);

  const refreshLeaderboard = async () => {
    try {
      setIsLoadingLeaderboard(true);
      const response = await fetch('/api/leaderboard');
      const data = await response.json();
      if (data.success) {
        // Combine all score arrays
        const allScores = [
          ...(data.tetris || []),
          ...(data.pacman || []),
          ...(data.combined || [])
        ];
        setLeaderboard(allScores);
        
        // Update personal bests
        if (address && isConnected && !isOfflineMode) {
          const tetrisScores = (data.tetris || []).filter((entry: LeaderboardEntry) => 
            entry.walletAddress?.toLowerCase() === address.toLowerCase()
          );
          const pacmanScores = (data.pacman || []).filter((entry: LeaderboardEntry) => 
            entry.walletAddress?.toLowerCase() === address.toLowerCase()
          );
          
          setPersonalBests({
            tetris: tetrisScores.length > 0 ? tetrisScores[0] : undefined,
            pacman: pacmanScores.length > 0 ? pacmanScores[0] : undefined
          });
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoadingLeaderboard(false);
    }
  };

  return {
    leaderboard,
    isLoadingLeaderboard,
    personalBests,
    refreshLeaderboard
  };
}