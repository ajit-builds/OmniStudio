import { useRef, useMemo, useEffect, type FC } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { MOTION_EASINGS } from '../animations/motionConfig.js';

interface OmniConstructionSceneProps {
  reducedMotion: boolean;
  mouseNorm: { current: { x: number; y: number } };
  isVisible: boolean;
}

export const OmniConstructionScene: FC<OmniConstructionSceneProps> = ({
  reducedMotion,
  mouseNorm,
  isVisible,
}) => {
  const sceneGroupRef = useRef<THREE.Group>(null);
  const elementsGroupRef = useRef<THREE.Group>(null);

  // Brand Materials
  const materials = useMemo(() => {
    return {
      ink: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#242522'),
        roughness: 0.88,
        metalness: 0.08,
      }),
      inkMuted: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#595B55'),
        roughness: 0.9,
        metalness: 0.05,
      }),
      paper: new THREE.MeshBasicMaterial({
        color: new THREE.Color('#F1EDE3'),
      }),
      vermilion: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#B6503B'),
        roughness: 0.6,
        metalness: 0.15,
      }),
      lineInk: new THREE.LineBasicMaterial({
        color: new THREE.Color('#242522'),
        transparent: true,
        opacity: 0.4,
      }),
      lineGrid: new THREE.LineBasicMaterial({
        color: new THREE.Color('#242522'),
        transparent: true,
        opacity: 0.22,
      }),
      lineVermilion: new THREE.LineDashedMaterial({
        color: new THREE.Color('#B6503B'),
        dashSize: 0.06,
        gapSize: 0.04,
      }),
    };
  }, []);

  // Structural Wireframe Geometries
  const { frameLineGeo, gridLineGeo, rayLineGeo, vermilionAxisGeo } = useMemo(() => {
    // Outer Frame (3.2 x 3.2 with corner ticks)
    const framePts: THREE.Vector3[] = [
      // Outer rect
      new THREE.Vector3(-1.6, -1.6, 0),
      new THREE.Vector3(1.6, -1.6, 0),
      new THREE.Vector3(1.6, -1.6, 0),
      new THREE.Vector3(1.6, 1.6, 0),
      new THREE.Vector3(1.6, 1.6, 0),
      new THREE.Vector3(-1.6, 1.6, 0),
      new THREE.Vector3(-1.6, 1.6, 0),
      new THREE.Vector3(-1.6, -1.6, 0),
      // Corner Ticks (TL, TR, BL, BR)
      new THREE.Vector3(-1.7, 1.6, 0),
      new THREE.Vector3(-1.5, 1.6, 0),
      new THREE.Vector3(-1.6, 1.7, 0),
      new THREE.Vector3(-1.6, 1.5, 0),
      new THREE.Vector3(1.5, 1.6, 0),
      new THREE.Vector3(1.7, 1.6, 0),
      new THREE.Vector3(1.6, 1.7, 0),
      new THREE.Vector3(1.6, 1.5, 0),
      new THREE.Vector3(-1.7, -1.6, 0),
      new THREE.Vector3(-1.5, -1.6, 0),
      new THREE.Vector3(-1.6, -1.7, 0),
      new THREE.Vector3(-1.6, -1.5, 0),
      new THREE.Vector3(1.5, -1.6, 0),
      new THREE.Vector3(1.7, -1.6, 0),
      new THREE.Vector3(1.6, -1.7, 0),
      new THREE.Vector3(1.6, -1.5, 0),
    ];

    // Grid hatch lines
    const gridPts: THREE.Vector3[] = [];
    const count = 7;
    const spacing = 0.16;
    for (let i = 0; i <= count; i++) {
      // Horizontal
      gridPts.push(new THREE.Vector3(-1.2, -1.2 + i * spacing, 0.01));
      gridPts.push(new THREE.Vector3(-0.1, -1.2 + i * spacing, 0.01));
      // Vertical
      gridPts.push(new THREE.Vector3(-1.2 + i * spacing, -1.2, 0.01));
      gridPts.push(new THREE.Vector3(-1.2 + i * spacing, -0.1, 0.01));
    }

    // Diagonal Constructivist Rays
    const rayPts: THREE.Vector3[] = [
      new THREE.Vector3(-1.1, 0.1, 0.03),
      new THREE.Vector3(-0.4, 0.8, 0.03),
      new THREE.Vector3(-0.95, -0.05, 0.03),
      new THREE.Vector3(-0.25, 0.65, 0.03),
      new THREE.Vector3(-0.8, -0.2, 0.03),
      new THREE.Vector3(-0.1, 0.5, 0.03),
    ];

    // Oxide Vermilion indicator axis
    const vermilionPts: THREE.Vector3[] = [
      new THREE.Vector3(0.75, -0.9, 0.18),
      new THREE.Vector3(0.75, -0.4, 0.18),
    ];

    return {
      frameLineGeo: new THREE.BufferGeometry().setFromPoints(framePts),
      gridLineGeo: new THREE.BufferGeometry().setFromPoints(gridPts),
      rayLineGeo: new THREE.BufferGeometry().setFromPoints(rayPts),
      vermilionAxisGeo: new THREE.BufferGeometry().setFromPoints(vermilionPts),
    };
  }, []);

  // Clean up geometries & materials on unmount
  useEffect(() => {
    return () => {
      frameLineGeo.dispose();
      gridLineGeo.dispose();
      rayLineGeo.dispose();
      vermilionAxisGeo.dispose();
      Object.values(materials).forEach((mat) => mat.dispose());
    };
  }, [frameLineGeo, gridLineGeo, rayLineGeo, vermilionAxisGeo, materials]);

  // Purposeful Architectural Entrance Sequence
  useEffect(() => {
    if (reducedMotion || !elementsGroupRef.current) return;

    const children = Array.from(elementsGroupRef.current.children);
    const ctx = gsap.context(() => {
      children.forEach((child, idx) => {
        const origZ = child.position.z;
        gsap.fromTo(
          child.position,
          { z: origZ - 0.4 },
          {
            z: origZ,
            duration: 1.1,
            delay: idx * 0.035,
            ease: MOTION_EASINGS.architectural,
          },
        );
        gsap.fromTo(
          child.scale,
          { x: 0.85, y: 0.85, z: 0.85 },
          {
            x: 1,
            y: 1,
            z: 1,
            duration: 1.1,
            delay: idx * 0.035,
            ease: MOTION_EASINGS.architectural,
          },
        );
      });
    });

    return () => ctx.revert();
  }, [reducedMotion]);

  // Subtle Parallax during near-stillness
  useFrame(() => {
    if (!isVisible || reducedMotion || !sceneGroupRef.current) return;

    // Restrained rotation (max ~0.045 rad, < 3 degrees)
    const targetRotX = -mouseNorm.current.y * 0.045;
    const targetRotY = mouseNorm.current.x * 0.055;

    sceneGroupRef.current.rotation.x = THREE.MathUtils.lerp(
      sceneGroupRef.current.rotation.x,
      targetRotX,
      0.06,
    );
    sceneGroupRef.current.rotation.y = THREE.MathUtils.lerp(
      sceneGroupRef.current.rotation.y,
      targetRotY,
      0.06,
    );
  });

  return (
    <group ref={sceneGroupRef}>
      {/* Precision Frame & Lines */}
      <lineSegments geometry={frameLineGeo} material={materials.lineInk} />
      <lineSegments geometry={gridLineGeo} material={materials.lineGrid} />
      <lineSegments geometry={rayLineGeo} material={materials.lineInk} />
      <lineSegments geometry={vermilionAxisGeo} material={materials.lineVermilion} />

      <group ref={elementsGroupRef}>
        {/* Upper Left Primary Disk */}
        <mesh position={[-0.75, 0.7, 0.08]} rotation={[Math.PI / 2, 0, 0]} material={materials.ink}>
          <cylinderGeometry args={[0.55, 0.55, 0.05, 48]} />
        </mesh>

        {/* Upper Center Monolith Column */}
        <mesh position={[-0.1, 0.8, 0.06]} material={materials.ink}>
          <boxGeometry args={[0.55, 1.35, 0.06]} />
        </mesh>

        {/* Upper Right Quadrant Arch */}
        <mesh
          position={[0.7, 0.65, 0.1]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          material={materials.ink}
        >
          <cylinderGeometry args={[0.7, 0.7, 0.06, 48, 1, false, 0, Math.PI / 2]} />
        </mesh>

        {/* Center Negative Space Arch Block */}
        <mesh position={[-0.1, -0.3, 0.04]} material={materials.inkMuted}>
          <boxGeometry args={[0.65, 0.65, 0.05]} />
        </mesh>
        <mesh
          position={[-0.1, -0.3, 0.07]}
          rotation={[Math.PI / 2, 0, 0]}
          material={materials.paper}
        >
          <cylinderGeometry args={[0.22, 0.22, 0.02, 32]} />
        </mesh>

        {/* Middle Right Semicircle */}
        <mesh
          position={[0.55, -0.05, 0.09]}
          rotation={[Math.PI / 2, 0, 0]}
          material={materials.ink}
        >
          <cylinderGeometry args={[0.5, 0.5, 0.05, 48, 1, false, 0, Math.PI]} />
        </mesh>

        {/* Far Right Monolith Block */}
        <mesh position={[1.05, -0.15, 0.05]} material={materials.ink}>
          <boxGeometry args={[0.45, 0.9, 0.06]} />
        </mesh>

        {/* Lower Left Quarter Arch */}
        <mesh
          position={[-0.85, -0.85, 0.08]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          material={materials.ink}
        >
          <cylinderGeometry args={[0.55, 0.55, 0.05, 48, 1, false, 0, Math.PI / 2]} />
        </mesh>

        {/* Lower Center Arch & Block */}
        <mesh
          position={[-0.15, -0.95, 0.07]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          material={materials.ink}
        >
          <cylinderGeometry args={[0.5, 0.5, 0.05, 48, 1, false, 0, Math.PI]} />
        </mesh>
        <mesh position={[0.3, -0.9, 0.06]} material={materials.ink}>
          <boxGeometry args={[0.45, 0.8, 0.05]} />
        </mesh>

        {/* Oxide Vermilion Selective Indicator Pin */}
        <mesh position={[0.75, -0.65, 0.2]} material={materials.vermilion}>
          <sphereGeometry args={[0.065, 32, 32]} />
        </mesh>

        {/* Architectural Crosshair Target in Lower Right */}
        <mesh
          position={[1.15, -1.15, 0.03]}
          rotation={[Math.PI / 2, 0, 0]}
          material={materials.lineInk}
        >
          <ringGeometry args={[0.06, 0.07, 32]} />
        </mesh>
      </group>
    </group>
  );
};
