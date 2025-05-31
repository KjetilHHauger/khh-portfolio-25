import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import FloorGrid from "./FloorGrid";
import Prop from "./Prop";
import Wall from "./Wall";

export default function SceneCanvas() {
  return (
    <Canvas
      camera={{ position: [20, 20, 20], fov: 50 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <color attach="background" args={["#000"]} />
      {/* Lighting */}
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      {/* Helper */}
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <pointLight position={[2, 2, 2]} intensity={0.5} />
      <axesHelper args={[5]} />
      {/* Controls */}
      <OrbitControls
        target={[0, 0, 0]}
        enableRotate={true}
        enableZoom={true}
        enablePan={true}
      />
      <Stats />
      {/* 3D objects */}
      {/* Static props */}

      {/* Desk */}
      <group position={[2.5, 0, 0]} scale={1}>
        <Prop
          url="/models/OfficeChair.glb"
          position={[1, 0.1, 0]}
          rotation={[0, 150, 0]}
          scale={1}
        />
        <Prop
          url="/models/AdjustableDesk.glb"
          position={[2.5, 0, -2.6]}
          rotation={[0, -90, 0]}
          scale={3}
        />
        <Prop
          url="/models/ComputerMonitor.glb"
          position={[0.5, 2.83, -3.4]}
          rotation={[0, 20, 0]}
          scale={1}
        />
        <Prop
          url="/models/ComputerMonitor.glb"
          position={[2.5, 2.83, -3.4]}
          rotation={[0, -20, 0]}
          scale={1}
        />
        <Prop
          url="/models/ComputerDesktop.glb"
          position={[4.4, 2.83, -3.6]}
          rotation={[0, 90, 0]}
          scale={1}
        />
        <Prop
          url="/models/ComputerMousepad.glb"
          position={[1.6, 2.83, -2.1]}
          rotation={[0, 90, 0]}
          scale={1}
        />
        <Prop
          url="/models/ComputerKeyboard.glb"
          position={[1.1, 2.83, -2.3]}
          rotation={[0, 3, 0]}
          scale={0.7}
        />
        <Prop
          url="/models/ComputerMouse.glb"
          position={[2.5, 2.83, -2.2]}
          rotation={[0, 23, 0]}
          scale={1}
        />
      </group>

      {/* Shelves */}
      <group position={[2.5, 0, 0]} scale={1}>
        {/* Bottom side */}
        <Prop
          url="/models/FloatingShelf.glb"
          position={[-0.5, 5.5, -3.6]}
          rotation={[0, 0, 0]}
          scale={[1, 3, 2]}
          color={"#000"}
        />
        <Prop
          url="/models/FloatingShelf.glb"
          position={[5.2, 5.5, -3.6]}
          rotation={[0, 0, 0]}
          scale={[1, 3, 2]}
          color={"#000"}
        />
        <Prop
          url="/models/LegoMoonBuggy.glb"
          position={[-0.5, 5.5, -3.6]}
          rotation={[0, 193, 0]}
          scale={1}
        />
        <Prop
          url="/models/Rocketship.glb"
          position={[5.2, 5.9, -3.6]}
          rotation={[0, 193, 0]}
          scale={1}
        />
        {/* Middle */}
        <Prop
          url="/models/FloatingShelf.glb"
          position={[2.3, 6.7, -3.6]}
          rotation={[0, 0, 0]}
          scale={[3, 3, 2]}
          color={"#000"}
        />
        {/* Middle side */}
        <Prop
          url="/models/FloatingShelf.glb"
          position={[-2, 7.5, -3.6]}
          rotation={[0, 0, 0]}
          scale={[1, 3, 2]}
          color={"#000"}
        />
        <Prop
          url="/models/FloatingShelf.glb"
          position={[6.5, 7.5, -3.6]}
          rotation={[0, 0, 0]}
          scale={[1, 3, 2]}
          color={"#000"}
        />
        <Prop
          url="/models/SeaSideVilla.glb"
          position={[-2, 7.73, -3.55]}
          rotation={[0, 60, 0]}
          scale={0.35}
        />
        <Prop
          url="/models/Gavel.glb"
          position={[6.5, 7.73, -3.55]}
          rotation={[0, 134, 0]}
          scale={0.8}
        />
        <Prop
          url="/models/KHH.glb"
          position={[2.3, 7.7, -3.94]}
          rotation={[70, 0, 0]}
          scale={10}
        />
      </group>
      {/* Wall Blue */}
      <Wall
        url="/models/Wall.glb"
        start={[-4, 0, -4]}
        direction="x"
        length={18}
        height={10}
        color="#2C3E50"
      />
      <group position={[6, 0, 6]} scale={1}>
        {/* Wall Green Window*/}
        <Wall
          url="/models/Wall.glb"
          start={[-10, 0, -9]}
          direction="z"
          length={18}
          height={10}
          color="#739592"
        />
        {/* <Wall
          url="/models/Wall.glb"
          start={[-10, 0, -9]}
          direction="z"
          length={4}
          height={8}
          color="#739592"
        /> */}
        {/* <Wall
          url="/models/Wall.glb"
          start={[-10, 6, -5]}
          direction="z"
          length={4}
          height={2}
          color="#739592"
        /> */}
      </group>
      <group position={[24, 0, 6]} scale={1}>
        {/* Wall Green */}
        <Wall
          url="/models/Wall.glb"
          start={[-10, 0, -9]}
          direction="z"
          length={18}
          height={10}
          color="#739592"
        />
        {/* <Wall
          url="/models/Wall.glb"
          start={[-10, 0, -9]}
          direction="z"
          length={4}
          height={8}
          color="#739592"
        /> */}
        {/* <Wall
          url="/models/Wall.glb"
          start={[-10, 6, -5]}
          direction="z"
          length={4}
          height={2}
          color="#739592"
        /> */}
      </group>
      {/* Floor */}
      <FloorGrid
        url="/models/FloorTile.glb"
        position={[0, 0, 0]}
        scale={1}
        color="#625d57"
      />
    </Canvas>
  );
}
