'use client';

import { useState, useEffect, useMemo, useRef, Suspense, useCallback, ReactNode } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { useXR } from '@react-three/xr';
import { Handle, HandleTarget } from '@react-three/handle';
import { useGLTF, OrbitControls, Center, Grid, Billboard } from '@react-three/drei';
import { Container, Text, withOpacity } from '@react-three/uikit';
import * as THREE from 'three';
import { modelRegistry } from '@/lib/3d/ModelLibrary';
import { meshTooltips } from '@/lib/constants/tooltips';
import { getVRColors, sanitizeVRText, VRColors } from './panels/theme';
import { CategoryPanel } from './panels/CategoryPanel';
import { GuidePanel } from './panels/GuidePanel';
import { InfoPanel } from './panels/InfoPanel';

// Target real-world size of the model's largest dimension, in meters
const MODEL_SIZE = 0.4;
// Where the model floats: roughly table height, in front of the viewer
const MODEL_POSITION: [number, number, number] = [0, 1.2, -0.8];
// How far a grabbed model can be shrunk/grown (two-hand pinch)
const SCALE_RANGE: [number, number] = [0.25, 4];

interface TooltipState {
  text: string;
  position: [number, number, number];
}

function useInXR() {
  return useXR((state) => state.session != null);
}

interface VRModelProps {
  url: string;
  resetKey: number;
  colors: VRColors;
  onTooltipChange: (tooltip: TooltipState | null) => void;
}

function VRModel({ url, resetKey, colors, onTooltipChange }: VRModelProps) {
  const { scene } = useGLTF(url);
  const spinRef = useRef<THREE.Group>(null);
  const hoveredNameRef = useRef<string | null>(null);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [held, setHeld] = useState(false);
  const inXR = useInXR();

  // Models in the registry are authored at wildly different scales; in VR one
  // unit is one meter, so normalize to a comfortable hand-held size.
  const normalizedScale = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    return maxDim > 0 ? MODEL_SIZE / maxDim : 1;
  }, [scene]);

  useEffect(() => {
    scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        if (Array.isArray(obj.material)) {
          obj.material.forEach(m => m.side = THREE.DoubleSide);
        } else {
          obj.material.side = THREE.DoubleSide;
        }
      }
    });
  }, [scene]);

  // Backface outline clone: an inverted (BackSide) copy of the model, scaled up
  // slightly, drawn behind the real mesh to form a silhouette. Built once per
  // model — it shares geometry with the real (cached) scene, so we never dispose
  // its geometry, only the throwaway basic materials.
  const outline = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.material = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide });
        obj.castShadow = false;
        obj.receiveShadow = false;
        // The silhouette must never intercept raycasts meant for the real model.
        obj.raycast = () => {};
      }
    });
    return clone;
  }, [scene]);

  const outlineColor = inXR ? (held ? colors.outlineHold : hovered ? colors.outlineHover : null) : null;

  useEffect(() => {
    if (!outlineColor) return;
    outline.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        (obj.material as THREE.MeshBasicMaterial).color.set(outlineColor);
      }
    });
  }, [outline, outlineColor]);

  useEffect(() => () => {
    outline.traverse((obj) => {
      if (obj instanceof THREE.Mesh) (obj.material as THREE.Material).dispose();
    });
  }, [outline]);

  // Auto-spin only on the flat-screen preview; in VR the user rotates the
  // model with their hands instead.
  useFrame((_, delta) => {
    if (spinRef.current && !paused && !inXR) {
      spinRef.current.rotation.y += delta * 0.25;
    }
  });

  const handlePointerMove = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    const name = e.object.name;
    if (name === hoveredNameRef.current) return;
    hoveredNameRef.current = name;

    const tooltipText = meshTooltips[name];
    if (tooltipText) {
      onTooltipChange({
        text: tooltipText,
        position: [e.point.x, e.point.y + 0.06, e.point.z],
      });
      setPaused(true);
    } else {
      onTooltipChange(null);
      setPaused(false);
    }
  }, [onTooltipChange]);

  const handlePointerOut = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    hoveredNameRef.current = null;
    onTooltipChange(null);
    setPaused(false);
  }, [onTooltipChange]);

  const handleHoverOver = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(true);
  }, []);

  const handleHoverOut = useCallback((e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(false);
  }, []);

  const content = (
    <group
      ref={spinRef}
      scale={normalizedScale}
      onPointerOver={handleHoverOver}
      onPointerOut={handleHoverOut}
    >
      <Center>
        <primitive
          object={scene}
          onPointerMove={handlePointerMove}
          onPointerOut={handlePointerOut}
        />
      </Center>
      {outlineColor && (
        <Center>
          <primitive object={outline} scale={1.06} dispose={null} />
        </Center>
      )}
    </group>
  );

  return (
    <group position={MODEL_POSITION}>
      {/* Remounting on resetKey restores the handle's position/rotation/scale */}
      <group key={resetKey}>
        <HandleTarget>
          {inXR ? (
            // Grab with controller grip / hand pinch to move and rotate;
            // grab with both hands and pull apart / together to scale.
            <Handle
              targetRef="from-context"
              translate={true}
              rotate={true}
              scale={{ uniform: true, x: SCALE_RANGE, y: SCALE_RANGE, z: SCALE_RANGE }}
              multitouch={true}
              apply={(state, target) => {
                if (state.first) setHeld(true);
                else if (state.last) setHeld(false);
                target.position.copy(state.current.position);
                target.quaternion.copy(state.current.quaternion);
                target.scale.copy(state.current.scale);
              }}
            >
              {content}
              {!held && (
                <group position={[0, 0.3, 0]}>
    <Billboard>
                    <Container
                      pixelSize={0.001}
                      paddingX={6}
                      paddingY={3}
                      borderRadius={4}
                      backgroundColor={'#ffffff'}
                      borderWidth={0}
                    >
                      <Text fontSize={10} color={colors.text}>
                        Hold to Grab
                      </Text>
                    </Container>
                  </Billboard>
                </group>
              )}
            </Handle>
          ) : (
            content
          )}
        </HandleTarget>
      </group>
    </group>
  );
}

