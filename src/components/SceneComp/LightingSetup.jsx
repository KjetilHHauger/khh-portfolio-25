import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { useHelper } from "@react-three/drei";
import { SpotLightHelper } from "three";

export default function LightingSetup() {
  const target = useRef(new THREE.Object3D());
  const spotRef = useRef();

  useHelper(spotRef, SpotLightHelper, "teal");

  return (
    <>
      {/* Room fill lights */}
      {[
        [-9, 9, -9],
        [7, 9, -9],
        [-7, 5, 7],
        [7, 5, 7],
      ].map((pos, i) => (
        <spotLight
          key={i}
          position={pos}
          target={target.current}
          angle={Math.PI / 2.2}
          penumbra={0.7}
          intensity={7}
          distance={30}
          decay={1}
          castShadow
          color="#fefbe9"
        />
      ))}

      {/* Central ceiling light */}
      <spotLight
        position={[-9, 9, 9]}
        target={target.current}
        angle={Math.PI / 4}
        intensity={50}
        distance={50}
        penumbra={0.6}
        decay={1}
        castShadow
      />

      <pointLight
        position={[-1, 5, -5]} // hover slightly above/near desk
        intensity={10}
        distance={15} // limit to just affect nearby objects
        decay={1.5} // falloff (more natural dropoff)
        color="#fff8dc" // warm neutral light (like a desk lamp)
      />

      {/* Optional ambient to soften shadows */}
      {/* <ambientLight intensity={0.3} /> */}
    </>
  );
}
