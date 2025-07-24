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
   padding: '14px 28px',
   color: 'white',
   fontSize: responsiveStyles.fontSize,
   fontWeight: '600',
   cursor: 'pointer',
   transition: 'all 0.2s',
   boxShadow: '0 4px 15px rgba(80, 255, 214, 0.4)',
   minWidth: '180px'
 };

 return (
   <>
     <style jsx>{`
       .carousel-transition { transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important; }
       .carousel-game-center, .carousel-game-side {
         display: flex; 
         flex-direction: row; 
         align-items: center; 
         justify-content: center; 
         height: 180px !important;
         padding: 20px !important;
         gap: 20px;
         text-align: center;
       }
       @media (max-width: 768px) {
         .carousel-container {
           flex-direction: column !important;
           gap: 15px !important;
         }
         .carousel-game-center, .carousel-game-side {
           min-width: 280px !important;
           max-width: 320px !important;
           height: 140px !important;
           padding: 15px !important;
           gap: 15px;
         }
       }
       @media (min-width: 481px) and (max-width: 768px) {
         .tablet-adjustments {
           transform: scale(0.9) !important;
         }
         .carousel-game-center, .carousel-game-side {
           min-width: 320px !important;
           max-width: 360px !important;
           height: 160px !important;
         }
       }
       @keyframes pulse {
         0%, 100% { transform: scale(1.02); }
         50% { transform: scale(1.05); }
       }
     `}</style>

     <div className="carousel-container tablet-adjustments" style={{
       display: 'flex',
       gap: '24px',
       alignItems: 'center',
       justifyContent: 'center',
       position: 'relative',
       minHeight: '220px'
     }}>
       <button
         onClick={handleCarouselPrev}
         style={{
           position: 'absolute',
           left: '30px',
           zIndex: 10,
           background: 'rgba(255, 61, 20, 0.2)',
           border: '2px solid rgba(255, 61, 20, 0.5)',
           borderRadius: '50%',
           width: '50px',
           height: '50px',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           cursor: 'pointer',
           fontSize: '20px',
           color: '#FF3D14',
           transition: 'all 0.3s ease'
         }}
       >
         ←
       </button>

       <div className="carousel-game-side carousel-transition" style={{
         ...cardStyle,
         minWidth: '300px',
         maxWidth: '400px',
         height: showPaymentButtons ? '180px' : '160px',
         opacity: 0.4,
         filter: 'blur(2px)',
         border: '2px solid rgba(255, 61, 20, 0.4)',
         boxShadow: '0 25px 50px -12px rgba(255, 61, 20, 0.3)',
         transform: 'scale(0.85)',
         pointerEvents: 'none'
       }}>
         <div style={{
           width: '60px',
           height: '60px',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           flexShrink: 0
         }}>
           {leftGame.icon.startsWith('/') ? (
             <img src={leftGame.icon} alt={leftGame.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
           ) : (
             <span style={{ fontSize: '56px', lineHeight: 1 }}>{leftGame.icon}</span>
           )}
         </div>
         <div style={{ flex: 1, textAlign: 'center' }}>
           <h3 style={{ color: '#9CA3AF', margin: '0 0 8px 0', fontSize: '20px' }}>{leftGame.name}</h3>
           <p style={{ color: '#666', fontSize: '12px', margin: 0 }}>{leftGame.description}</p>
         </div>
       </div>

       <div className="carousel-game-center carousel-transition" style={{
         ...cardStyle,
         minWidth: '500px',
         maxWidth: '600px',
         height: showPaymentButtons ? '180px' : '160px',
         border: `3px solid ${currentGame.borderColor}`,
         boxShadow: `0 25px 50px -12px ${currentGame.borderColor}40`,
         transform: 'scale(1.0)'
       }}>
         <div style={{
           width: showPaymentButtons ? '80px' : '90px',
           height: showPaymentButtons ? '80px' : '90px',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           flexShrink: 0
         }}>
           {currentGame.icon.startsWith('/') ? (
             <img src={currentGame.icon} alt={currentGame.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
           ) : (
             <span style={{ fontSize: showPaymentButtons ? '76px' : '86px', lineHeight: 1 }}>{currentGame.icon}</span>
           )}
         </div>
         <div style={{ flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: '20px', marginLeft:'-50px' }}>
           <h2 style={{
             fontSize: showPaymentButtons ? '24px' : '28px',
             marginBottom: '8px',
             color: currentGame.borderColor,
             fontWeight: 700,
             textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
           }}>
             {currentGame.name}
           </h2>
           <p style={{ marginBottom: showPaymentButtons ? '15px' : '20px', color: '#9CA3AF', fontSize: '14px' }}>
             {currentGame.description}
           </p>

           {currentGame.id && (
             <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
               {!showPaymentButtons ? (
                 <>
                   <button
                     style={{ ...buttonStyle, animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
                     onClick={onWalletConnection}
                   >
                     🔗 Connect Wallet & Play
                   </button>
                   <button
                     style={{
                       background: 'rgba(25, 25, 35, 0.5)',
                       border: '2px solid rgba(107, 114, 128, 0.3)',
                       borderRadius: '12px',
                       padding: '10px 20px',
                       color: '#9CA3AF',
                       fontSize: '12px',
                       fontWeight: 500,
                       cursor: 'pointer',
                       transition: 'all 0.2s',
                       minWidth: '140px'
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
       </div>

       <div className="carousel-game-side carousel-transition" style={{
         ...cardStyle,
         minWidth: '300px',
         maxWidth: '400px',
         height: showPaymentButtons ? '180px' : '160px',
         opacity: 0.4,
         filter: 'blur(2px)',
         border: '2px solid rgba(255, 61, 20, 0.4)',
         boxShadow: '0 25px 50px -12px rgba(255, 61, 20, 0.3)',
         transform: 'scale(0.85)',
         pointerEvents: 'none'
       }}>
         <div style={{
           width: '60px',
           height: '60px',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           flexShrink: 0
         }}>
           {rightGame.icon.startsWith('/') ? (
             <img src={rightGame.icon} alt={rightGame.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
           ) : (
             <span style={{ fontSize: '56px', lineHeight: 1 }}>{rightGame.icon}</span>
           )}
         </div>
         <div style={{ flex: 1, textAlign: 'center' }}>
           <h3 style={{ color: '#9CA3AF', margin: '0 0 8px 0', fontSize: '20px' }}>{rightGame.name}</h3>
           <p style={{ color: '#666', fontSize: '12px', margin: 0 }}>{rightGame.description}</p>
         </div>
       </div>

       <button
         onClick={handleCarouselNext}
         style={{
           position: 'absolute',
           right: '30px',
           zIndex: 10,
           background: 'rgba(255, 61, 20, 0.2)',
           border: '2px solid rgba(255, 61, 20, 0.5)',
           borderRadius: '50%',
           width: '50px',
           height: '50px',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           cursor: 'pointer',
           fontSize: '20px',
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