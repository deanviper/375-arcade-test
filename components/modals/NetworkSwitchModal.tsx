'use client';

import { IRYS_PARAMS } from '../../constants';
import { getResponsiveStyles } from '../../utils/responsive';

export default function NetworkSwitchModal() {
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

  const handleNetworkSwitch = async () => {
    const ethereum = (window as any).ethereum;
    if (!ethereum) {
      alert('No wallet found. Please install MetaMask, OKX, or another Web3 wallet.');
      return;
    }
    try {
      await ethereum.request({ method: 'wallet_addEthereumChain', params: [IRYS_PARAMS] });
    } catch (e: any) { 
      console.log('Add network failed:', e); 
    }
    try {
      await ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: IRYS_PARAMS.chainId }] });
    } catch (e: any) {
      if (e.code === 4001) alert('Network switch cancelled by user');
      else alert('Failed to switch network: ' + e.message);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={{ padding: '100px 20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={cardStyle}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>⚠️</div>
          <h2 style={{ marginBottom: '20px', color: '#FF3D14' }}>Wrong Network</h2>
          <p style={{ marginBottom: '30px', color: '#B9C1C1' }}>Please switch to <strong>Irys Testnet</strong> to continue</p>
          <button
            style={buttonStyle}
            onClick={handleNetworkSwitch}
          >
            Switch to Irys Testnet
          </button>
        </div>
      </div>
    </div>
  );
}