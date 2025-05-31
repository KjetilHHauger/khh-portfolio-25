import { useGLTF } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";
import { MeshStandardMaterial, Euler } from "three";

export default function WallDoorWay({
  url = "/models/WallDoorWay.glb",
  start = [0, 0, 0],
  direction = "z", // "x" or "z"
  length = 1,
  height = 1,
  color = "white",
  scale = [1, 1, 1],
  rotation = [0, 0, 0],
}) {
  const { scene } = useGLTF(url);
  const tileSize = 1;
  const walls = [];

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < height; j++) {
      const wall = clone(scene);

      wall.traverse((child) => {
        if (child.isMesh) {
          child.material = new MeshStandardMaterial({
            color,
            roughness: 1,
            metalness: 0,
          });
        }
      });

      const x = direction === "x" ? start[0] + i * tileSize : start[0];
      const y = start[1] + j * tileSize;
      const z = direction === "z" ? start[2] + i * tileSize : start[2];
      const baseRotY = direction === "z" ? Math.PI / 2 : 0;

      wall.position.set(x, y, z);
      wall.rotation.set(rotation[0], baseRotY + rotation[1], rotation[2]);
      wall.scale.set(...scale);

      walls.push(<primitive key={`${i}-${j}`} object={wall} />);
    }
  }

  return <>{walls}</>;
}
