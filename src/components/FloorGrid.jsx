import { useGLTF } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";
import { Box3, Vector3, MeshStandardMaterial } from "three";

export default function FloorGrid({
  url = "/models/ModularDungeons/FloorTile.glb",
}) {
  const { scene } = useGLTF(url);

  const createTile = (x, z) => {
    const model = clone(scene);

    model.position.set(x, 0, z);
    return <primitive key={`${x}-${z}`} object={model} />;
  };

  const floors = [];
  const gridSize = 20;
  const tileSize = 2;
  const offset = (gridSize * tileSize) / 2;

  for (let x = 0; x < gridSize; x++) {
    for (let z = 0; z < gridSize; z++) {
      const posX = x * tileSize - offset;
      const posZ = z * tileSize - offset;
      floors.push(createTile(posX, posZ));
    }
  }

  return <>{floors}</>;
}
