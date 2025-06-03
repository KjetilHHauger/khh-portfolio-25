import { PointerLockControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import MovementButtons from "./MovementButtons";

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
    const direction = new THREE.Vector3();
    if (keys.current["KeyW"]) direction.z -= 1;
    if (keys.current["KeyS"]) direction.z += 1;
    if (keys.current["KeyA"]) direction.x -= 1;
    if (keys.current["KeyD"]) direction.x += 1;

    direction.normalize().multiplyScalar(speed);
    camera.translateX(direction.x);
    camera.translateZ(direction.z);

    if (bounds) {
      camera.position.x = THREE.MathUtils.clamp(camera.position.x, ...bounds.x);
      camera.position.y = THREE.MathUtils.clamp(camera.position.y, ...bounds.y);
      camera.position.z = THREE.MathUtils.clamp(camera.position.z, ...bounds.z);
    }
  });

  return <>{!isMobile && <PointerLockControls />}</>;
}
