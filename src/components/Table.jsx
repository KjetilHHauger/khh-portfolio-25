// Table.jsx
import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

export default function Table({
  url = "/models/ModularDungeons/TableBig.glb",
  position = [0, 0, 0],
  rotation = 0,
  scale = 1,
}) {
  const { scene } = useGLTF(url);

  const cloned = useMemo(() => clone(scene), [scene]);

  return (
    <primitive
      object={cloned}
      position={position}
      rotation={[0, rotation, 0]}
      scale={scale}
    />
  );
}
