import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function MovementLogic({ forward, backward, speed = 0.1 }) {
  const { camera } = useThree();

  useFrame(() => {
    const dir = new THREE.Vector3();
    camera.getWorldDirection(dir);
    dir.y = 0;
    dir.normalize();

    if (forward) camera.position.add(dir.clone().multiplyScalar(speed));
    if (backward) camera.position.add(dir.clone().multiplyScalar(-speed));
  });

  return null;
}