// Orbit controls for the flat-screen preview; disabled while an XR session
// is presenting (the headset controls the camera then).
function DesktopControls() {
  const inXR = useInXR();
  if (inXR) return null;

  return (
    <OrbitControls
      target={MODEL_POSITION}
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
      minDistance={0.2}
      maxDistance={4}
    />
  );
}

interface MovablePanelProps {
  position: [number, number, number];
  rotation: [number, number, number];
  barY: number;
  barColor: string;
  children: ReactNode;
}

// Wraps a uikit panel; in VR a grab bar appears below it so the user can
// pull the panel closer or push it away. Orientation stays fixed.
function MovablePanel({ position, rotation, barY, barColor, children }: MovablePanelProps) {
  const inXR = useInXR();

  return (
    <group position={position} rotation={rotation}>
      <HandleTarget>
        {children}
        {inXR && (
          <Handle targetRef="from-context" translate={true} rotate={false} scale={false} multitouch={false}>
            <mesh position={[0, barY, 0]}>
              <boxGeometry args={[0.16, 0.014, 0.014]} />
              <meshBasicMaterial color={barColor} />
            </mesh>
          </Handle>
        )}
      </HandleTarget>
    </group>
  );
}

interface VRWorkbenchProps {
  isDark: boolean;
  selectedId: string;
  onModelSelect: (id: string) => void;
  onExitVR: () => void;
}

