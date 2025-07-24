'use client';

import { getResponsiveStyles } from '../../utils/responsive';

export default function Footer() {
  const responsiveStyles = getResponsiveStyles();

  return (
    <div style={{
      position: 'fixed',
      bottom: '5px',
      left: responsiveStyles.padding,
      right: responsiveStyles.padding,
      textAlign: 'center' as const,
      zIndex: 500
    }}>
      <div style={{ fontSize: '11px', color: '#B9C1C1', marginBottom: '5px' }}>
        Made with love by{' '}
        <a href="https://x.com/cryptdean" target="_blank" rel="noopener noreferrer" style={{ color: '#FF3D14', textDecoration: 'none', fontWeight: 600 }}>
          Dean
        </a>
        . para mi amore, <em>vivr</em>
      </div>
      <div style={{ fontSize: '8px', color: '#666', lineHeight: 1.2, maxWidth: '800px', margin: '0 auto' }}>
        <strong>Disclaimer:</strong> 375 Arcade is not in any way, shape, or form affiliated with the 375ai or Irys team. This is a game made for the community. There will be no financial transactions, solicitations, donations, or anything related to user spending. For official updates visit{' '}
        <a href="https://x.com/375ai_" target="_blank" rel="noopener noreferrer" style={{ color: '#FF3D14', textDecoration: 'none' }}>
          375ai
        </a>
        {' '}and{' '}
        <a href="https://x.com/irys_xyz" target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', textDecoration: 'none' }}>
          Irys
        </a>
      </div>
    </div>
  );
}