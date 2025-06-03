import { useThree, useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

export default function MobileControlLogic({
  movement,
  look,
  sensitivity = 1,
  lockVertical = true,
  cameraRef,
  rigRef,
}) {
  const { scene } = useThree();

  useEffect(() => {
    const cam = cameraRef.current;
    const rig = rigRef.current;
    if (!cam || !rig) return;

    cam.position.set(0, 0, 0);
    rig.position.set(0, 5, 0);
    rig.add(cam);

    return () => rig.remove(cam);
  }, [cameraRef, rigRef, scene]);

  const ROTATION_SPEED = 0.008 * sensitivity;
  const PITCH_SPEED = 0.005 * sensitivity;

  useFrame(() => {
    const rig = rigRef.current;
    const cam = cameraRef.current;
    if (!rig || !cam) return;

    const yaw = rig.rotation.y;
    const forward = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));

    if (movement.forward) rig.position.add(forward.clone().multiplyScalar(0.1));
    if (movement.backward)
      rig.position.add(forward.clone().multiplyScalar(-0.1));

    if (lockVertical) rig.position.y = 0;

    const { angle, force } = look.current || {};
    if (force > 0) {
      const x = Math.cos(angle) * force;
      const y = -Math.sin(angle) * force;

      rig.rotation.y -= x * ROTATION_SPEED;

      cam.rotation.x = THREE.MathUtils.clamp(
        cam.rotation.x - y * PITCH_SPEED,
        -Math.PI / 2 + 0.1,
        Math.PI / 2 - 0.1
      );
    }
  });

  return null;
}
