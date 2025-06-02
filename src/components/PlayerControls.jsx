import { PointerLockControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function PlayerControls({
  speed = 0.1,
  bounds,
  inputState,
  lookDelta,
}) {
  const { camera, gl } = useThree();
  const keys = useRef({});
  const isTouching = useRef(false);
  const lastTouch = useRef({ x: 0, y: 0 });

  // Keyboard controls
  useEffect(() => {
    const down = (e) => (keys.current[e.code] = true);
    const up = (e) => (keys.current[e.code] = false);
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  // Mobile camera look (drag)
  useEffect(() => {
    const dom = gl.domElement;

    const onTouchStart = (e) => {
      isTouching.current = true;
      lastTouch.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    };

    const onTouchMove = (e) => {
      if (!isTouching.current) return;

      const dx = e.touches[0].clientX - lastTouch.current.x;
      const dy = e.touches[0].clientY - lastTouch.current.y;

      camera.rotation.y -= dx * 0.002;
      camera.rotation.x -= dy * 0.002;
      camera.rotation.x = THREE.MathUtils.clamp(
        camera.rotation.x,
        -Math.PI / 2,
        Math.PI / 2
      );

      lastTouch.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    };

    const onTouchEnd = () => {
      isTouching.current = false;
    };

    dom.addEventListener("touchstart", onTouchStart);
    dom.addEventListener("touchmove", onTouchMove);
    dom.addEventListener("touchend", onTouchEnd);

    return () => {
      dom.removeEventListener("touchstart", onTouchStart);
      dom.removeEventListener("touchmove", onTouchMove);
      dom.removeEventListener("touchend", onTouchEnd);
    };
  }, [gl, camera]);

  // Frame loop
  useFrame(() => {
    const direction = new THREE.Vector3();
    if (inputState?.forward) direction.z -= 1;
    if (inputState?.backward) direction.z += 1;

    direction.normalize().multiplyScalar(speed);
    const move = direction.applyEuler(camera.rotation);
    camera.position.add(move);

    if (lookDelta) {
      const scale = 0.01;
      camera.rotation.y -= lookDelta.dx * scale;
      camera.rotation.x -= lookDelta.dy * scale;
      camera.rotation.x = THREE.MathUtils.clamp(
        camera.rotation.x,
        -Math.PI / 2,
        Math.PI / 2
      );
    }

    if (bounds) {
      camera.position.x = THREE.MathUtils.clamp(camera.position.x, ...bounds.x);
      camera.position.y = THREE.MathUtils.clamp(camera.position.y, ...bounds.y);
      camera.position.z = THREE.MathUtils.clamp(camera.position.z, ...bounds.z);
    }
  });
}
