import { useGLTF } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";
import { MeshStandardMaterial, Box3, Vector3 } from "three";

export default function Wall({
  url = "/models/WallModular.glb",
  start = [0, 0, 0],
  direction = "x", // "x" or "z"
  length = 1,
  height = 1,
  tileSize = 2,
}) {
  const { scene } = useGLTF(url);
  const instances = [];

  const box = new Box3().setFromObject(scene);
  const size = new Vector3();
  box.getSize(size);
  const wallHeight = size.y;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < height; j++) {
      const model = clone(scene);

      model.traverse((child) => {
        if (child.isMesh) {
          child.material = new MeshStandardMaterial({ color: "slategray" });
        }
      });

      const x = direction === "x" ? start[0] + i * tileSize : start[0];
      const z = direction === "z" ? start[2] + i * tileSize : start[2];
      const y = j * wallHeight;

      model.position.set(x, y, z);

      if (direction === "z") {
        model.rotation.y = Math.PI / 2;
      }

      instances.push(<primitive key={`wall-${x}-${y}-${z}`} object={model} />);
    }
  }

  return <>{instances}</>;
}
