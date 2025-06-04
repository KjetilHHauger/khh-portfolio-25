export default function MovementBoundsHelper({ bounds }) {
  const xSize = bounds.x[1] - bounds.x[0];
  const zSize = bounds.z[1] - bounds.z[0];
  const centerX = (bounds.x[0] + bounds.x[1]) / 2;
  const centerZ = (bounds.z[0] + bounds.z[1]) / 2;

  return (
    <mesh position={[centerX, bounds.y[0], centerZ]}>
      <boxGeometry args={[xSize, 0.1, zSize]} />
      <meshBasicMaterial color="white" transparent opacity={0.5} />
    </mesh>
  );
}

//  <MovementBoundsHelper
//       bounds={{ x: [-10, 8], y: [2, 10], z: [-10, 8] }}
//     />
