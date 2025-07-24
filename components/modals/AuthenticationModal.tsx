'use client';

import { getResponsiveStyles } from '../../utils/responsive';

interface AuthenticationModalProps {
  address?: string;
  onAuthenticate: () => void;
}

export default function AuthenticationModal({ address, onAuthenticate }: AuthenticationModalProps) {
  const responsiveStyles = getResponsiveStyles();

  const containerStyle = {
    minHeight: '100vh',
    maxHeight: '100vh',
    background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2a2a2a 100%)',
    color: 'white',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    overflow: 'hidden'
  } as const;

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
    <div style={containerStyle}>
      <div style={{ padding: '100px 20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={cardStyle}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>✍️</div>
          <h2 style={{ marginBottom: '20px' }}>Authentication Required</h2>
          <p style={{ marginBottom: '10px', color: '#B9C1C1' }}><strong>Connected:</strong> {address?.slice(0, 6)}...{address?.slice(-4)}</p>
          <p style={{ marginBottom: '30px', color: '#B9C1C1' }}>Sign a message to verify your identity</p>
          <button
            style={buttonStyle}
            onClick={onAuthenticate}
          >
            🔐 Sign Message
          </button>
        </div>
      </div>
    </div>
  );
}