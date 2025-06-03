import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function TouchControls() {
  const { camera } = useThree();
  const touchData = useRef({
    lastTouches: [],
    velocityX: 0,
    velocityY: 0,
  });

  useEffect(() => {
    const handleTouchMove = (e) => {
      const touches = e.touches;
      const data = touchData.current;

      if (touches.length === 1 && data.lastTouches.length === 1) {
        const dx = touches[0].clientX - data.lastTouches[0].clientX;
        const dy = touches[0].clientY - data.lastTouches[0].clientY;

        data.velocityX = dx;
        data.velocityY = dy;
      } else if (touches.length === 2 && data.lastTouches.length === 2) {
        const getDist = (a, b) =>
          Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);

        const distNow = getDist(touches[0], touches[1]);
        const distPrev = getDist(data.lastTouches[0], data.lastTouches[1]);

        const delta = distNow - distPrev;

        const dir = new THREE.Vector3();
        camera.getWorldDirection(dir);
        dir.multiplyScalar(delta * 0.01); // scale speed
        camera.position.add(dir);
      }

      data.lastTouches = [...touches];
    };

    const handleTouchEnd = () => {
      touchData.current.lastTouches = [];
    };

    const handleAnimationFrame = () => {
      const data = touchData.current;

      if (Math.abs(data.velocityX) > 0.1 || Math.abs(data.velocityY) > 0.1) {
        camera.rotation.y -= data.velocityX * 0.002;
        camera.rotation.x -= data.velocityY * 0.002;

        data.velocityX *= 0.9;
        data.velocityY *= 0.9;
      }

      requestAnimationFrame(handleAnimationFrame);
    };

    handleAnimationFrame();

    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [camera]);

  return null;
}
