'use client';

import { useState } from 'react';
import type { GameType } from '../../types';
import { GAMES } from '../../constants';
import { getResponsiveStyles } from '../../utils/responsive';

interface GameCarouselProps {
  onGameSelect: (gameType: GameType) => void;
  onWalletConnection: () => void;
  onOfflinePlay: (gameType: GameType) => void;
  isProcessingPayment: boolean;
  showPaymentButtons?: boolean;
}

export default function GameCarousel({
  onGameSelect,
  onWalletConnection,
  onOfflinePlay,
  isProcessingPayment,
  showPaymentButtons = false
}: GameCarouselProps) {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const responsiveStyles = getResponsiveStyles();

  const currentGame = GAMES[carouselIndex];
  const leftGame = GAMES[(carouselIndex - 1 + GAMES.length) % GAMES.length];
  const rightGame = GAMES[(carouselIndex + 1) % GAMES.length];

  const handleCarouselNext = () => setCarouselIndex(prev => (prev + 1) % GAMES.length);
  const handleCarouselPrev = () => setCarouselIndex(prev => (prev - 1 + GAMES.length) % GAMES.length);

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

  const buttonStyle = {
    background: 'linear-gradient(135deg, #FF3D14 0%, #50FFD6 100%)',
   border: 'none',
   borderRadius: '12px',
   padding: '16px 32px',
   color: 'white',
   fontSize: responsiveStyles.fontSize,
   fontWeight: '600',
   cursor: 'pointer',
   transition: 'all 0.2s',
   boxShadow: '0 4px 15px rgba(80, 255, 214, 0.4)',
   minWidth: '200px'
 };

 return (
   <>
     <style jsx>{`
       .carousel-transition { transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important; }
       .carousel-game-center, .carousel-game-side {
         display: flex; flex-direction: column; align-items: center; justify-content: center; height: 450px !important;
       }
       @media (max-width: 768px) {
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
       @media (min-width: 481px) and (max-width: 768px) {
         .tablet-adjustments {
           transform: scale(0.5) !important;
         }
         .carousel-game-center, .carousel-game-side {
           min-width: 200px !important;
           max-width: 220px !important;
           height: 180px !important;
         }
       }
       @keyframes pulse {
         0%, 100% { transform: scale(1.05); }
         50% { transform: scale(1.1); }
       }
     `}</style>

     <div className="carousel-container tablet-adjustments" style={{
       display: 'flex',
       gap: '24px',
       alignItems: 'center',
       justifyContent: 'center',
       position: 'relative',
       minHeight: '400px'
     }}>
       <button
         onClick={handleCarouselPrev}
         style={{
           position: 'absolute',
           left: '50px',
           zIndex: 10,
           background: 'rgba(255, 61, 20, 0.2)',
           border: '2px solid rgba(255, 61, 20, 0.5)',
           borderRadius: '50%',
           width: '60px',
           height: '60px',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           cursor: 'pointer',
           fontSize: '24px',
           color: '#FF3D14',
           transition: 'all 0.3s ease'
         }}
       >
         ←
       </button>

       <div className="carousel-game-side carousel-transition" style={{
         ...cardStyle,
         minWidth: '280px',
         maxWidth: '300px',
         height: showPaymentButtons ? '450px' : '360px',
         opacity: 0.4,
         filter: 'blur(2px)',
         border: '2px solid rgba(255, 61, 20, 0.4)',
         boxShadow: '0 25px 50px -12px rgba(255, 61, 20, 0.3)',
         transform: 'scale(0.8)',
         pointerEvents: 'none'
       }}>
         <div style={{
           width: '80px',
           height: '80px',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           marginBottom: '20px',
           margin: '0 auto 20px auto'
         }}>
           {leftGame.icon.startsWith('/') ? (
             <img src={leftGame.icon} alt={leftGame.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
           ) : (
             <span style={{ fontSize: '76px', lineHeight: 1 }}>{leftGame.icon}</span>
           )}
         </div>
         <h3 style={{ color: '#9CA3AF', margin: 0, fontSize: '28px', textAlign: 'center' }}>{leftGame.name}</h3>
       </div>

       <div className="carousel-game-center carousel-transition" style={{
         ...cardStyle,
         minWidth: '400px',
         maxWidth: '440px',
         height: showPaymentButtons ? '450px' : '360px',
         border: `3px solid ${currentGame.borderColor}`,
         boxShadow: `0 25px 50px -12px ${currentGame.borderColor}40`,
         transform: 'scale(1.05)'
       }}>
         <div style={{
           width: showPaymentButtons ? '100px' : '120px',
           height: showPaymentButtons ? '100px' : '120px',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           marginBottom: showPaymentButtons ? '25px' : '16px',
           margin: `0 auto ${showPaymentButtons ? '25px' : '16px'} auto`
         }}>
           {currentGame.icon.startsWith('/') ? (
             <img src={currentGame.icon} alt={currentGame.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
           ) : (
             <span style={{ fontSize: showPaymentButtons ? '96px' : '110px', lineHeight: 1 }}>{currentGame.icon}</span>
           )}
         </div>
         <h2 style={{
           fontSize: showPaymentButtons ? '32px' : '36px',
           marginBottom: '15px',
           color: currentGame.borderColor,
           fontWeight: 700,
           textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
           textAlign: 'center'
         }}>
           {currentGame.name}
         </h2>
         <p style={{ marginBottom: showPaymentButtons ? '20px' : '30px', color: '#9CA3AF', fontSize: responsiveStyles.fontSize, textAlign: 'center' }}>
           {currentGame.description}
         </p>

         {currentGame.id && (
           <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
             {!showPaymentButtons ? (
               <>
                 <button
                   style={{ ...buttonStyle, animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
                   onClick={onWalletConnection}
                 >
                   🔗 Connect Wallet & Play
                 </button>
                 <p style={{ fontSize: '13px', color: '#9CA3AF', margin: '10px 0 5px', textAlign: 'center' }}>
                   Don't want to connect your wallet and publish your scores? No worries!
                 </p>
                 <button
                   style={{
                     background: 'rgba(25, 25, 35, 0.5)',
                     border: '2px solid rgba(107, 114, 128, 0.3)',
                     borderRadius: '12px',
                     padding: '12px 24px',
                     color: '#9CA3AF',
                     fontSize: '14px',
                     fontWeight: 500,
                     cursor: 'pointer',
                     transition: 'all 0.2s',
                     minWidth: '200px'
                   }}
                   onClick={() => onOfflinePlay(currentGame.id)}
                 >
                   Just Play
                 </button>
               </>
             ) : (
               <button
                 style={{
                   ...buttonStyle,
                   animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                   ...(isProcessingPayment ? { opacity: 0.7, cursor: 'not-allowed' } : {})
                 }}
                 onClick={() => onGameSelect(currentGame.id)}
                 disabled={isProcessingPayment}
               >
                 {isProcessingPayment ? '⏳ Processing...' : `Play ${currentGame.name}`}
               </button>
             )}
           </div>
         )}
       </div>

       <div className="carousel-game-side carousel-transition" style={{
         ...cardStyle,
         minWidth: '280px',
         maxWidth: '300px',
         height: showPaymentButtons ? '450px' : '360px',
         opacity: 0.4,
         filter: 'blur(2px)',
         border: '2px solid rgba(255, 61, 20, 0.4)',
         boxShadow: '0 25px 50px -12px rgba(255, 61, 20, 0.3)',
         transform: 'scale(0.8)',
         pointerEvents: 'none'
       }}>
         <div style={{
           width: '80px',
           height: '80px',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           marginBottom: '20px',
           margin: '0 auto 20px auto'
         }}>
           {rightGame.icon.startsWith('/') ? (
             <img src={rightGame.icon} alt={rightGame.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
           ) : (
             <span style={{ fontSize: '76px', lineHeight: 1 }}>{rightGame.icon}</span>
           )}
         </div>
         <h3 style={{ color: '#9CA3AF', margin: 0, fontSize: '28px', textAlign: 'center' }}>{rightGame.name}</h3>
       </div>

       <button
         onClick={handleCarouselNext}
         style={{
           position: 'absolute',
           right: '50px',
           zIndex: 10,
           background: 'rgba(255, 61, 20, 0.2)',
           border: '2px solid rgba(255, 61, 20, 0.5)',
           borderRadius: '50%',
           width: '60px',
           height: '60px',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           cursor: 'pointer',
           fontSize: '24px',
           color: '#FF3D14',
           transition: 'all 0.3s ease'
         }}
       >
         →
       </button>
     </div>
   </>
 );
}
    