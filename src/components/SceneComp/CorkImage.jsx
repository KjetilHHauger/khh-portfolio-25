import { useEffect, useMemo, useState } from "react";
import * as THREE from "three";

export default function CorkImage({
  imageUrl,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  size = [0.6, 0.6],
  setModalContent,
}) {
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      imageUrl,
      (tex) => {
        tex.encoding = THREE.sRGBEncoding;
        setTexture(tex);
      },
      undefined,
      (err) => console.error("Failed to load image:", err)
    );
  }, [imageUrl]);

  const radRotation = rotation.map((r) => (r * Math.PI) / 180);

  if (!texture) return null;

  return (
    <mesh
      position={position}
      rotation={radRotation}
      onClick={(e) => {
        e.stopPropagation();

        setTimeout(() => {
          document.exitPointerLock?.();
        }, 10);

        setModalContent?.(
          <div className="w-full max-w-2xl mx-auto p-4 text-center">
            <img
              src={imageUrl}
              alt="Pinned image"
              className="rounded shadow max-w-full mx-auto"
            />
          </div>
        );
      }}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "default")}
    >
      <planeGeometry args={size} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}