export function VRWorkbench({ isDark, selectedId, onModelSelect, onExitVR }: VRWorkbenchProps) {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [resetKey, setResetKey] = useState(0);
  const colors = useMemo(() => getVRColors(isDark), [isDark]);
  const inXR = useInXR();

  const selectedModel = modelRegistry[selectedId] ?? null;
  const hoveredPartName = tooltip ? tooltip.text.split(' - ')[0] : null;

  const handleModelSelect = useCallback((id: string) => {
    setTooltip(null);
    onModelSelect(id);
  }, [onModelSelect]);

  const handleReset = useCallback(() => {
    setTooltip(null);
    setResetKey((k) => k + 1);
  }, []);

  const handleExit = useCallback(() => {
    setTooltip(null);
    onExitVR();
  }, [onExitVR]);

  return (
    <>
      <ambientLight intensity={3} />
      <directionalLight position={[3, 6, 3]} intensity={2.5} />
      <directionalLight position={[-3, 5, 2]} intensity={2} />
      <pointLight position={[0, 3, 0]} intensity={1} />

      <Grid
        cellSize={0.1}
        sectionSize={0.5}
        cellThickness={1}
        sectionThickness={1.5}
        infiniteGrid
        fadeDistance={12}
        fadeStrength={3}
        sectionColor={isDark ? '#c7d4e4' : '#a0b8d0'}
        cellColor={isDark ? '#adb8c4' : '#ffffff'}
      />

      <DesktopControls />

      {/* Category / model menu — left of the model, angled toward the user */}
      <MovablePanel position={[-0.85, 1.35, -0.6]} rotation={[0, Math.PI / 4.5, 0]} barY={-0.45} barColor={colors.accent}>
        <CategoryPanel
          colors={colors}
          selectedId={selectedId}
          onModelSelect={handleModelSelect}
        />
      </MovablePanel>

      {/* Part info + trivia — right of the model, angled toward the user */}
      <MovablePanel position={[0.85, 1.35, -0.6]} rotation={[0, -Math.PI / 4.5, 0]} barY={-0.45} barColor={colors.accent}>
        <InfoPanel
          colors={colors}
          modelUrl={selectedModel?.url ?? null}
          hoveredPartName={hoveredPartName}
        />
      </MovablePanel>

      {/* Guide — above the model; positive X rotation pitches the face down toward the viewer */}
      <MovablePanel position={[0, 1.7, -1.1]} rotation={[0.4, 0, 0]} barY={-0.3} barColor={colors.accent}>
        <GuidePanel colors={colors} modelUrl={selectedModel?.url ?? null} />
      </MovablePanel>

      {/* Reset button — small pill below the model */}
      <group position={[0, 0.82, -0.72]} rotation={[-0.35, 0, 0]}>
        <Container
          pixelSize={0.0015}
          paddingX={14}
          paddingY={8}
          borderRadius={10}
          cursor="pointer"
          backgroundColor={withOpacity(colors.panelBg, 0.9)}
          borderWidth={1.5}
          borderColor={colors.panelBorder}
          hover={{ backgroundColor: colors.rowHoverBg }}
          onClick={handleReset}
        >
          <Text fontSize={12.5} fontWeight={700} color={colors.accent}>
            Reset Model
          </Text>
        </Container>
      </group>

      {/* Exit VR button — only shown inside a session, since it ends the XR
          session and would be meaningless (and unreachable) on the flat preview */}
      {inXR && (
        <group position={[0, 0.62, -0.72]} rotation={[-0.35, 0, 0]}>
          <Container
            pixelSize={0.0015}
            paddingX={14}
            paddingY={8}
            borderRadius={10}
            cursor="pointer"
            backgroundColor={withOpacity(colors.panelBg, 0.9)}
            borderWidth={1.5}
            borderColor={colors.panelBorder}
            hover={{ backgroundColor: colors.rowHoverBg }}
            onClick={handleExit}
          >
            <Text fontSize={12.5} fontWeight={700} color={colors.warnText}>
              Exit VR
            </Text>
          </Container>
        </group>
      )}

      {/* The component itself */}
      {selectedModel && (
        <Suspense fallback={null}>
          <VRModel
            key={selectedModel.id}
            url={selectedModel.url}
            resetKey={resetKey}
            colors={colors}
            onTooltipChange={setTooltip}
          />
        </Suspense>
      )}

      {/* Mesh tooltip — billboarded card near the hit point */}
      {tooltip && (
        <group position={tooltip.position}>
          <Billboard>
            <Container
              pixelSize={0.0015}
              maxWidth={240}
              padding={8}
              borderRadius={10}
              backgroundColor={withOpacity(colors.panelBg, 0.95)}
              borderWidth={1.5}
              borderColor={colors.accent}
            >
              <Text fontSize={11.5} color={colors.text}>
                {sanitizeVRText(tooltip.text)}
              </Text>
            </Container>
          </Billboard>
        </group>
      )}
    </>
  );
}
