import { useState, useEffect, type FC } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROCESS_STAGES } from '../../content/process.js';
import { useReducedMotion } from '../../hooks/useReducedMotion.js';
import styles from './ProcessSection.module.css';

export const ProcessSection: FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const currentStage = (PROCESS_STAGES[activeStageIndex] ?? PROCESS_STAGES[0])!;

  // Forward/reverse scroll-linked progression conforming to brand motion requirements
  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: '#process',
      start: 'top 35%',
      end: 'bottom 75%',
      onUpdate: (self) => {
        const stageIdx = Math.min(3, Math.floor(self.progress * 4));
        setActiveStageIndex(stageIdx);
      },
    });

    return () => {
      trigger.kill();
    };
  }, [prefersReducedMotion]);

  return (
    <section id="process" className={styles.section} aria-labelledby="process-heading">
      <div className="container-wide">
        {/* Header */}
        <div className={styles.headerRow}>
          <div className={styles.titleGroup}>
            <div className={styles.sectionLead}>
              <span className={styles.leadBullet} aria-hidden="true" />
              Four-Stage Methodology
            </div>
            <h2 id="process-heading" className={styles.title}>
              Structure to Expression
            </h2>
            <p className={styles.subtitle}>
              From rigorous investigation to razor-sharp visual synthesis.
            </p>
          </div>
        </div>

        {/* Dynamic Interactive Presentation (Standard Mode) */}
        {!prefersReducedMotion ? (
          <div>
            {/* Timeline Tabs */}
            <div
              className={styles.timelineBar}
              role="tablist"
              aria-label="Process Methodology Stages"
            >
              {PROCESS_STAGES.map((stage, idx) => {
                const isActive = idx === activeStageIndex;
                return (
                  <button
                    key={stage.id}
                    type="button"
                    role="tab"
                    id={`stage-tab-${idx}`}
                    aria-selected={isActive}
                    aria-controls={`stage-panel-${idx}`}
                    onClick={() => setActiveStageIndex(idx)}
                    className={`${styles.stageTab} ${isActive ? styles.activeTab : ''}`}
                  >
                    <span className={styles.tabStep}>{stage.step}</span>
                    <span className={styles.tabTitle}>{stage.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Detail Panel */}
            <div
              id={`stage-panel-${activeStageIndex}`}
              role="tabpanel"
              aria-labelledby={`stage-tab-${activeStageIndex}`}
              className={styles.stagePanel}
            >
              <div className="crop-corner-tl" aria-hidden="true" />
              <div className="crop-corner-tr" aria-hidden="true" />
              <div className="crop-corner-bl" aria-hidden="true" />
              <div className="crop-corner-br" aria-hidden="true" />

              <div className={styles.panelInfo}>
                <span className={styles.stageNumeral}>{currentStage.step}</span>
                <h3 className={styles.stageTitle}>{currentStage.title}</h3>
                <p className={styles.stageTagline}>{currentStage.tagline}</p>
                <p className={styles.stageDescription}>{currentStage.description}</p>

                <div className={styles.actionsHeading}>Stage Actions & Deliverables</div>
                <ul className={styles.actionsList}>
                  {currentStage.actions.map((act, i) => (
                    <li key={i} className={styles.actionItem}>
                      {act}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progressive Constructivist Visual Sequence Motif */}
              <div
                className={styles.motifContainer}
                role="img"
                aria-label={`Progressive geometric motif for ${currentStage.title}`}
              >
                <svg
                  className={styles.motifSvg}
                  viewBox="0 0 300 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer Frame */}
                  <rect
                    x="20"
                    y="20"
                    width="260"
                    height="260"
                    stroke="#D8D2C4"
                    strokeWidth="1"
                    fill="none"
                  />

                  {/* Stage 0: Discover - Scanning Lines & Crosshairs */}
                  {activeStageIndex === 0 && (
                    <>
                      <circle
                        cx="150"
                        cy="150"
                        r="80"
                        stroke="#242522"
                        strokeWidth="1"
                        strokeDasharray="3 3"
                      />
                      <line
                        x1="40"
                        y1="150"
                        x2="260"
                        y2="150"
                        stroke="#242522"
                        strokeWidth="1.25"
                      />
                      <line
                        x1="150"
                        y1="40"
                        x2="150"
                        y2="260"
                        stroke="#242522"
                        strokeWidth="1.25"
                      />
                      <circle cx="150" cy="150" r="6" fill="#B6503B" />
                      <rect
                        x="70"
                        y="70"
                        width="40"
                        height="40"
                        stroke="#8C8E85"
                        strokeWidth="1"
                        fill="none"
                      />
                      <rect
                        x="190"
                        y="190"
                        width="40"
                        height="40"
                        stroke="#8C8E85"
                        strokeWidth="1"
                        fill="none"
                      />
                    </>
                  )}

                  {/* Stage 1: Define - Mathematical Grid & Proportion Armature */}
                  {activeStageIndex === 1 && (
                    <>
                      <line x1="60" y1="40" x2="60" y2="260" stroke="#242522" strokeWidth="1" />
                      <line x1="120" y1="40" x2="120" y2="260" stroke="#242522" strokeWidth="1" />
                      <line x1="180" y1="40" x2="180" y2="260" stroke="#242522" strokeWidth="1" />
                      <line x1="240" y1="40" x2="240" y2="260" stroke="#242522" strokeWidth="1" />
                      <line x1="40" y1="110" x2="260" y2="110" stroke="#242522" strokeWidth="1" />
                      <line x1="40" y1="190" x2="260" y2="190" stroke="#242522" strokeWidth="1" />
                      <circle cx="120" cy="110" r="5" fill="#242522" />
                      <circle cx="180" cy="190" r="5" fill="#B6503B" />
                      <path
                        d="M 60 190 A 60 60 0 0 1 180 190 Z"
                        fill="none"
                        stroke="#242522"
                        strokeWidth="1.5"
                      />
                    </>
                  )}

                  {/* Stage 2: Construct - Monolithic Massing & Volumes */}
                  {activeStageIndex === 2 && (
                    <>
                      <rect x="70" y="60" width="70" height="180" fill="#242522" />
                      <circle cx="190" cy="110" r="45" fill="#242522" />
                      <path d="M 145 150 A 45 45 0 0 1 235 150 Z" fill="#595B55" />
                      <rect x="155" y="195" width="80" height="45" fill="#242522" />
                      <circle cx="190" cy="110" r="18" fill="#F1EDE3" />
                      <line x1="50" y1="200" x2="110" y2="140" stroke="#B6503B" strokeWidth="2" />
                    </>
                  )}

                  {/* Stage 3: Refine - Polished Balance & Precision Focal Point */}
                  {activeStageIndex === 3 && (
                    <>
                      <rect x="80" y="60" width="60" height="130" fill="#242522" />
                      <circle cx="190" cy="100" r="40" fill="#242522" />
                      <path d="M 160 170 A 40 40 0 0 1 240 170 Z" fill="#242522" />
                      <rect x="190" y="170" width="50" height="70" fill="#242522" />
                      <rect x="80" y="190" width="60" height="50" fill="#595B55" />
                      <circle cx="110" cy="215" r="16" fill="#F1EDE3" />
                      <circle cx="215" cy="205" r="5" fill="#B6503B" />
                      <line
                        x1="215"
                        y1="185"
                        x2="215"
                        y2="225"
                        stroke="#B6503B"
                        strokeWidth="1"
                        strokeDasharray="2 2"
                      />
                      <circle cx="255" cy="255" r="4" stroke="#242522" strokeWidth="1" />
                    </>
                  )}
                </svg>
              </div>
            </div>
          </div>
        ) : (
          /* Static Accessible Presentation for Reduced Motion */
          <div className={styles.staticStagesList}>
            {PROCESS_STAGES.map((stage) => (
              <div key={stage.id} className={styles.stagePanel}>
                <div className="crop-corner-tl" aria-hidden="true" />
                <div className="crop-corner-tr" aria-hidden="true" />
                <div className="crop-corner-bl" aria-hidden="true" />
                <div className="crop-corner-br" aria-hidden="true" />

                <div className={styles.panelInfo}>
                  <span className={styles.stageNumeral}>{stage.step}</span>
                  <h3 className={styles.stageTitle}>{stage.title}</h3>
                  <p className={styles.stageTagline}>{stage.tagline}</p>
                  <p className={styles.stageDescription}>{stage.description}</p>
                  <ul className={styles.actionsList}>
                    {stage.actions.map((act, i) => (
                      <li key={i} className={styles.actionItem}>
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
