import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CameraLimiter({
  bounds = {
    x: [-5, 5],
    y: [1, 10],
    z: [-5, 2],
  },
}) {
  const { camera } = useThree();

  useFrame(() => {
    camera.position.x = THREE.MathUtils.clamp(camera.position.x, ...bounds.x);
    camera.position.y = THREE.MathUtils.clamp(camera.position.y, ...bounds.y);
    camera.position.z = THREE.MathUtils.clamp(camera.position.z, ...bounds.z);
  });

  return null;
}
