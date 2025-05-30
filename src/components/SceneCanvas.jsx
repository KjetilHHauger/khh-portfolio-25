import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import Floor from "./Floor";

export default function SceneCanvas() {
  return (
    <Canvas
      camera={{ position: [10, 10, 10], fov: 60 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <color attach="background" args={["#222"]} />

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      {/* Helper */}
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <pointLight position={[2, 2, 2]} intensity={0.5} />
      <axesHelper args={[5]} />

      {/* Controls */}
      <OrbitControls target={[5, 0, 5]} />
      <Stats />

      {/* 3D objects */}
      <Floor
        url="/models/ModularDungeons/FloorTile.glb"
        position={[0, 0, 0]}
        scale={1}
      />
    </Canvas>
  );
}
