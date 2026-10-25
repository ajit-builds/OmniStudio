import { useEffect, useState, useRef, type FC } from 'react';
import gsap from 'gsap';
import { ActionLink } from '../ui/ActionLink.js';
import { ROUTES } from '../../lib/routePaths.js';
import { useReducedMotion } from '../../hooks/useReducedMotion.js';
import { ThreeHeroCanvas } from '../../three/ThreeHeroCanvas.js';
import { MOTION_EASINGS } from '../../animations/motionConfig.js';
import styles from './HeroSection.module.css';

interface ApiHealthState {
  status: 'checking' | 'connected' | 'unreachable';
  environment?: string;
  uptime?: number;
}

export const HeroSection: FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statementRef = useRef<HTMLParagraphElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();
  const [apiHealth, setApiHealth] = useState<ApiHealthState>({ status: 'checking' });

  // Fetch API health status
  useEffect(() => {
    let isMounted = true;

    fetch('/api/health')
      .then((res) => {
        if (!res.ok) throw new Error('API unavailable');
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          setApiHealth({
            status: data.status === 'ok' ? 'connected' : 'unreachable',
            environment: data.environment,
            uptime: data.uptime,
          });
        }
      })
      .catch(() => {
        if (isMounted) {
          setApiHealth({ status: 'unreachable' });
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Carefully timed typographic entrance
  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: MOTION_EASINGS.architectural } });

      tl.fromTo(headlineRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.95 })
        .fromTo(
          statementRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6',
        )
        .fromTo(
          copyRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5',
        )
        .fromTo(
          actionsRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4',
        );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section ref={containerRef} className={styles.heroSection} aria-label="Studio Omni Hero">
      <div className={styles.heroGrid}>
        {/* Left Column: Typographic & Editorial Statement */}
        <div className={styles.editorialCol}>
          <div className={styles.crosshairDetail} aria-hidden="true">
            +
          </div>

          <h1 ref={headlineRef} className={styles.headline}>
            WE SHAPE
            <br />
            THE INVISIBLE
          </h1>

          <p ref={statementRef} className={styles.statement}>
            Through rigorous, design-first systems.
          </p>

          <p ref={copyRef} className={styles.supportCopy}>
            An independent multidisciplinary studio connecting visual identity, digital experiences,
            and editorial architecture for the culturally minded.
          </p>

          <div ref={actionsRef} className={styles.actionRow}>
            <ActionLink to={ROUTES.WORK} variant="solid" size="md">
              Explore Selected Projects
            </ActionLink>
            <ActionLink to="#philosophy" variant="underline" size="md">
              Studio Philosophy
            </ActionLink>
          </div>
        </div>

        {/* Right Column: Signature Three.js R3F Geometric Composition */}
        <div className={styles.canvasCol}>
          <ThreeHeroCanvas />
        </div>
      </div>

      {/* System Status Strip */}
      <footer className={styles.systemBar} aria-label="System Environment Status">
        <div className={styles.systemGroup}>
          <span className={styles.systemItem}>
            <span className={styles.statusDot} aria-hidden="true" />
            Brand System: Active
          </span>
          <span className={styles.systemItem}>
            <span
              className={`${styles.statusDot} ${
                apiHealth.status === 'connected' ? styles.statusDotActive : ''
              }`}
              aria-hidden="true"
            />
            API Gateway:{' '}
            {apiHealth.status === 'connected'
              ? `Connected (${apiHealth.environment})`
              : apiHealth.status === 'checking'
                ? 'Connecting...'
                : 'Offline'}
          </span>
          <span className={styles.systemItem}>
            Reduced Motion: {prefersReducedMotion ? 'Active' : 'Standard'}
          </span>
        </div>

        <div className={styles.systemItem}>
          <span>Studio Omni • System 02/06</span>
        </div>
      </footer>
    </section>
  );
};
