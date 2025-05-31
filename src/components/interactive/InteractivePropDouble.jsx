import { useGLTF, Html, Text } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";
import { useMemo, useState } from "react";
import { useSpring, animated } from "@react-spring/three";
import { MeshStandardMaterial } from "three";

export default function InteractivePropDouble({
  quillUrl = "/models/Quill.glb",
  scrollUrl = "/models/Scroll.glb",
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  focusPosition = [3.8, 4.8, 0],
  focusRotation = [0, 0, 0],
  focusScale = 10,
  color,
  content,
  labelText,
  labelPosition = [0, 0.1, 0],
  labelRotation = [0, 0, 0],
}) {
  const { scene: quillScene } = useGLTF(quillUrl);
  const { scene: scrollScene } = useGLTF(scrollUrl);
  const [focused, setFocused] = useState(false);

  const quill = useMemo(() => clone(quillScene), [quillScene]);
  const scroll = useMemo(() => clone(scrollScene), [scrollScene]);

  if (color) {
    scroll.traverse((child) => {
      if (child.isMesh) {
        child.material = new MeshStandardMaterial({ color });
      }
    });
  }

  const spring = useSpring({
    position: focused ? focusPosition : position,
    rotation: focused ? focusRotation : rotation,
    scale: focused ? focusScale : scale,
    config: { mass: 1, tension: 170, friction: 22 },
  });

  return (
    <animated.group {...spring}>
      {!focused && (
        <>
          <primitive object={quill} onClick={() => setFocused(true)} />
          {labelText && (
            <Text
              position={labelPosition}
              rotation={labelRotation}
              fontSize={0.05}
              color="black"
              anchorX="center"
              anchorY="middle"
              material-opacity={0.8}
              material-transparent={true}
            >
              {labelText}
            </Text>
          )}
        </>
      )}

      {focused && (
        <>
          <primitive object={scroll} />
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
        </>
      )}
    </animated.group>
  );
}
