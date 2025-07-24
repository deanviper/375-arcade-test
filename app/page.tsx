'use client';

import { useState, useEffect } from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount, useDisconnect, useSignMessage } from 'wagmi';
import BlurredPreview from '../components/BlurredPreview';
import CanvasTetris from '../components/CanvasTetris';
import CanvasPacman from '../components/CanvasPacman';
import NavigationHeader from '../components/layout/NavigationHeader';
import Footer from '../components/layout/Footer';
import LeaderboardPanel from '../components/ui/LeaderboardPanel';
import GameCarousel from '../components/ui/GameCarousel';
import AuthenticationModal from '../components/modals/AuthenticationModal';
import NetworkSwitchModal from '../components/modals/NetworkSwitchModal';
import MobileWarningModal from '../components/modals/MobileWarningModal';
import GameReadyScreen from '../components/ui/GameReadyScreen';
import { useLeaderboard } from '../hooks/useLeaderboard';
import { usePersistentState } from '../hooks/usePersistentState';
import { handlePayment, authenticateUser } from '../lib/walletUtils';
import { STORAGE_KEYS, IRYS_PARAMS } from '../constants';
import type { GameType } from '../types';

export default function Page() {
  const { open } = useWeb3Modal();
  const { address, isConnected, chainId } = useAccount();
  const { disconnect } = useDisconnect();
  const { signMessageAsync } = useSignMessage();
  
  const [mounted, setMounted] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [selectedGame, setSelectedGame] = useState<GameType>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [isOfflineMode, setIsOfflineMode] = useState(false);

  const { leaderboard, isLoadingLeaderboard, personalBests, refreshLeaderboard } = useLeaderboard(
    mounted, address, isConnected, isOfflineMode
  );

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted || !address || !isConnected) return;
    try {
      const savedAuth = localStorage.getItem(STORAGE_KEYS.IS_AUTHENTICATED) === 'true';
      const savedPaid = localStorage.getItem(STORAGE_KEYS.IS_PAID) === 'true';
      const savedGame = localStorage.getItem(STORAGE_KEYS.SELECTED_GAME) as GameType;
      if (savedAuth) {
        setAuthed('true');
        setIsPaid(savedPaid ? 'true' : 'false');
        if (savedGame) setSelectedGame(savedGame);
      }
    } catch (e) { console.error(e); }
  }, [mounted, address, isConnected, setAuthed, setIsPaid, setSelectedGame]);

  useEffect(() => {
    if (!mounted) return;
    try {
      if (address) localStorage.setItem(STORAGE_KEYS.WALLET_ADDRESS, address);
    } catch (e) { console.error(e); }
  }, [mounted, address]);

  const clearPersistedState = () => {
    if (!mounted) return;
    try { Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key)); }
    catch (e) { console.error(e); }
  };

  useEffect(() => {
    if (!mounted) return;
    if (!isConnected) {
      setAuthed('false');
      setIsPaid('false');
      setSelectedGame(null);
      setGameStarted(false);
      setGameOver(false);
      setIsOfflineMode(false);
      clearPersistedState();
    } else if (isConnected && address) {
      try {
        const savedAuth = localStorage.getItem(STORAGE_KEYS.IS_AUTHENTICATED) === 'true';
        const savedPaid = localStorage.getItem(STORAGE_KEYS.IS_PAID) === 'true';
        const savedGame = localStorage.getItem(STORAGE_KEYS.SELECTED_GAME) as GameType;
        if (savedAuth) {
          setAuthed('true');
          setIsPaid(savedPaid ? 'true' : 'false');
          if (savedGame) setSelectedGame(savedGame);
        }
      } catch (e) { console.error(e); }
    }
  }, [mounted, isConnected, address, setAuthed, setIsPaid, setSelectedGame]);

  useEffect(() => {
    if (!mounted) return;
    const canStartGame = ((isPaid === 'true') || isOfflineMode) && selectedGame && !gameStarted && !gameOver;
    if (!canStartGame) return;
    const handler = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        setGameStarted(true);
        setGameOver(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [mounted, isPaid, isOfflineMode, selectedGame, gameStarted, gameOver]);

  useEffect(() => {
    if (!mounted) return;
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Oswald:wght@400;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, [mounted]);

  if (!mounted) return null;

  const handleGamePayment = async (gameType: GameType) => {
    if (!gameType) return;
    setIsProcessingPayment(true);
    try {
      await handlePayment(gameType);
      setSelectedGame(gameType);
      setIsPaid('true');
      setGameStarted(false);
      setGameOver(false);
    } catch (e: any) {
      if (e.code === 4001) alert('Payment cancelled by user');
      else if (e.message?.includes('insufficient funds')) alert('Insufficient funds. Please add more IRYS to your wallet.');
      else alert('Payment failed: ' + e.message);
    } finally {
      setIsProcessingPayment(false);
    }
  };

  const handleOfflineRestart = () => {
    setGameStarted(false);
    setGameOver(false);
  };

  const handlePublishScore = async () => {
    await refreshLeaderboard();
  };

  const handleHomeClick = () => {
    setGameStarted(false);
    setGameOver(false);
    setIsPaid('false');
    setSelectedGame(null);
    if (isOfflineMode) {
      setAuthed('false');
      setIsOfflineMode(false);
    }
    try {
      localStorage.setItem(STORAGE_KEYS.IS_PAID, 'false');
      localStorage.removeItem(STORAGE_KEYS.SELECTED_GAME);
    } catch (e) { console.error(e); }
  };

  const handleDisconnectWallet = () => {
    disconnect();
    setAuthed('false');
    setIsPaid('false');
    setSelectedGame(null);
    setGameStarted(false);
    setGameOver(false);
    setIsOfflineMode(false);
    clearPersistedState();
  };

  const handleWalletConnection = async () => {
    try { await open(); }
    catch (e: any) {
      console.error(e);
      alert('Failed to open wallet connection modal: ' + e.message);
    }
  };

  const handleAuthentication = async () => {
    try {
      await authenticateUser(signMessageAsync);
      setAuthed('true');
      setIsPaid('false');
      setSelectedGame(null);
      setGameStarted(false);
      setGameOver(false);
    } catch (e: any) {
      if (e.message.includes('User rejected')) alert('Authentication cancelled by user');
      else alert('Authentication failed: ' + e.message);
    }
  };

  const handleOfflinePlay = (gameType: GameType) => {
  console.log('Starting offline play for:', gameType);
  setIsOfflineMode(true);
  setAuthed(true);
  setSelectedGame(gameType);
  setIsPaid(true);
  setGameStarted(false);
  setGameOver(false);
  
  // Force localStorage update
  try {
    localStorage.setItem(STORAGE_KEYS.IS_AUTHENTICATED, 'true');
    localStorage.setItem(STORAGE_KEYS.IS_PAID, 'true');
    if (gameType) {
      localStorage.setItem(STORAGE_KEYS.SELECTED_GAME, gameType);
    }
  } catch (e) { 
    console.error('localStorage error:', e); 
  }
};

  const containerStyle = {
    minHeight: '100vh',
    maxHeight: '100vh',
    background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2a2a2a 100%)',
    color: 'white',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    overflow: 'hidden'
  } as const;

  const mobileStyles = `
    @media (max-width: 480px) {
      .mobile-message {
        display: flex !important;
      }
      .desktop-content {
        display: none !important;
      }
    }
    @media (min-width: 481px) and (max-width: 768px) {
      .tablet-adjustments {
        transform: scale(0.5) !important;
      }
      .carousel-game-center, .carousel-game-side {
        min-width: 200px !important;
        max-width: 220px !important;
        height: 180px !important;
      }
      .arcade-title-fixed {
        max-width: 200px !important;
      }
    }
    @media (max-width: 1440px) {
      .arcade-container {
        padding: 120px 15px 120px !important;
      }
      .arcade-title-fixed {
        max-width: 400px !important;
        margin-bottom: 50px !important;
      }
    }
    @media (max-width: 768px) {
      .arcade-container {
        padding: 100px 10px 100px !important;
      }
      .arcade-title-fixed {
        max-width: 280px !important;
        margin-bottom: 30px !important;
      }
      .carousel-container {
        flex-direction: column !important;
        gap: 20px !important;
      }
      .carousel-game-center, .carousel-game-side {
        min-width: 250px !important;
        max-width: 280px !important;
        height: 350px !important;
      }
    }
  `;

  const isAuthenticated = authed === 'true';
  const hasPaid = isPaid === 'true';

  // Wrong network check
  if (chainId && chainId !== 1270 && !isOfflineMode) {
    return (
      <div style={containerStyle}>
        <NavigationHeader 
          onHomeClick={handleHomeClick}
          onDisconnectWallet={handleDisconnectWallet}
          address={address}
          isConnected={isConnected}
          authed={isAuthenticated}
          isOfflineMode={isOfflineMode}
        />
        <LeaderboardPanel 
          isPaid={hasPaid}
          isOfflineMode={isOfflineMode}
          selectedGame={selectedGame}
          leaderboard={leaderboard}
          isLoadingLeaderboard={isLoadingLeaderboard}
          personalBests={personalBests}
          address={address}
        />
        <NetworkSwitchModal />
        <Footer />
      </div>
    );
  }

  // No wallet connected
  if (!address && !isConnected && !isOfflineMode) {
    return (
      <div style={containerStyle}>
        <style>{mobileStyles}</style>
        <NavigationHeader 
          onHomeClick={handleHomeClick}
          onDisconnectWallet={handleDisconnectWallet}
          address={address}
          isConnected={isConnected}
          authed={isAuthenticated}
          isOfflineMode={isOfflineMode}
        />
        <LeaderboardPanel 
          isPaid={hasPaid}
          isOfflineMode={isOfflineMode}
          selectedGame={selectedGame}
          leaderboard={leaderboard}
          isLoadingLeaderboard={isLoadingLeaderboard}
          personalBests={personalBests}
          address={address}
        />
        
        {/* Mobile Message */}
        <div className="mobile-message" style={{ display: 'none' }}>
          <MobileWarningModal leaderboard={leaderboard} />
          <Footer />
        </div>

        {/* Desktop Content */}
        <div className="desktop-content arcade-container" style={{ padding: '130px 20px 120px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', position: 'relative' }}>
          <div style={{ width: '100%', maxWidth: '1200px', textAlign: 'center', marginTop: '-20px' }}>
            <div style={{ marginBottom: '40px', position: 'relative', zIndex: 10 }}>
              <img
                src="/arcade-title.png"
                alt="375 Arcade - Built on Irys"
                className="arcade-title-fixed"
                style={{
                  maxWidth: '400px',
                  width: '100%',
                  height: 'auto',
                  filter: 'drop-shadow(0 8px 16px rgba(255, 61, 20, 0.3))'
                }}
              />
            </div>

            <GameCarousel 
              onGameSelect={handleGamePayment}
              onWalletConnection={handleWalletConnection}
              onOfflinePlay={handleOfflinePlay}
              isProcessingPayment={isProcessingPayment}
              showPaymentButtons={false}
            />
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  // Authentication required
  if (!isAuthenticated && address && isConnected) {
    return (
      <div style={containerStyle}>
        <NavigationHeader 
          onHomeClick={handleHomeClick}
          onDisconnectWallet={handleDisconnectWallet}
          address={address}
          isConnected={isConnected}
          authed={isAuthenticated}
          isOfflineMode={isOfflineMode}
        />
        <LeaderboardPanel 
          isPaid={hasPaid}
          isOfflineMode={isOfflineMode}
          selectedGame={selectedGame}
          leaderboard={leaderboard}
          isLoadingLeaderboard={isLoadingLeaderboard}
          personalBests={personalBests}
          address={address}
        />
        <AuthenticationModal 
          address={address}
          onAuthenticate={handleAuthentication}
        />
        <Footer />
      </div>
    );
  }

  // Game selection (authenticated, not paid)
  if (address && isConnected && isAuthenticated && !hasPaid && !gameStarted && !gameOver) {
    return (
      <div style={containerStyle}>
        <NavigationHeader 
          onHomeClick={handleHomeClick}
          onDisconnectWallet={handleDisconnectWallet}
          address={address}
          isConnected={isConnected}
          authed={isAuthenticated}
          isOfflineMode={isOfflineMode}
        />
        <LeaderboardPanel 
          isPaid={hasPaid}
          isOfflineMode={isOfflineMode}
          selectedGame={selectedGame}
          leaderboard={leaderboard}
          isLoadingLeaderboard={isLoadingLeaderboard}
          personalBests={personalBests}
          address={address}
        />
        <div style={{ padding: '70px 20px 80px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', position: 'relative' }}>
          <div style={{ width: '100%', maxWidth: '1200px', textAlign: 'center' }}>
            <div style={{ marginBottom: '30px', position: 'relative', zIndex: 10 }}>
              <img
                src="/arcade-title.png"
                alt="375 Arcade - Built on Irys"
                style={{
                  maxWidth: '400px',
                  width: '100%',
                  height: 'auto',
                  filter: 'drop-shadow(0 8px 16px rgba(255, 61, 20, 0.3))'
                }}
              />
            </div>

            <GameCarousel 
              onGameSelect={handleGamePayment}
              onWalletConnection={handleWalletConnection}
              onOfflinePlay={handleOfflinePlay}
              isProcessingPayment={isProcessingPayment}
              showPaymentButtons={true}
            />
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  // Game ready screen
  if ((isOfflineMode || hasPaid) && selectedGame && !gameStarted && !gameOver) {
    return (
      <div style={containerStyle}>
        <div style={{
          position: 'fixed',
          top: '140px',
          left: '20px',
          zIndex: 1000
        }}>
          <img
            src="/arcade-title.png"
            alt="375 Arcade - Built on Irys"
            style={{
              maxWidth: '500px',
              width: '100%',
              height: 'auto',
              filter: 'drop-shadow(0 4px 8px rgba(255, 61, 20, 0.3))'
            }}
          />
        </div>

        <NavigationHeader 
          onHomeClick={handleHomeClick}
          onDisconnectWallet={handleDisconnectWallet}
          address={address}
          isConnected={isConnected}
          authed={isAuthenticated}
          isOfflineMode={isOfflineMode}
        />
        <LeaderboardPanel 
          isPaid={hasPaid}
          isOfflineMode={isOfflineMode}
          selectedGame={selectedGame}
          leaderboard={leaderboard}
          isLoadingLeaderboard={isLoadingLeaderboard}
          personalBests={personalBests}
          address={address}
        />
        <GameReadyScreen 
          selectedGame={selectedGame}
          address={address}
          isOfflineMode={isOfflineMode}
        />
        <Footer />
      </div>
    );
  }

  // Game playing
  if (gameStarted || gameOver) {
    return (
      <div style={containerStyle}>
        <div style={{
          position: 'fixed',
          top: '140px',
          left: '20px',
          zIndex: 1000
        }}>
          <img
            src="/arcade-title.png"
            alt="375 Arcade - Built on Irys"
            style={{
              maxWidth: '500px',
              width: '100%',
              height: 'auto',
              filter: 'drop-shadow(0 4px 8px rgba(255, 61, 20, 0.3))'
            }}
          />
        </div>

        <NavigationHeader 
          onHomeClick={handleHomeClick}
          onDisconnectWallet={handleDisconnectWallet}
          address={address}
          isConnected={isConnected}
          authed={isAuthenticated}
          isOfflineMode={isOfflineMode}
        />
        <LeaderboardPanel 
          isPaid={hasPaid}
          isOfflineMode={isOfflineMode}
          selectedGame={selectedGame}
          leaderboard={leaderboard}
          isLoadingLeaderboard={isLoadingLeaderboard}
          personalBests={personalBests}
          address={address}
        />
        <div style={{
          padding: '80px 20px 20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
        }}>
          {selectedGame === 'tetris' ? (
  <CanvasTetris
    start={gameStarted}
    onGameOver={(score, lines) => {
      setGameOver(true);
      setGameStarted(false);
      // Clear payment state after game over (for paid games only)
      if (!isOfflineMode) {
        setTimeout(() => {
          setIsPaid(false);
          setSelectedGame(null);
          try {
            localStorage.setItem(STORAGE_KEYS.IS_PAID, 'false');
            localStorage.removeItem(STORAGE_KEYS.SELECTED_GAME);
          } catch (e) { console.error(e); }
        }, 5000); // 5 second delay to allow score publishing
      }
    }}
    onPlayAgain={isOfflineMode ? handleOfflineRestart : () => handleGamePayment('tetris')}
    onPublishScore={handlePublishScore}
    playerAddress={isOfflineMode ? undefined : address}
  />
) : selectedGame === 'pacman' ? (
  <CanvasPacman
    start={gameStarted}
    onGameOver={(score, level) => {
      setGameOver(true);
      setGameStarted(false);
      // Clear payment state after game over (for paid games only)
      if (!isOfflineMode) {
        setTimeout(() => {
          setIsPaid(false);
          setSelectedGame(null);
          try {
            localStorage.setItem(STORAGE_KEYS.IS_PAID, 'false');
            localStorage.removeItem(STORAGE_KEYS.SELECTED_GAME);
          } catch (e) { console.error(e); }
        }, 5000); // 5 second delay to allow score publishing
      }
    }}
    onPlayAgain={isOfflineMode ? handleOfflineRestart : () => handleGamePayment('pacman')}
    onPublishScore={handlePublishScore}
    playerAddress={isOfflineMode ? undefined : address}
  />
) : null}
        </div>
        <Footer />
      </div>
    );
  }

  // Loading state
  return (
    <div style={containerStyle}>
      <NavigationHeader 
        onHomeClick={handleHomeClick}
        onDisconnectWallet={handleDisconnectWallet}
        address={address}
        isConnected={isConnected}
        authed={isAuthenticated}
        isOfflineMode={isOfflineMode}
      />
      <LeaderboardPanel 
        isPaid={hasPaid}
        isOfflineMode={isOfflineMode}
        selectedGame={selectedGame}
        leaderboard={leaderboard}
        isLoadingLeaderboard={isLoadingLeaderboard}
        personalBests={personalBests}
        address={address}
      />
      <div style={{ padding: '100px 20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(8, 8, 12, 0.9) 0%, rgba(25, 25, 35, 0.9) 100%)',
          border: '2px solid rgba(80, 255, 214, 0.3)',
          borderRadius: '20px',
          padding: '40px',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 25px 50px -12px rgba(80, 255, 214, 0.2)',
          textAlign: 'center' as const,
          transition: 'all 0.3s ease'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>🔄</div>
          <h2 style={{ marginBottom: '20px' }}>Loading...</h2>
          <p style={{ color: '#B9C1C1' }}>Initializing 375 Arcade...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}