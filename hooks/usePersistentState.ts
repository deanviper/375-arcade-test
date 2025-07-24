import { useState, useEffect } from 'react';

export function usePersistentState<T>(key: string, defaultValue: T, mounted: boolean) {
  const [value, setValue] = useState<T>(defaultValue);

  // Load from localStorage on mount
  useEffect(() => {
    if (!mounted) return;
    try {
      const stored = localStorage.getItem(key);
      if (stored !== null && stored !== 'null' && stored !== 'undefined') {
        // Handle different types appropriately
        if (typeof defaultValue === 'boolean') {
          setValue((stored === 'true') as T);
        } else if (typeof defaultValue === 'string') {
          setValue(stored as T);
        } else {
          setValue(stored as T);
        }
      }
    } catch (e) {
      console.error('Error loading from localStorage:', e);
    }
  }, [mounted, key, defaultValue]);

  const setPersistentValue = (newValue: T) => {
    setValue(newValue);
    if (!mounted) return;
    try {
      if (newValue === null || newValue === undefined) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, String(newValue));
      }
    } catch (e) {
      console.error('Error saving to localStorage:', e);
    }
  };

  return [value, setPersistentValue] as const;
}