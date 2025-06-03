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
    const yaw = camera.rotation.y;
    const flatForward = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));
    const flatRight = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw));

    const moveVec = new THREE.Vector3();

    if (keys.current["KeyW"]) moveVec.add(flatForward);
    if (keys.current["KeyS"]) moveVec.add(flatForward.clone().negate());
    if (keys.current["KeyA"]) moveVec.add(flatRight.clone().negate());
    if (keys.current["KeyD"]) moveVec.add(flatRight);

    moveVec.normalize().multiplyScalar(speed);
    camera.position.add(moveVec);

    camera.position.y = 6;

    if (bounds) {
      camera.position.x = THREE.MathUtils.clamp(camera.position.x, ...bounds.x);
      camera.position.z = THREE.MathUtils.clamp(camera.position.z, ...bounds.z);
    }
  });

  return <>{!isMobile && <PointerLockControls />}</>;
}
