'use client';

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

  return (
    <>
      <style jsx>{`
        .header-button-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .header-button-hover:hover {
          background: linear-gradient(135deg, rgba(255, 61, 20, 0.3) 0%, rgba(255, 61, 20, 0.1) 100%) !important;
          border: 2px solid rgba(255, 61, 20, 0.5) !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 15px rgba(255, 61, 20, 0.3) !important;
        }
        .faucet-button-hover:hover {
          background: linear-gradient(135deg, rgba(80, 255, 214, 0.3) 0%, rgba(80, 255, 214, 0.1) 100%) !important;
          border: 2px solid rgba(80, 255, 214, 0.5) !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 15px rgba(80, 255, 214, 0.3) !important;
        }
        .global-button-hover:hover {
          background: linear-gradient(135deg, rgba(156, 163, 175, 0.3) 0%, rgba(156, 163, 175, 0.1) 100%) !important;
          border: 2px solid rgba(156, 163, 175, 0.5) !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 15px rgba(156, 163, 175, 0.3) !important;
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
              className="header-button-hover"
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
              Home
            </button>
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
              Faucet
            </button>
            <button
              onClick={() => window.open('https://375ai-leaderboards.vercel.app/', '_blank')}
              className="header-button-hover global-button-hover"
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
              Global Leaderboards
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