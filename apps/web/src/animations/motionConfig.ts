import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

/**
 * Studio Omni Motion Configuration
 *
 * Centralized motion tokens and GSAP registration.
 * Ensures consistent durations, architectural easing, and safe cleanup.
 */

export const MOTION_DURATIONS = {
  instant: 0,
  fast: 0.2,
  normal: 0.4,
  slow: 0.7,
  deliberate: 1.1,
} as const;

export const MOTION_EASINGS = {
  // Architectural ease matching cubic-bezier(0.16, 1, 0.3, 1)
  architectural: 'power3.out',
  smooth: 'power2.inOut',
  crisp: 'expo.out',
  linear: 'none',
} as const;

let isGSAPRegistered = false;

/**
 * Initializes and registers GSAP plugins once safely.
 */
export const registerMotionPlugins = (): void => {
  if (typeof window === 'undefined' || isGSAPRegistered) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger, useGSAP);
  isGSAPRegistered = true;
};

// Auto-register when imported in browser environment
if (typeof window !== 'undefined') {
  registerMotionPlugins();
}

export { gsap, ScrollTrigger, useGSAP };
