import type { ResponsiveStyles } from '../types';

export const getResponsiveStyles = (): ResponsiveStyles => {
  if (typeof window === 'undefined') {
    return { fontSize: '16px', padding: '20px', cardPadding: '40px', titleMaxWidth: '400px' };
  }
  
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  // Calculate scale based on both width and height
  const widthScale = Math.min(width / 1920, 1);
  const heightScale = Math.min(height / 1080, 1);
  const scale = Math.min(widthScale, heightScale);
  
  // Very small screens (phones)
  if (width < 480) {
    return { 
      fontSize: `${Math.max(12, 14 * scale)}px`, 
      padding: `${Math.max(8, 10 * scale)}px`, 
      cardPadding: `${Math.max(15, 20 * scale)}px`, 
      titleMaxWidth: `${Math.max(200, 280 * scale)}px` 
    };
  } 
  // Small tablets
  else if (width < 768) {
    return { 
      fontSize: `${Math.max(13, 15 * scale)}px`, 
      padding: `${Math.max(12, 15 * scale)}px`, 
      cardPadding: `${Math.max(20, 30 * scale)}px`, 
      titleMaxWidth: `${Math.max(250, 350 * scale)}px` 
    };
  } 
  // Medium tablets
  else if (width < 1024) {
    return { 
      fontSize: `${Math.max(14, 16 * scale)}px`, 
      padding: `${Math.max(15, 18 * scale)}px`, 
      cardPadding: `${Math.max(25, 35 * scale)}px`, 
      titleMaxWidth: `${Math.max(300, 380 * scale)}px` 
    };
  } 
  // Large screens but smaller than 1920x1080
  else if (width < 1920 || height < 1080) {
    return { 
      fontSize: `${Math.max(14, 16 * scale)}px`, 
      padding: `${Math.max(16, 20 * scale)}px`, 
      cardPadding: `${Math.max(30, 40 * scale)}px`, 
      titleMaxWidth: `${Math.max(320, 400 * scale)}px` 
    };
  }
  // Default for 1920x1080 and larger
  else {
    return { 
      fontSize: '16px', 
      padding: '20px', 
      cardPadding: '40px', 
      titleMaxWidth: '400px' 
    };
  }
};

export const getGameContainerScale = () => {
  if (typeof window === 'undefined') return 1;
  
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  // Calculate available space (minus headers, footers, padding)
  const availableWidth = width * 0.9;
  const availableHeight = height * 0.75;
  
  // Base game container size
  const baseWidth = 600;
  const baseHeight = 500;
  
  const scaleX = availableWidth / baseWidth;
  const scaleY = availableHeight / baseHeight;
  
  return Math.min(scaleX, scaleY, 1.2); // Max scale of 1.2x
};

export const getLeaderboardScale = () => {
  if (typeof window === 'undefined') return { width: '320px', fontSize: '16px' };
  
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  if (width < 768) {
    return { 
      width: `${Math.min(300, width * 0.9)}px`, 
      fontSize: '12px' 
    };
  } else if (width < 1024) {
    return { 
      width: `${Math.min(320, width * 0.25)}px`, 
      fontSize: '14px' 
    };
  } else {
    return { 
      width: `${Math.min(350, width * 0.2)}px`, 
      fontSize: '16px' 
    };
  }
};