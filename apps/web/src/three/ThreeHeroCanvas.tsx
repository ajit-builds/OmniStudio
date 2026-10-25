import { useEffect, useRef, useState, Suspense, type FC } from 'react';
import { Canvas } from '@react-three/fiber';
import { OmniConstructionScene } from './OmniConstructionScene.js';
import { GeometricFallbackSvg } from './GeometricFallbackSvg.js';
import { useReducedMotion } from '../hooks/useReducedMotion.js';
import styles from './ThreeHeroCanvas.module.css';

interface ThreeHeroCanvasProps {
  className?: string;
}

const isWebGLAvailable = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl2') ||
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl')),
    );
  } catch {
    return false;
  }
};

export const ThreeHeroCanvas: FC<ThreeHeroCanvasProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseNorm = useRef({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [hasRenderError, setHasRenderError] = useState<boolean>(false);

  useEffect(() => {
    setHasWebGL(isWebGLAvailable());
  }, []);

  // Viewport visibility awareness (IntersectionObserver)
  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Desktop subtle mouse tracking
  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') {
      return;
    }

    // Disable mouse parallax on touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseNorm.current.x = (e.clientX / innerWidth) * 2 - 1;
      mouseNorm.current.y = (e.clientY / innerHeight) * 2 - 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  // Fallback if WebGL unavailable or errored
  if (!hasWebGL || hasRenderError) {
    return <GeometricFallbackSvg className={className} isFallback={true} />;
  }

  return (
    <div
      ref={containerRef}
      className={`${styles.canvasWrapper} ${className}`}
      aria-label="Studio Omni 3D Constructivist Architectural Motif"
    >
      {/* Corner architectural registration ticks */}
      <div className="crop-corner-tl" aria-hidden="true" />
      <div className="crop-corner-tr" aria-hidden="true" />
      <div className="crop-corner-bl" aria-hidden="true" />
      <div className="crop-corner-br" aria-hidden="true" />

      <div className={styles.canvasInner}>
        <Suspense fallback={<GeometricFallbackSvg isFallback={false} />}>
          <Canvas
            camera={{ position: [0, 0, 4.8], fov: 38 }}
            dpr={[1, 2]}
            frameloop={isVisible ? 'always' : 'never'}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: 'high-performance',
            }}
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0);
            }}
            onError={() => {
              setHasRenderError(true);
            }}
          >
            {/* Architectural Key & Ambient Lighting */}
            <ambientLight intensity={0.7} />
            <directionalLight position={[3, 4, 5]} intensity={0.8} />

            <OmniConstructionScene
              reducedMotion={prefersReducedMotion}
              mouseNorm={mouseNorm}
              isVisible={isVisible}
            />
          </Canvas>
        </Suspense>
      </div>

      <span className={styles.statusIndicator} aria-hidden="true">
        Omni Spatial System • 3D
      </span>
    </div>
  );
};
