import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

export default function InteractiveModal({
  url,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  onClick,
  hitboxPosition = [0, 0.7, 0.2],
  hitboxScale = [1.8, 2, 0.5],
  hitboxRotation = [0, 0, 0],
}) {
  const { scene } = useGLTF(url);
  const model = useMemo(() => clone(scene), [scene]);

  const toRadians = (arr) => arr.map((deg) => (deg * Math.PI) / 180);

  return (
    <group
      position={position}
      rotation={toRadians(rotation)}
      scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
    >
      <mesh
        position={hitboxPosition}
        rotation={toRadians(hitboxRotation)}
        scale={hitboxScale}
        onClick={onClick}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "default")}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      <primitive
        object={model}
        onClick={onClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
        }}
      />
    </group>
  );
}
