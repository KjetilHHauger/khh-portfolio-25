import { useGLTF, Html } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";
import { useMemo, useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/three";
import { MeshStandardMaterial } from "three";

export default function InteractivePropScroll({
  url,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  focusPosition = [3.8, 4.8, 0],
  focusRotation = [0, 0, 0],
  focusScale = 10,
  color,
  content,
}) {
  const { scene } = useGLTF(url);
  const cloned = useMemo(() => clone(scene), [scene]);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (!color) return;

    cloned.traverse((child) => {
      if (child.isMesh) {
        child.material = new MeshStandardMaterial({ color });
      }
    });
  }, [cloned, color]);

  const {
    position: pos,
    rotation: rot,
    scale: scl,
  } = useSpring({
    position: focused ? focusPosition : position,
    rotation: focused ? focusRotation : rotation,
    scale: focused ? focusScale : scale,
    config: { mass: 1, tension: 170, friction: 22 },
  });

  return (
    <animated.group position={pos} rotation={rot} scale={scl}>
      <primitive object={cloned} onClick={() => setFocused(!focused)} />

      {focused && (
        <Html lang="en" transform occlude distanceFactor={0.5}>
          <div
            style={{
              background: "none",
              padding: "1rem 2rem",
            }}
          >
            {content}
            <button
              onClick={() => setFocused(false)}
              style={{ marginTop: "1rem" }}
            >
              Close
            </button>
          </div>
        </Html>
      )}
    </animated.group>
  );
}
