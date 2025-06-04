import { useMemo } from "react";
import * as THREE from "three";

export default function MonitorScreen({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  size = [1.8, 1],
  imageUrl,
}) {
  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    const tex = loader.load(imageUrl);
    tex.encoding = THREE.sRGBEncoding;
    return tex;
  }, [imageUrl]);

  const radRotation = rotation.map((deg) => (deg * Math.PI) / 180);

  return (
    <mesh position={position} rotation={radRotation}>
      <planeGeometry args={size} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}
