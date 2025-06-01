import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function CameraTracker({ onUpdate, interval = 10000 }) {
  const { camera } = useThree();
  const lastUpdate = useRef(0);

  useFrame(({ clock }) => {
    const now = clock.elapsedTime * 1000;
    if (now - lastUpdate.current >= interval) {
      lastUpdate.current = now;
      onUpdate?.({
        position: [camera.position.x, camera.position.y, camera.position.z],
        rotation: [camera.rotation.x, camera.rotation.y, camera.rotation.z],
      });
    }
  });

  return null;
}
