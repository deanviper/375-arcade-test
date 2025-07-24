export interface LeaderboardEntry {
  rank: number;
  displayAddress: string;
  score: number;
  lines?: number;
  level: number;
  timestamp: number;
  txId?: string;
  walletAddress?: string;
  gameType?: string;
}

export type GameType = 'tetris' | 'pacman' | null;

export interface GameInfo {
  id: GameType;
  name: string;
  icon: string;
  description: string;
  borderColor: string;
}

export interface PersonalBests {
  tetris?: LeaderboardEntry;
  pacman?: LeaderboardEntry;
}

export interface ResponsiveStyles {
  fontSize: string;
  padding: string;
  cardPadding: string;
  titleMaxWidth: string;
}