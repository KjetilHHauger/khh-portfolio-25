import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import FloorGrid from "./FloorGrid";
import Prop from "./Prop";
// import Wall from "./Wall";

export default function SceneCanvas() {
  const degToRad = (deg) => (deg * Math.PI) / 180;
  return (
    <Canvas
      camera={{ position: [20, 20, 20], fov: 50 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <color attach="background" args={["#000"]} />

      {/* Lighting */}
      <ambientLight intensity={1} />
      <directionalLight position={[60, 20, 60]} intensity={3} />

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
      <FloorGrid
        url="/models/ModularDungeons/FloorTile.glb"
        position={[0, 0, 0]}
        scale={1}
      />

      <Prop
        url="/models/ModularDungeons/TableBig.glb"
        position={[4, 0, 2]}
        rotation={[degToRad(0), degToRad(90), 0]}
        scale={1.2}
      />
      <Prop
        url="/models/ModularDungeons/Scroll.glb"
        position={[3, 1.04, 2.2]}
        rotation={[degToRad(-90), degToRad(3), -0.2]}
        scale={1.2}
      />
      <Prop
        url="/models/ModularDungeons/CoinBag.glb"
        position={[2.5, 0.98, 1.4]}
        rotation={[degToRad(0), degToRad(0), 0]}
        scale={2}
      />

      {/* <Wall start={[-20, 0, -20]} direction="x" length={20} height={4} />

      <Wall start={[-20, 0, -20]} direction="z" length={20} height={4} /> */}
    </Canvas>
  );
}
