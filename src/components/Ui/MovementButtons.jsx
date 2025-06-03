import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function MovementButtons({ speed = 0.1 }) {
  const { camera } = useThree();
  const moving = useRef({ forward: false, backward: false });

  useFrame(() => {
    const dir = new THREE.Vector3();
    camera.getWorldDirection(dir);
    dir.y = 0;
    dir.normalize();

    if (moving.current.forward) {
      camera.position.add(dir.clone().multiplyScalar(speed));
    }
    if (moving.current.backward) {
      camera.position.add(dir.clone().multiplyScalar(-speed));
    }
  });

  return (
    <div className="fixed bottom-4 left-1/2 flex gap-4 z-50 -translate-x-1/2">
      <button
        className="bg-white/70 text-black px-4 py-2 rounded shadow-lg text-lg active:scale-95"
        onTouchStart={() => (moving.current.forward = true)}
        onTouchEnd={() => (moving.current.forward = false)}
      >
        ↑
      </button>
      <button
        className="bg-white/70 text-black px-4 py-2 rounded shadow-lg text-lg active:scale-95"
        onTouchStart={() => (moving.current.backward = true)}
        onTouchEnd={() => (moving.current.backward = false)}
      >
        ↓
      </button>
    </div>
  );
}
