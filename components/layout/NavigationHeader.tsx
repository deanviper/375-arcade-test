'use client';

import { useState } from 'react';
import { getResponsiveStyles } from '../../utils/responsive';

interface NavigationHeaderProps {
  onHomeClick: () => void;
  onDisconnectWallet: () => void;
  address?: string;
  isConnected: boolean;
  authed: boolean;
  isOfflineMode: boolean;
}

export default function NavigationHeader({
  onHomeClick,
  onDisconnectWallet,
  address,
  isConnected,
  authed,
  isOfflineMode
}: NavigationHeaderProps) {
  const responsiveStyles = getResponsiveStyles();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <style jsx>{`
        .header-button-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .header-button-hover:hover {
          transform: translateY(-2px) !important;
        }
        
        .home-button-hover:hover {
          background: linear-gradient(135deg, rgba(156, 163, 175, 0.3) 0%, rgba(156, 163, 175, 0.1) 100%) !important;
          border: 2px solid rgba(156, 163, 175, 0.5) !important;
          box-shadow: 0 4px 15px rgba(156, 163, 175, 0.3) !important;
        }
        
        .faucet-button-hover:hover, .irys-button-hover:hover {
          background: linear-gradient(135deg, rgba(80, 255, 214, 0.3) 0%, rgba(80, 255, 214, 0.1) 100%) !important;
          border: 2px solid rgba(80, 255, 214, 0.5) !important;
          box-shadow: 0 4px 15px rgba(80, 255, 214, 0.3) !important;
        }
        
        .ai375-button-hover:hover, .global-button-hover:hover {
          background: linear-gradient(135deg, rgba(255, 61, 20, 0.3) 0%, rgba(255, 61, 20, 0.1) 100%) !important;
          border: 2px solid rgba(255, 61, 20, 0.5) !important;
          box-shadow: 0 4px 15px rgba(255, 61, 20, 0.3) !important;
        }
        
        .disconnect-button-hover {
          transition: all 0.3s ease !important;
        }
        .disconnect-button-hover:hover {
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.4) 0%, rgba(239, 68, 68, 0.1) 100%) !important;
          border: 1px solid rgba(239, 68, 68, 0.5) !important;
          transform: translateY(-1px) !important;
          box-shadow: 0 2px 10px rgba(239, 68, 68, 0.3) !important;
        }
        .wallet-address-display {
          transition: all 0.3s ease !important;
        }
        .wallet-address-display:hover {
          background: linear-gradient(135deg, rgba(80, 255, 214, 0.3) 0%, rgba(80, 255, 214, 0.1) 100%) !important;
          border: 1px solid rgba(80, 255, 214, 0.5) !important;
          transform: translateY(-1px) !important;
          box-shadow: 0 2px 10px rgba(80, 255, 214, 0.3) !important;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, rgba(8, 8, 12, 0.95) 0%, rgba(15, 15, 20, 0.95) 100%);
          border: 1px solid rgba(80, 255, 214, 0.3);
          border-radius: 8px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(12px);
          min-width: 150px;
          z-index: 1200;
          margin-top: 2px;
          opacity: 0;
          transform: translateX(-50%) translateY(-10px);
          animation: dropdownSlideIn 0.2s ease-out forwards;
        }
        
        @keyframes dropdownSlideIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        
        .dropdown-item {
          padding: 12px 20px;
          color: #E5E7EB;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s ease;
          border-bottom: 1px solid rgba(80, 255, 214, 0.1);
          cursor: pointer;
        }
        .dropdown-item:last-child {
          border-bottom: none;
        }
        .dropdown-item:hover {
          background: linear-gradient(135deg, rgba(80, 255, 214, 0.2) 0%, rgba(80, 255, 214, 0.1) 100%);
          color: #50FFD6;
        }
      `}</style>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        background: 'rgba(8, 8, 12, 0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(80, 255, 214, 0.15)',
        padding: responsiveStyles.padding,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap' as const,
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' as const }}>
            <button
              onClick={onHomeClick}
              className="header-button-hover home-button-hover"
              style={{
                background: 'linear-gradient(135deg, rgba(156, 163, 175, 0.15) 0%, rgba(156, 163, 175, 0.05) 100%)',
                border: '2px solid transparent',
                borderRadius: '12px',
                padding: '10px 20px',
                color: '#9CA3AF',
                fontSize: responsiveStyles.fontSize,
                fontWeight: 600,
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              HOME
            </button>
            
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => handleMouseEnter('375ai')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="header-button-hover ai375-button-hover"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 61, 20, 0.15) 0%, rgba(255, 61, 20, 0.05) 100%)',
                  border: '2px solid transparent',
                  borderRadius: '12px',
                  padding: '10px 20px',
                  color: '#FF3D14',
                  fontSize: responsiveStyles.fontSize,
                  fontWeight: 600,
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                What is 375ai? ▼
              </button>
              {activeDropdown === '375ai' && (
                <div 
                  className="dropdown-menu"
                  onMouseEnter={() => handleMouseEnter('375ai')}
                  onMouseLeave={handleMouseLeave}
                >
                  <a 
                    href="https://375.ai/about" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="dropdown-item"
                  >
                    ABOUT
                  </a>
                  <a 
                    href="https://x.com/375ai_" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="dropdown-item"
                  >
                    X
                  </a>
                </div>
              )}
            </div>

            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => handleMouseEnter('irys')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="header-button-hover irys-button-hover"
                style={{
                  background: 'linear-gradient(135deg, rgba(80, 255, 214, 0.15) 0%, rgba(80, 255, 214, 0.05) 100%)',
                  border: '2px solid transparent',
                  borderRadius: '12px',
                  padding: '10px 20px',
                  color: '#50FFD6',
                  fontSize: responsiveStyles.fontSize,
                  fontWeight: 600,
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                What is Irys? ▼
              </button>
              {activeDropdown === 'irys' && (
                <div 
                  className="dropdown-menu"
                  onMouseEnter={() => handleMouseEnter('irys')}
                  onMouseLeave={handleMouseLeave}
                >
                  <a 
                    href="https://docs.irys.xyz/learn/what/what-irys-is" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="dropdown-item"
                  >
                    ABOUT
                  </a>
                  <a 
                    href="https://x.com/irys_xyz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="dropdown-item"
                  >
                    X
                  </a>
                </div>
              )}
            </div>
            
            <button
              onClick={() => window.open('https://irys.xyz/faucet', '_blank')}
              className="header-button-hover faucet-button-hover"
              style={{
                background: 'linear-gradient(135deg, rgba(80, 255, 214, 0.15) 0%, rgba(80, 255, 214, 0.05) 100%)',
                border: '2px solid transparent',
                borderRadius: '12px',
                padding: '10px 20px',
                color: '#50FFD6',
                fontSize: responsiveStyles.fontSize,
                fontWeight: 600,
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              FAUCET
            </button>
            <button
              onClick={() => window.open('https://375ai-leaderboards.vercel.app/', '_blank')}
              className="header-button-hover global-button-hover"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 61, 20, 0.15) 0%, rgba(255, 61, 20, 0.05) 100%)',
                border: '2px solid transparent',
                borderRadius: '12px',
                padding: '10px 20px',
                color: '#FF3D14',
                fontSize: responsiveStyles.fontSize,
                fontWeight: 600,
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              GLOBAL LEADERBOARDS
            </button>
          </div>
        </div>

        {address && isConnected && authed && !isOfflineMode && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div 
              className="wallet-address-display"
              style={{ 
                background: 'linear-gradient(135deg, rgba(80, 255, 214, 0.2) 0%, rgba(80, 255, 214, 0.05) 100%)',
                border: '1px solid rgba(80, 255, 214, 0.3)',
                borderRadius: '10px',
                padding: '8px 16px',
                fontSize: '12px',
                color: '#50FFD6',
                fontFamily: 'Monaco, monospace',
                fontWeight: 600,
                backdropFilter: 'blur(8px)',
                cursor: 'pointer'
              }}
              title="Click to copy address"
              onClick={() => {
                navigator.clipboard.writeText(address);
                // You could add a toast notification here
              }}
            >
              {address.slice(0, 6)}...{address.slice(-4)}
            </div>
            <button
              onClick={onDisconnectWallet}
              className="disconnect-button-hover"
              style={{
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(239, 68, 68, 0.05) 100%)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '10px',
                padding: '8px 16px',
                color: '#EF4444',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              Disconnect
            </button>
          </div>
        )}
      </div>
    </>
  );
}