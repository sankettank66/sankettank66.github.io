"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import type { ArchitectureLayer } from "../data/expertise";

type PointerState = {
  current: { x: number; y: number };
};

const LAYER_Y = [1.95, 0.65, -0.65, -1.95];

function Spine({ dark }: { dark: boolean }) {
  const positions = useMemo(
    () =>
      new Float32Array([
        -2.48, 2.18, 0, -2.48, -2.18, 0, 2.48, 2.18, 0, 2.48, -2.18, 0,
      ]),
    [],
  );
  const color = dark ? "#f1f2ea" : "#11130f";

  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <lineBasicMaterial color={color} transparent opacity={0.22} />
    </lineSegments>
  );
}

function Layer({
  y,
  active,
  dark,
  geometry,
}: {
  y: number;
  active: boolean;
  dark: boolean;
  geometry: THREE.BoxGeometry;
}) {
  const color = dark ? "#f1f2ea" : "#11130f";
  const accent = dark ? "#ff7a3c" : "#d93a00";

  return (
    <group position={[0, y, active ? 0.16 : 0]}>
      <mesh geometry={geometry}>
        <meshBasicMaterial
          color={active ? accent : color}
          transparent
          opacity={active ? 0.16 : 0.045}
          depthWrite={false}
        />
      </mesh>
      <lineSegments>
        <edgesGeometry args={[geometry]} />
        <lineBasicMaterial
          color={active ? accent : color}
          transparent
          opacity={active ? 0.95 : 0.48}
        />
      </lineSegments>
      <mesh position={[2.55, 0, 0]}>
        <boxGeometry args={[0.055, 0.055, 0.055]} />
        <meshBasicMaterial color={active ? accent : color} />
      </mesh>
      <mesh position={[-2.55, 0, 0]}>
        <boxGeometry args={[0.055, 0.055, 0.055]} />
        <meshBasicMaterial color={active ? accent : color} transparent opacity={0.55} />
      </mesh>
    </group>
  );
}

function Stack({
  layers,
  active,
  dark,
  pointer,
}: {
  layers: ArchitectureLayer[];
  active: number;
  dark: boolean;
  pointer: PointerState;
}) {
  const group = useRef<THREE.Group>(null);
  const geometry = useMemo(() => new THREE.BoxGeometry(4.75, 0.52, 0.3), []);
  const { gl, invalidate } = useThree();

  useEffect(() => {
    return () => geometry.dispose();
  }, [geometry]);

  useEffect(() => {
    const canvas = gl.domElement;

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.current.y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      invalidate();
    };

    const onLeave = () => {
      pointer.current.x = 0;
      pointer.current.y = 0;
      invalidate();
    };

    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [gl, invalidate, pointer]);

  useEffect(() => {
    invalidate();
  }, [active, dark, invalidate]);

  useFrame((state, delta) => {
    if (!group.current) return;
    const step = Math.min(delta, 0.05);
    const ease = 1 - Math.exp(-7 * step);
    const targetY = 0.28 + pointer.current.x * 0.2;
    const targetX = -0.06 + pointer.current.y * 0.08;

    group.current.rotation.y += (targetY - group.current.rotation.y) * ease;
    group.current.rotation.x += (targetX - group.current.rotation.x) * ease;

    if (
      Math.abs(targetY - group.current.rotation.y) > 0.0005 ||
      Math.abs(targetX - group.current.rotation.x) > 0.0005
    ) {
      state.invalidate();
    }
  });

  return (
    <group ref={group} rotation={[-0.06, 0.28, 0]}>
      <Spine dark={dark} />
      {layers.map((layer, index) => (
        <Layer
          key={layer.id}
          y={LAYER_Y[index]}
          active={active === index}
          dark={dark}
          geometry={geometry}
        />
      ))}
    </group>
  );
}

export default function ArchitectureCanvas({
  layers,
  active,
  dark,
  onReady,
}: {
  layers: ArchitectureLayer[];
  active: number;
  dark: boolean;
  onReady?: () => void;
}) {
  const pointer = useRef({ x: 0, y: 0 });

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 9.5], fov: 32 }}
      frameloop="demand"
      onCreated={() => onReady?.()}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Stack layers={layers} active={active} dark={dark} pointer={pointer} />
    </Canvas>
  );
}
