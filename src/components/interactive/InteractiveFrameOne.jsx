import { useGLTF, Html } from "@react-three/drei";
import { useMemo, useState } from "react";
import { useSpring, animated } from "@react-spring/three";
import { MeshStandardMaterial, PlaneGeometry } from "three";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

export default function InteractiveFrameOne({
  url = "/models/Frame.glb",
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  focusScale = 8,
  content,
  focused,
  setFocused,
  focusRotation = rotation,
  focusPosition = position,
  contentPosition = [0, 0, 0.1],
  contentRotation = [0, 0, 0],
}) {
  const degToRad = (deg) => (deg * Math.PI) / 180;

  const { scene } = useGLTF(url);
  const model = useMemo(() => {
    const cloned = clone(scene);
    cloned.traverse((child) => {
      if (child.isMesh) {
        child.material = new MeshStandardMaterial({ color: "black" });
      }
    });
    return cloned;
  }, [scene]);

  const spring = useSpring({
    position: focused ? focusPosition : position,
    scale: focused ? focusScale : scale,
    rotation: (focused ? focusRotation : rotation).map(degToRad),
    config: { mass: 1, tension: 180, friction: 22 },
  });

  return (
    <>
      <animated.group {...spring}>
        <primitive object={model} onClick={() => setFocused(true)} />
      </animated.group>

      {focused && (
        <Html
          transform
          distanceFactor={1.5}
          position={contentPosition}
          rotation={contentRotation.map(degToRad)}
        >
          <div className="p-4 bg-white text-black rounded w-[300px] h-[300px]">
            {content}
            <button
              onClick={() => setFocused(false)}
              className="mt-4 px-2 py-1 border"
            >
              Close
            </button>
          </div>
        </Html>
      )}
    </>
  );
}
