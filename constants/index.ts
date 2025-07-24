export const STORAGE_KEYS = {
  WALLET_ADDRESS: 'arcade_wallet_address',
  IS_AUTHENTICATED: 'arcade_is_authenticated',
  IS_PAID: 'arcade_is_paid',
  SELECTED_GAME: 'arcade_selected_game'
};

export const IRYS_PARAMS = {
  chainId: '0x4F6', // 1270 in hex
  chainName: 'Irys Testnet',
  rpcUrls: ['https://testnet-rpc.irys.xyz/v1/execution-rpc'],
  nativeCurrency: { name: 'Irys', symbol: 'IRYS', decimals: 18 },
  blockExplorerUrls: ['https://testnet-explorer.irys.xyz'],
};

export const GAMES = [
  { id: 'tetris' as const, name: 'TETRIS', icon: '/blocks.png', description: 'Play a classic game of Tetris for 0.01 Irys!', borderColor: '#50FFD6' },
  { id: 'pacman' as const, name: 'PACMAN', icon: '/pacman.png', description: 'Play the classic Pacman for 0.01 Irys!', borderColor: '#FFD700' },
  { id: null, name: 'COMING SOON', icon: '🎲', description: 'More games coming soon!', borderColor: '#FF3D14' }
];