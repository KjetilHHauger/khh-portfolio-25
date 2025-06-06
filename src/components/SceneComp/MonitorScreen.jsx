import { useEffect, useState } from "react";
import * as THREE from "three";

export default function MonitorScreen({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  size = [1.8, 1],
  imageUrl,
}) {
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      imageUrl,
      (loadedTexture) => {
        loadedTexture.encoding = THREE.sRGBEncoding;
        setTexture(loadedTexture);
      },
      undefined,
      (err) => console.error("Texture load error:", err)
    );
  }, [imageUrl]);

  const radRotation = rotation.map((deg) => (deg * Math.PI) / 180);

  if (!texture) return null;

  return (
    <mesh position={position} rotation={radRotation} renderOrder={1}>
      <planeGeometry args={size} />
      <meshBasicMaterial map={texture} toneMapped={false} depthWrite={false} />
    </mesh>
  );
}
