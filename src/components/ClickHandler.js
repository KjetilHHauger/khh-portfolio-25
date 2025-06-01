import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

export default function ClickHandler({ onClick }) {
  const { camera, scene } = useThree();
  const raycaster = new THREE.Raycaster();
  raycaster.far = 10;

  useEffect(() => {
    const handleClick = () => {
      if (document.pointerLockElement !== document.querySelector("canvas"))
        return;

      raycaster.setFromCamera({ x: 0, y: 0 }, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        onClick?.(intersects[0].object);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [camera, scene, onClick]);

  return null;
}
