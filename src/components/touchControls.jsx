import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export default function TouchControls() {
  const { camera } = useThree();

  useEffect(() => {
    let lastTouches = [];

    const handleTouchMove = (e) => {
      const touches = e.touches;

      if (touches.length === 1 && lastTouches.length === 1) {
        const dx = touches[0].clientX - lastTouches[0].clientX;
        const dy = touches[0].clientY - lastTouches[0].clientY;
        camera.rotation.y -= dx * 0.005;
        camera.rotation.x -= dy * 0.005;
      } else if (touches.length === 2 && lastTouches.length === 2) {
        const getDistance = (t1, t2) =>
          Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);

        const currentDistance = getDistance(touches[0], touches[1]);
        const lastDistance = getDistance(lastTouches[0], lastTouches[1]);

        const delta = currentDistance - lastDistance;
        camera.position.z -= delta * 0.01;
      }

      lastTouches = [...touches];
    };

    const handleTouchEnd = () => {
      lastTouches = [];
    };

    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [camera]);

  return null;
}
