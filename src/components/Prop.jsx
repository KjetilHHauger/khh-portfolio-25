import { useGLTF } from "@react-three/drei";
import { useMemo, useEffect } from "react";
import { MeshStandardMaterial, MathUtils } from "three";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

export default function Prop({
  url,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  color,
}) {
  const { scene } = useGLTF(url);
  const cloned = useMemo(() => clone(scene), [scene]);

  useEffect(() => {
    if (color) {
      cloned.traverse((child) => {
        if (child.isMesh) {
          child.material = new MeshStandardMaterial({
            color,
            roughness: 1,
            metalness: 0,
          });
        }
      });
    }
  }, [cloned, color]);

  const degToRad = (deg) => MathUtils.degToRad(deg);
  const rotationRad = rotation.map(degToRad);

  const scaleValue = Array.isArray(scale) ? scale : [scale, scale, scale];

  return (
    <primitive
      object={cloned}
      position={position}
      rotation={rotationRad}
      scale={scaleValue}
    />
  );
}
