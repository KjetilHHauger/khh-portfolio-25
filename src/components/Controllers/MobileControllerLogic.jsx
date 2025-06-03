import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function MobileControlLogic({ movement, look }) {
  const { camera } = useThree();
  const pitch = useRef(0);

  useFrame(() => {
    const dir = new THREE.Vector3();
    camera.getWorldDirection(dir);
    dir.y = 0;
    dir.normalize();

    if (movement.forward) camera.position.add(dir.clone().multiplyScalar(0.1));
    if (movement.backward)
      camera.position.add(dir.clone().multiplyScalar(-0.1));

    const { angle, force } = look.current || {};
    if (force > 0) {
      const x = Math.cos(angle) * force;
      const y = -Math.sin(angle) * force;

      camera.rotation.y -= x * 0.02;

      pitch.current = THREE.MathUtils.clamp(
        pitch.current - y * 0.02,
        -Math.PI / 2 + 0.1,
        Math.PI / 2 - 0.1
      );
      camera.rotation.x = pitch.current;
    }
  });

  return null;
}
