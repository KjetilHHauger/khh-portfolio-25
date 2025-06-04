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
  bounds,
}) {
  const { scene } = useThree();

  useEffect(() => {
    const cam = cameraRef.current;
    const rig = rigRef.current;
    if (!cam || !rig) return;

    cam.position.set(-5, 5, 7);
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

    if (movement.forward || movement.backward) {
      const moveVec = forward
        .clone()
        .multiplyScalar((movement.forward ? 1 : -1) * 0.1);
      const nextPos = rig.position.clone().add(moveVec);

      if (
        nextPos.x >= bounds.x[0] &&
        nextPos.x <= bounds.x[1] &&
        nextPos.z >= bounds.z[0] &&
        nextPos.z <= bounds.z[1]
      ) {
        rig.position.copy(nextPos);
      }
    }

    if (lockVertical) rig.position.y = 0;

    const { angle, force } = look.current || {};
    if (force > 0) {
      const vec = new THREE.Vector2(
        Math.cos(angle),
        -Math.sin(angle)
      ).normalize();
      const x = vec.x * force;
      const y = vec.y * force;

      rig.rotation.y -= x * ROTATION_SPEED;
      rig.position.x = THREE.MathUtils.clamp(rig.position.x, ...bounds.x);
      rig.position.z = THREE.MathUtils.clamp(rig.position.z, ...bounds.z);

      cam.rotation.x = THREE.MathUtils.clamp(
        cam.rotation.x - y * PITCH_SPEED,
        -Math.PI / 2 + 0.1,
        Math.PI / 2 - 0.1
      );
    }
  });

  return null;
}
