import { PointerLockControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function PlayerControls({ speed = 0.1, bounds }) {
  const { camera } = useThree();
  const keys = useRef({});
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  useEffect(() => {
    const handleKeyDown = (e) => (keys.current[e.code] = true);
    const handleKeyUp = (e) => (keys.current[e.code] = false);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame(() => {
    const dir = new THREE.Vector3();
    camera.getWorldDirection(dir);
    dir.y = 0;
    dir.normalize();

    const right = new THREE.Vector3();
    right.crossVectors(dir, camera.up).normalize();

    const moveVec = new THREE.Vector3();

    if (keys.current["KeyW"]) moveVec.add(dir);
    if (keys.current["KeyS"]) moveVec.add(dir.clone().negate());
    if (keys.current["KeyA"]) moveVec.add(right.clone().negate());
    if (keys.current["KeyD"]) moveVec.add(right);

    moveVec.normalize().multiplyScalar(speed);
    const nextPos = camera.position.clone().add(moveVec);

    if (
      bounds &&
      nextPos.x >= bounds.x[0] &&
      nextPos.x <= bounds.x[1] &&
      nextPos.z >= bounds.z[0] &&
      nextPos.z <= bounds.z[1]
    ) {
      camera.position.copy(nextPos);
    }

    camera.position.y = 6;
  });

  return <>{!isMobile && <PointerLockControls />}</>;
}
