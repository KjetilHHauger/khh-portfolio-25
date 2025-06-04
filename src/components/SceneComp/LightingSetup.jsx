import { useRef } from "react";
import * as THREE from "three";
import { useHelper } from "@react-three/drei";
import { SpotLightHelper } from "three";

export default function LightingSetup({ lightsOn }) {
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
        position={[-1, 5, -5]}
        intensity={10}
        distance={15}
        decay={1.5}
        color="#fff8dc"
      />
      <ambientLight intensity={0.3} />
      {lightsOn && <ambientLight intensity={0.5} />}
    </>
  );
}
