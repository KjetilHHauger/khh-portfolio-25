import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function UserCamera({ disabled }) {
  const { camera } = useThree();
  const velocity = useRef(new THREE.Vector3());
  const direction = useRef(new THREE.Vector3());
  const keys = useRef({});
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Mouse move listener to control rotation
  useEffect(() => {
    const handleMouseMove = (e) => {
      setRotation((prev) => ({
        x: THREE.MathUtils.clamp(
          prev.x - e.movementY * 0.002,
          -Math.PI / 2,
          Math.PI / 2
        ),
        y: prev.y - e.movementX * 0.002,
      }));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const down = (e) => (keys.current[e.key.toLowerCase()] = true);
    const up = (e) => (keys.current[e.key.toLowerCase()] = false);
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const canvas = document.querySelector("canvas");
      if (canvas && document.pointerLockElement !== canvas) {
        canvas.requestPointerLock();
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  useFrame((_, delta) => {
    if (
      disabled ||
      document.pointerLockElement !== document.querySelector("canvas")
    )
      return;

    camera.rotation.set(rotation.x, rotation.y, 0);

    direction.current.set(0, 0, 0);
    if (keys.current["w"]) direction.current.z -= 1;
    if (keys.current["s"]) direction.current.z += 1;
    if (keys.current["a"]) direction.current.x -= 1;
    if (keys.current["d"]) direction.current.x += 1;

    direction.current.normalize();
    direction.current.applyEuler(camera.rotation);

    velocity.current.copy(direction.current).multiplyScalar(delta * 5);
    camera.position.add(velocity.current);

    camera.position.x = THREE.MathUtils.clamp(camera.position.x, -5, 10);
    camera.position.y = 5.6;
    camera.position.z = THREE.MathUtils.clamp(camera.position.z, -5, 10);
  });

  return null;
}
