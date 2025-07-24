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
  const [viewportDimensions, setViewportDimensions] = useState({ width: 1920, height: 1080 });

  const { leaderboard, isLoadingLeaderboard, personalBests, refreshLeaderboard } = useLeaderboard(
    mounted, address, isConnected, isOfflineMode
  );

  useEffect(() => { setMounted(true); }, []);

  // Track viewport dimensions
  useEffect(() => {
    if (!mounted) return;
    
    const updateDimensions = () => {
      setViewportDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [mounted]);

  useEffect(() => {
    if (!mounted || !address || !isConnected) return;
    try {
      const savedAuth = localStorage.getItem(STORAGE_KEYS.IS_AUTHENTICATED) === 'true';
      const savedPaid = localStorage.getItem(STORAGE_KEYS.IS_PAID) === 'true';
      const savedGame = localStorage.getItem(STORAGE_KEYS.SELECTED_GAME) as GameType;
      if (savedAuth) {
        setAuthed(true);
        setIsPaid(savedPaid);
        if (savedGame) setSelectedGame(savedGame);
      }
    } catch (e) { console.error(e); }
  }, [mounted, address, isConnected]);

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
      setAuthed(false);
      setIsPaid(false);
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
          setAuthed(true);
          setIsPaid(savedPaid);
          if (savedGame) setSelectedGame(savedGame);
        }
      } catch (e) { console.error(e); }
    }
  }, [mounted, isConnected, address]);

  useEffect(() => {
    if (!mounted) return;
    const canStartGame = (isPaid || isOfflineMode) && selectedGame && !gameStarted && !gameOver;
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

  // Calculate responsive scaling
  const getResponsiveConfig = () => {
    const { width, height } = viewportDimensions;
    
    // Define breakpoints and scaling
    let headerHeight = 70;
    let footerHeight = 60;
    let availableHeight = height - headerHeight - footerHeight;
    let availableWidth = width;
    
    // Scale everything based on available space
    let titleScale = 0.7; // Base scale for landing pages
    let titleScaleGameplay = 0.4; // Smaller scale for gameplay
    let carouselScale = 1;
    let carouselHeight = 220;
    let carouselWidth = 600;
    let gameScale = 1;
    
    // Very small screens (tablets in portrait)
    if (width < 768) {
      titleScale = 0.5;
      titleScaleGameplay = 0.3;
      carouselScale = 0.8;
      carouselHeight = 180;
      carouselWidth = 320;
      gameScale = 0.8;
      headerHeight = 60;
      footerHeight = 50;
    }
    // Medium screens (tablets in landscape, small laptops)
    else if (width < 1024) {
      titleScale = 0.6;
      titleScaleGameplay = 0.35;
      carouselScale = 0.9;
      carouselHeight = 200;
      carouselWidth = 500;
      gameScale = 0.9;
    }
    // Small laptops
    else if (width < 1366) {
      titleScale = 0.65;
      titleScaleGameplay = 0.4;
      carouselScale = 0.95;
      carouselHeight = 210;
      carouselWidth = 550;
      gameScale = 0.95;
    }
    // Large screens
    else if (width >= 1920) {
      titleScale = 0.95; // Increased by 20% from 0.8
      titleScaleGameplay = 0.5;
      carouselScale = 1.1;
      carouselHeight = 240;
      carouselWidth = 650;
      gameScale = 1.1;
    }
    
    // Height-based adjustments
    if (height < 700) {
      titleScale *= 0.8;
      titleScaleGameplay *= 0.8;
      carouselScale *= 0.8;
      carouselHeight *= 0.8;
      gameScale *= 0.8;
    } else if (height < 800) {
      titleScale *= 0.9;
      titleScaleGameplay *= 0.9;
      carouselScale *= 0.9;
      carouselHeight *= 0.9;
      gameScale *= 0.9;
    }
    
    return {
      headerHeight,
      footerHeight,
      availableHeight: height - headerHeight - footerHeight,
      availableWidth,
      titleScale,
      titleScaleGameplay,
      carouselScale,
      carouselHeight,
      carouselWidth,
      gameScale,
      padding: Math.max(10, width * 0.02)
    };
  };

  const responsiveConfig = getResponsiveConfig();

  const handleGamePayment = async (gameType: GameType) => {
    if (!gameType) return;
    setIsProcessingPayment(true);
    try {
      await handlePayment(gameType);
      setSelectedGame(gameType);
      setIsPaid(true);
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
    setIsPaid(false);
    setSelectedGame(null);
    if (isOfflineMode) {
      setAuthed(false);
      setIsOfflineMode(false);
    }
    try {
      localStorage.setItem(STORAGE_KEYS.IS_PAID, 'false');
      localStorage.removeItem(STORAGE_KEYS.SELECTED_GAME);
    } catch (e) { console.error(e); }
  };

  const handleDisconnectWallet = () => {
    disconnect();
    setAuthed(false);
    setIsPaid(false);
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
      setAuthed(true);
      setIsPaid(false);
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
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2a2a2a 100%)',
    color: 'white',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    overflow: 'hidden',
    position: 'fixed' as const,
    top: 0,
    left: 0
  };

  const mobileStyles = `
    /* Mobile Detection - Keep existing mobile logic */
    @media (max-width: 480px) {
      .mobile-message {
        display: flex !important;
      }
      .desktop-content {
        display: none !important;
      }
    }
    
    /* Remove all scrollbars */
    * {
      box-sizing: border-box;
    }
    
    html, body {
      margin: 0;
      padding: 0;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }
  `;

  const isAuthenticated = authed;
  const hasPaid = isPaid;

  // Wrong network check
  if (chainId && chainId !== 1270 && !isOfflineMode) {
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
        <div className="desktop-content" style={{
          position: 'absolute',
          top: `${responsiveConfig.headerHeight}px`,
          left: 0,
          right: 0,
          bottom: `${responsiveConfig.footerHeight}px`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: `${responsiveConfig.padding}px`,
          overflow: 'hidden'
        }}>
          <div style={{
            transform: `scale(${responsiveConfig.titleScale * 1.4})`, // Increased by 20% from previous 1.5x
            marginBottom: `${30 * responsiveConfig.titleScale}px`,
            transformOrigin: 'center center'
          }}>
            <img
              src="/arcade-title.png"
              alt="375 Arcade - Built on Irys"
              style={{
                maxWidth: '350px',
                width: '100%',
                height: 'auto',
                filter: 'drop-shadow(0 8px 16px rgba(255, 61, 20, 0.3))'
              }}
            />
          </div>
          
          <div style={{
            transform: `scale(${responsiveConfig.carouselScale})`,
            transformOrigin: 'center center'
          }}>
            <GameCarousel 
              onGameSelect={handleGamePayment}
              onWalletConnection={handleWalletConnection}
              onOfflinePlay={handleOfflinePlay}
              isProcessingPayment={isProcessingPayment}
              showPaymentButtons={false}
            />
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  // Authentication required
  if (!isAuthenticated && address && isConnected) {
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
        
        <div style={{
          position: 'absolute',
          top: `${responsiveConfig.headerHeight}px`,
          left: 0,
          right: 0,
          bottom: `${responsiveConfig.footerHeight}px`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: `${responsiveConfig.padding}px`,
          overflow: 'hidden'
        }}>
          <div style={{
            transform: `scale(${responsiveConfig.titleScale * 1.4})`, // Increased by 20% from previous 1.5x
            marginBottom: `${30 * responsiveConfig.titleScale}px`,
            transformOrigin: 'center center'
          }}>
            <img
              src="/arcade-title.png"
              alt="375 Arcade - Built on Irys"
              style={{
                maxWidth: '350px',
                width: '100%',
                height: 'auto',
                filter: 'drop-shadow(0 8px 16px rgba(255, 61, 20, 0.3))'
              }}
            />
          </div>
          
          <div style={{
            transform: `scale(${responsiveConfig.carouselScale})`,
            transformOrigin: 'center center'
          }}>
            <GameCarousel 
              onGameSelect={handleGamePayment}
              onWalletConnection={handleWalletConnection}
              onOfflinePlay={handleOfflinePlay}
              isProcessingPayment={isProcessingPayment}
              showPaymentButtons={true}
            />
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  // Game ready screen
  if ((isOfflineMode || hasPaid) && selectedGame && !gameStarted && !gameOver) {
    return (
      <div style={containerStyle}>
        <style>{mobileStyles}</style>
        
        {/* Arcade title positioned at left-center, large */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '40px',
          transform: 'translateY(-50%)',
          zIndex: 1000
        }}>
          <div style={{
            transform: `scale(${responsiveConfig.titleScaleGameplay * 2.4})`, // Increased by 20% from 2.0 to 2.4
            transformOrigin: 'left center'
          }}>
            <img
              src="/arcade-title.png"
              alt="375 Arcade - Built on Irys"
              style={{
                maxWidth: '300px',
                width: '100%',
                height: 'auto',
                filter: 'drop-shadow(0 4px 8px rgba(255, 61, 20, 0.3))'
              }}
            />
          </div>
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
        <style>{mobileStyles}</style>
        
        {/* Arcade title positioned at left-center, large - same position as ready screen */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '40px',
          transform: 'translateY(-50%)',
          zIndex: 1000
        }}>
          <div style={{
            transform: `scale(${responsiveConfig.titleScaleGameplay * 2.4})`, // Increased by 20% from 2.0 to 2.4
            transformOrigin: 'left center'
          }}>
            <img
              src="/arcade-title.png"
              alt="375 Arcade - Built on Irys"
              style={{
                maxWidth: '300px',
                width: '100%',
                height: 'auto',
                filter: 'drop-shadow(0 4px 8px rgba(255, 61, 20, 0.3))'
              }}
            />
          </div>
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
          position: 'absolute',
          top: `${responsiveConfig.headerHeight + 60}px`,
          left: 0,
          right: 0,
          bottom: `${responsiveConfig.footerHeight}px`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden'
        }}>
          {selectedGame === 'tetris' ? (
            <div style={{
              transform: `scale(${responsiveConfig.gameScale})`,
              transformOrigin: 'center center'
            }}>
              <CanvasTetris
                start={gameStarted}
                onGameOver={(score, lines) => {
                  setGameOver(true);
                  setGameStarted(false);
                }}
                onPlayAgain={isOfflineMode ? handleOfflineRestart : () => handleGamePayment('tetris')}
                onPublishScore={handlePublishScore}
                playerAddress={isOfflineMode ? undefined : address}
              />
            </div>
          ) : selectedGame === 'pacman' ? (
            <div style={{
              transform: `scale(${responsiveConfig.gameScale})`,
              transformOrigin: 'center center'
            }}>
              <CanvasPacman
                start={gameStarted}
                onGameOver={(score, level) => {
                  setGameOver(true);
                  setGameStarted(false);
                }}
                onPlayAgain={isOfflineMode ? handleOfflineRestart : () => handleGamePayment('pacman')}
                onPublishScore={handlePublishScore}
                playerAddress={isOfflineMode ? undefined : address}
              />
            </div>
          ) : null}
        </div>
        <Footer />
      </div>
    );
  }

  // Loading state
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
      
      <div style={{
        position: 'absolute',
        top: `${responsiveConfig.headerHeight}px`,
        left: 0,
        right: 0,
        bottom: `${responsiveConfig.footerHeight}px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(8, 8, 12, 0.9) 0%, rgba(25, 25, 35, 0.9) 100%)',
          border: '2px solid rgba(80, 255, 214, 0.3)',
          borderRadius: '20px',
          padding: `${40 * responsiveConfig.carouselScale}px`,
          backdropFilter: 'blur(12px)',
          boxShadow: '0 25px 50px -12px rgba(80, 255, 214, 0.2)',
          textAlign: 'center' as const,
          transition: 'all 0.3s ease',
          transform: `scale(${responsiveConfig.carouselScale})`
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