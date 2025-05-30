import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import FloorGrid from "./FloorGrid";

export default function SceneCanvas() {
  return (
    <Canvas
      camera={{ position: [20, 20, 20], fov: 50 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <color attach="background" args={["#222"]} />

      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[60, 20, 10]} intensity={1} />
      {/* Helper */}
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <pointLight position={[2, 2, 2]} intensity={0.5} />
      <axesHelper args={[5]} />

      {/* Controls */}
      <OrbitControls
        target={[0, 0, 0]}
        enableRotate={false}
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
    </Canvas>
  );
}
