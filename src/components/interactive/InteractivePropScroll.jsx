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
  children,
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
      {!focused && children}

      {focused && (
        <Html
          lang="en"
          transform
          occlude
          distanceFactor={0.5}
          position={[0, 0.05, 0]}
        >
          <div className=" p-4 rounded w-[450px] h-[400px]  text-black hover:text-gray-600">
            {content}
            <button
              className="mt-4 px-2 py-1 "
              onClick={() => setFocused(false)}
            >
              Close
            </button>
          </div>
        </Html>
      )}
    </animated.group>
  );
}
