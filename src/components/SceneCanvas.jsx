import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import FloorGrid from "./FloorGrid";
import Prop from "./Prop";
import InteractivePropScroll from "./interactive/InteractivePropScroll";
import InteractivePropDouble from "./interactive/InteractivePropDouble";
import { Text } from "@react-three/drei";
import Wall from "./Wall";

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

      {/* Tabel props */}
      <group position={[-8, 0, -2]} rotation={[0, Math.PI / 6, 0]} scale={1.2}>
        <Prop
          url="/models/TableBig.glb"
          position={[4, 0, 2]}
          rotation={[degToRad(0), degToRad(90), 0]}
          scale={1.2}
        />

        <InteractivePropScroll
          url="/models/Scroll.glb"
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

        <InteractivePropDouble
          quillUrl="/models/QuillAndParchment.glb"
          scrollUrl="/models/Scroll.glb"
          position={[5.2, 1.06, 1.6]}
          rotation={[0, 0, 0]}
          scale={2}
          labelText="Contact"
          labelPosition={[0.04, -0, -0.07]}
          labelRotation={[degToRad(-90), 0, 0]}
          content={
            <div className="flex flex-col w-[450px] h-[400px] text-black p-4 gap-4">
              <h1 className="text-center text-xl font-bold">Contact</h1>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="flex flex-col gap-2"
              >
                <input type="hidden" name="form-name" value="contact" />
                <label className="flex flex-col text-sm">
                  Name
                  <input
                    type="text"
                    name="name"
                    required
                    className="border p-1 rounded"
                  />
                </label>
                <label className="flex flex-col text-sm">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    className="border p-1 rounded"
                  />
                </label>
                <label className="flex flex-col text-sm">
                  Message
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="border p-1 rounded"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 text-black py-1 px-3 rounded hover:text-gray-600 "
                >
                  Send
                </button>
              </form>
            </div>
          }
        >
          <Text
            fontSize={0.05}
            color="black"
            anchorX="center"
            anchorY="middle"
            material-opacity={1}
            material-transparent={true}
          >
            Contact
          </Text>
        </InteractivePropDouble>

        <Prop
          url="/models/CoinBag.glb"
          position={[2.5, 0.98, 1.4]}
          rotation={[degToRad(0), degToRad(0), 0]}
          scale={2}
        />
      </group>

      {/* Static props */}
      <Prop
        url="/models/Chair.glb"
        position={[0.5, 0, -1]}
        rotation={[degToRad(0), degToRad(-90), 0]}
        scale={2}
      />
      <Prop
        url="/models/Not_used/Column.glb"
        position={[-9.9, 0, 7.2]}
        rotation={[degToRad(0), degToRad(-90), 0]}
        scale={2}
      />

      <Prop
        url="/models/Bookshelf.glb"
        position={[-9.4, 2.35, 2]}
        rotation={[degToRad(0), degToRad(-80), 0]}
        scale={1}
      />

      <group
        position={[2.5, 6.5, -9.5]}
        rotation={[degToRad(0), degToRad(0), 0]}
        scale={1.2}
      >
        <Prop
          url="/models/BannerWall.glb"
          position={[0, 0, 0]}
          rotation={[degToRad(0), degToRad(0), 0]}
          scale={1.8}
        />
        <Prop
          url="/models/KHH.glb"
          position={[1.3, -1, 0.08]}
          rotation={[degToRad(90), degToRad(0), 0]}
          scale={5}
          color={"white"}
        />
      </group>

      {/* Floor */}
      <FloorGrid url="/models/FloorTile.glb" position={[0, 0, 0]} scale={1} />

      {/* Walls */}
      <Wall
        url="/models/WallModular.glb"
        start={[-9, 1, -10]}
        direction="x"
        length={9}
        height={4}
        color="#616161"
      />

      <Wall
        url="/models/WallModular.glb"
        start={[-10, 1, -9]}
        direction="z"
        length={9}
        height={4}
        color="#616161"
      />
    </Canvas>
  );
}
