import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

const toRad = (deg) => (deg * Math.PI) / 180;

export default function Prop({
  url,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  rotationDeg,
  scale = 1,
}) {
  const { scene } = useGLTF(url);
  const cloned = useMemo(() => clone(scene), [scene]);

  const finalRotation = rotationDeg ? rotationDeg.map(toRad) : rotation;

  return (
    <primitive
      object={cloned}
      position={position}
      rotation={finalRotation}
      scale={scale}
    />
  );
}
