import { useGLTF } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";
import { MeshStandardMaterial } from "three";

export default function Wall({
  url = "/models/Wall.glb",
  start = [0, 0, 0],
  direction = "x", // "x" or "z"
  length = 1,
  height = 1,
  color = "white",
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
      const rotY = direction === "z" ? Math.PI / 2 : 0;

      wall.position.set(x, y, z);
      wall.rotation.y = rotY;

      walls.push(<primitive key={`${i}-${j}`} object={wall} />);
    }
  }

  return <>{walls}</>;
}
