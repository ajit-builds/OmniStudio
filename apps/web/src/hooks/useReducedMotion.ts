import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Hook to detect and react to user's prefers-reduced-motion accessibility preference.
 * Defaults to false if window or matchMedia is not available.
 */
export const useReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return false;
    }
    return window.matchMedia(QUERY).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    const mediaQueryList = window.matchMedia(QUERY);
    const updateMotionPreference = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Update initial state
    setPrefersReducedMotion(mediaQueryList.matches);

    // Modern event listener support
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', updateMotionPreference);
      return () => {
        mediaQueryList.removeEventListener('change', updateMotionPreference);
      };
    } else {
      // Deprecated fallback for older browsers
      mediaQueryList.addListener(updateMotionPreference);
      return () => {
        mediaQueryList.removeListener(updateMotionPreference);
      };
    }
  }, []);

  return prefersReducedMotion;
};
