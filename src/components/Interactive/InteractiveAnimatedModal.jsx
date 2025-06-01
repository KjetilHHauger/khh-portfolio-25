import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

export default function InteractiveAnimatedModal({
  url,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  onClick,
  hitboxPosition = [0, 1, 0],
  hitboxScale = [1, 2, 1],
  hitboxRotation = [0, 0, 0],
}) {
  const { scene, animations } = useGLTF(url);
  const cloned = useRef();
  if (!cloned.current) cloned.current = clone(scene);

  const modelRef = useRef();
  const [current, setCurrent] = useState("idle");

  const { actions } = useAnimations(animations, modelRef);

  useEffect(() => {
    const idle = actions["CharacterArmature|Idle"];
    const wave = actions["CharacterArmature|Wave"];

    if (!idle || !wave) return;

    let timeout;
    let unmounted = false;

    const playIdle = () => {
      if (unmounted) return;
      idle.reset().fadeIn(0.5).play();
      idle.setLoop(THREE.LoopRepeat);
      setCurrent("idle");

      timeout = setTimeout(() => {
        if (unmounted) return;
        idle.fadeOut(0.5);
        playWave();
      }, 10000);
    };

    const playWave = () => {
      wave.reset().fadeIn(0.5).play();
      wave.setLoop(THREE.LoopOnce);
      wave.clampWhenFinished = true;
      setCurrent("wave");

      wave.getMixer().addEventListener("finished", onWaveFinished);
    };

    const onWaveFinished = () => {
      wave.getMixer().removeEventListener("finished", onWaveFinished);
      wave.fadeOut(0.5);
      playIdle();
    };

    playIdle();

    return () => {
      unmounted = true;
      clearTimeout(timeout);
      idle?.stop();
      wave?.stop();
      wave?.getMixer().removeEventListener("finished", onWaveFinished);
    };
  }, [actions]);

  useEffect(() => {
    if (animations.length > 0 && actions) {
      console.log("Available animations:", Object.keys(actions));
    }
  }, [animations, actions]);

  return (
    <group
      position={position}
      rotation={rotation.map((r) => (r * Math.PI) / 180)}
      scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
    >
      <primitive object={cloned.current} ref={modelRef} />

      <mesh
        position={hitboxPosition}
        scale={hitboxScale}
        rotation={hitboxRotation.map((r) => (r * Math.PI) / 180)}
        onClick={onClick}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "default")}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
    </group>
  );
}
