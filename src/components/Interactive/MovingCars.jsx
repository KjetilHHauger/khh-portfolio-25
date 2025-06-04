import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

export default function MovingCars({
  model,
  speed = 5,
  direction = "forward",
  xOffset = 0,
  y = -1,
  x = 24,
  startZ = -20,
  endZ = 40,
}) {
  const clonedModel = useMemo(() => clone(model), [model]);
  const ref = useRef();

  const initialZ = direction === "forward" ? startZ : endZ;
  const movementSign = direction === "forward" ? 1 : -1;
  const finalZ = direction === "forward" ? endZ : startZ;
  const rotationY = direction === "forward" ? 0 : Math.PI;

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.position.z += speed * delta * movementSign;
      const passed =
        (direction === "forward" && ref.current.position.z > finalZ) ||
        (direction === "backward" && ref.current.position.z < finalZ);
      if (passed) {
        ref.current.visible = false;
      }
    }
  });

  return (
    <primitive
      object={clonedModel}
      ref={ref}
      position={[x + xOffset, y, initialZ]} // ✅ THIS is the lane switch!
      scale={[0.5, 0.5, 0.5]}
      rotation={[0, rotationY, 0]}
    />
  );
}
