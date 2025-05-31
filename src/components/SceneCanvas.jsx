import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import FloorGrid from "./FloorGrid";
import Prop from "./Prop";
import InteractivePropScroll from "./interactive/InteractivePropScroll";
import { Text } from "@react-three/drei";
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
      <group position={[4, 0, 2]} rotation={[0, Math.PI / 2, 0]} scale={1.2}>
        <Prop
          url="/models/ModularDungeons/TableBig.glb"
          position={[4, 0, 2]}
          rotation={[degToRad(0), degToRad(90), 0]}
          scale={1.2}
        />

        <InteractivePropScroll
          url="/models/ModularDungeons/Scroll.glb"
          position={[3, 1.06, 2]}
          rotation={[degToRad(-90), degToRad(5), 0.2]}
          scale={1.2}
          content={
            <div className="flex flex-col w-[450px] h-[400px] text-black p-4 gap-2">
              <h1 className="text-center">My CV</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          }
        >
          <Text
            position={[0, 0, 0]}
            rotation={[degToRad(0), 0, 0]}
            fontSize={0.2}
            color="black"
            anchorX="center"
            anchorY="middle"
            material-opacity={0.6}
            material-transparent={true}
          >
            CV
          </Text>
        </InteractivePropScroll>

        <Prop
          url="/models/ModularDungeons/CoinBag.glb"
          position={[2.5, 0.98, 1.4]}
          rotation={[degToRad(0), degToRad(0), 0]}
          scale={2}
        />
      </group>
      {/* <Wall start={[-20, 0, -20]} direction="x" length={20} height={4} />

      <Wall start={[-20, 0, -20]} direction="z" length={20} height={4} /> */}
    </Canvas>
  );
}
