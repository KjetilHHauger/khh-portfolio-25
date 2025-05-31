import { useTexture } from "@react-three/drei";

export default function ImagePlaneOne({
  imageUrl,
  visible = true,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
}) {
  const texture = useTexture(imageUrl);

  if (!visible) return null;

  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}
