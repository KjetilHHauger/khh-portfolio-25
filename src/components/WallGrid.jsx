import { useGLTF } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";
import { MeshStandardMaterial, Box3, Vector3 } from "three";

export default function WallGrid({ url = "/models/Wall.glb" }) {
  const { scene } = useGLTF(url);

  const createWall = (x, z, rotation = 0) => {
    const model = clone(scene);

    model.traverse((child) => {
      if (child.isMesh) {
        child.material = new MeshStandardMaterial({ color: "darkslategray" });
      }
    });

    model.position.set(x, 0, z);
    model.rotation.y = rotation;

    return <primitive key={`${x}-${z}`} object={model} />;
  };

  const tileSize = 2;
  const gridSize = 20;
  const offset = (gridSize * tileSize) / 2;
  const walls = [];

  // Horizontal border walls (top and bottom)
  for (let x = 0; x < gridSize; x++) {
    const posX = x * tileSize - offset;
    walls.push(createWall(posX, -offset)); // bottom
    walls.push(createWall(posX, offset - tileSize)); // top
  }

  // Vertical border walls (left and right)
  for (let z = 0; z < gridSize; z++) {
    const posZ = z * tileSize - offset;
    walls.push(createWall(-offset, posZ, Math.PI / 2)); // left wall
    walls.push(createWall(offset - tileSize, posZ, Math.PI / 2)); // right wall
  }

  return <>{walls}</>;
}
