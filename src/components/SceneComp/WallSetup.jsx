import { useState } from "react";
import Wall from "../Wall";
import * as THREE from "three";
import Window from "../Window";
import Door from "../SceneComp/Door";

export default function WallSetup() {
  const [modalContent, setModalContent] = useState(null);
  return (
    <>
      {/* Roof */}
      <mesh position={[-1, 10, -1]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[18, 18]} />
        <meshStandardMaterial color="#f8f4e3" side={THREE.DoubleSide} />
      </mesh>

      {/* Wall Blue */}
      <Wall
        url="/models/Wall.glb"
        start={[-10, 0, -10]}
        direction="x"
        length={18}
        height={10}
        color="#2C3E50"
      />

      {/* Wall Green Left */}
      <group position={[0, 0, 0]} scale={1}>
        <Wall
          url="/models/Wall.glb"
          start={[-10, 0, -9]}
          direction="z"
          length={18}
          height={10}
          color="#739592"
        />
      </group>

      {/* Wall Green Window Side */}
      <group position={[18, 0, 0]} scale={1}>
        <Wall
          url="/models/Wall.glb"
          start={[-10, 0, 7]}
          direction="z"
          length={2}
          height={10}
          color="#739592"
        />
        <Wall
          url="/models/Wall.glb"
          start={[-10, 0, 3]}
          direction="z"
          length={4}
          height={4}
          color="#739592"
        />
        <Wall
          url="/models/Wall.glb"
          start={[-10, 9, 3]}
          direction="z"
          length={4}
          height={1}
          color="#739592"
        />
        <Wall
          url="/models/Wall.glb"
          start={[-10, 0, 1]}
          direction="z"
          length={2}
          height={10}
          color="#739592"
        />
        <Wall
          url="/models/Wall.glb"
          start={[-10, 0, -5]}
          direction="z"
          length={6}
          height={4}
          color="#739592"
        />
        <Wall
          url="/models/Wall.glb"
          start={[-10, 9, -5]}
          direction="z"
          length={6}
          height={1}
          color="#739592"
        />
        <Wall
          url="/models/Wall.glb"
          start={[-10, 0, -9]}
          direction="z"
          length={4}
          height={10}
          color="#739592"
        />
      </group>

      {/* Wall Green Door */}

      <Wall
        url="/models/Wall.glb"
        start={[-10, 0, 8]}
        direction="x"
        length={18}
        height={10}
        color="#739592"
      />
      <group position={[0, -5, 8]}>
        <Door setModalContent={setModalContent} />
      </group>

      {/* Window Green Door */}
      <Window position={[8, 6.65, 4]} scale={[2, 1.18, 2]} />
      <Window position={[8, 6.65, -3]} scale={[3, 1.18, 2]} />
    </>
  );
}
