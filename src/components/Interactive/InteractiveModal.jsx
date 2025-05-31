import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

export default function InteractiveModal({
  url,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  onClick,
}) {
  const { scene } = useGLTF(url);
  const model = useMemo(() => clone(scene), [scene]);

  return (
    <primitive
      object={model}
      position={position}
      rotation={rotation.map((deg) => (deg * Math.PI) / 180)}
      scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
      onClick={onClick}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default";
      }}
    />
  );
}
