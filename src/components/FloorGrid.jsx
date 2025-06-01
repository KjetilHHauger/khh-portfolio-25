import { useGLTF } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";
import { MeshStandardMaterial } from "three";
import { useMemo } from "react";

export default function FloorGrid({ url = "/models/FloorTile.glb", color }) {
  const { scene } = useGLTF(url);

  const floors = useMemo(() => {
    const gridSize = 9;
    const tileSize = 2;
    const offset = (gridSize * tileSize) / 2;
    const instances = [];

    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        const model = clone(scene);

        model.traverse((child) => {
          if (child.isMesh) {
            if (color) {
              child.material = new MeshStandardMaterial({ color });
            }
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        const posX = x * tileSize - offset;
        const posZ = z * tileSize - offset;
        model.position.set(posX, 0, posZ);

        instances.push(<primitive key={`${x}-${z}`} object={model} />);
      }
    }

    return instances;
  }, [scene, color]);

  return <>{floors}</>;
}
