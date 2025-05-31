import { useGLTF } from "@react-three/drei";
import { useMemo, useEffect } from "react";
import { MeshStandardMaterial } from "three";
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
          console.log(child.name); // Log the name of each mesh
          child.material = new MeshStandardMaterial({
            color: color || "white",
            roughness: 1,
            metalness: 0,
          });
        }
      });
    }
  }, [cloned, color]);

  return (
    <primitive
      object={cloned}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
}
