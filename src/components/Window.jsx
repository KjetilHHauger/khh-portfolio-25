import * as THREE from "three";

export default function Window({
  position = [0, 5, 0],
  scale = [1, 1, 1],
  size = [2, 4],
  frameThickness = 0.1,
  rotation = [0, -90, 0],
}) {
  const [width, height] = size;
  const thickness = frameThickness;

  const degToRad = (deg) => (deg * Math.PI) / 180;
  const radRotation = rotation.map(degToRad);

  return (
    <group position={position} rotation={radRotation} scale={scale}>
      {/* Top Frame */}
      <mesh position={[0, height / 2 - thickness / 2, 0]}>
        <boxGeometry args={[width, thickness, 0.1]} />
        <meshStandardMaterial color="#555" />
      </mesh>

      {/* Bottom Frame */}
      <mesh position={[0, -height / 2 + thickness / 2, 0]}>
        <boxGeometry args={[width, thickness, 0.1]} />
        <meshStandardMaterial color="#555" />
      </mesh>

      {/* Left Frame */}
      <mesh position={[-width / 2 + thickness / 2, 0, 0]}>
        <boxGeometry args={[thickness, height, 0.1]} />
        <meshStandardMaterial color="#555" />
      </mesh>

      {/* Right Frame */}
      <mesh position={[width / 2 - thickness / 2, 0, 0]}>
        <boxGeometry args={[thickness, height, 0.1]} />
        <meshStandardMaterial color="#555" />
      </mesh>

      {/* Glass */}
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[width - thickness * 2, height - thickness * 2]} />
        <meshStandardMaterial color="#aaccee" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}
