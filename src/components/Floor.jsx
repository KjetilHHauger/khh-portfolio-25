import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { MeshStandardMaterial } from "three";

export default function Floor({ url, ...props }) {
  const { scene } = useGLTF(url);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new MeshStandardMaterial({ color: "gray" });
      }
    });
  }, [scene]);

  return <primitive object={scene} {...props} />;
}
