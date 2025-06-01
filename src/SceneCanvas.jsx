import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import { useState } from "react";
import InteractiveModal from "./components/Interactive/InteractiveModal";
import FloorGrid from "./components/FloorGrid";
import Prop from "./components/Prop";
import Wall from "./components/Wall";
import UserCamera from "./components/UserCamera";
import ClickHandler from "./components/ClickHandler";

export default function SceneCanvas() {
  const [modalContent, setModalContent] = useState(null);

  return (
    <>
      <Canvas
        camera={{ position: [0, 20, 10], fov: 50 }}
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
        <UserCamera disabled={!!modalContent} />

        <OrbitControls
          target={[4, 4.6, 0]}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enablePan={false}
        />
        <ClickHandler
          onClick={(object) => {
            console.log("Clicked:", object);
          }}
        />
        <Stats />
        {/* 3D objects */}
        {/* Static props */}
        <Prop
          url="/models/CardboardBoxes.glb"
          position={[-2, 0, -2.8]}
          rotation={[0, 0, 0]}
          scale={3}
        />
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
          <InteractiveModal
            url="/models/ComputerMonitor.glb"
            position={[0.5, 2.83, -3.4]}
            rotation={[0, 20, 0]}
            scale={1}
            onClick={() =>
              setModalContent(
                <div className="flex flex-col items-center w-full  text-black p-4 gap-4">
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
                      className="mt-2 text-black py-1 px-3 rounded hover:text-gray-600 cursor-pointer bg-white border border-gray-300 hover:bg-gray-100 transition-colors"
                    >
                      Send
                    </button>
                  </form>
                </div>
              )
            }
          />
          <InteractiveModal
            url="/models/ComputerMonitor.glb"
            position={[2.5, 2.83, -3.4]}
            rotation={[0, -20, 0]}
            scale={1}
            onClick={() =>
              setModalContent(
                <div>
                  <h2 className="text-xl font-bold mb-2">Monitor</h2>
                  <p>Right</p>
                </div>
              )
            }
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
          <Prop
            url="/models/SodaCan.glb"
            position={[3.5, 2.83, -2.2]}
            rotation={[0, -250, 0]}
            scale={0.05}
          />
          <Prop
            url="/models/CrushedSodaCan.glb"
            position={[4.2, 2.98, -2.5]}
            rotation={[0, 23, 0]}
            scale={5}
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
          <InteractiveModal
            url="/models/LegoMoonBuggy.glb"
            position={[-0.5, 5.5, -3.6]}
            rotation={[0, 193, 0]}
            scale={1}
            onClick={() =>
              setModalContent(
                <div>
                  <h2 className="text-xl font-bold mb-2">Brickify</h2>
                  <p>Your leading Lego blog</p>
                  <a href="https://khh-bloggie.netlify.app" target="_blank">
                    Brickify
                  </a>
                </div>
              )
            }
          />
          <InteractiveModal
            url="/models/Rocketship.glb"
            position={[5.2, 5.9, -3.6]}
            rotation={[0, 193, 0]}
            scale={1}
            onClick={() =>
              setModalContent(
                <div>
                  <h2 className="text-xl font-bold mb-2">Science Museum</h2>
                  <p>Explore the universe</p>
                  <a href="https://science-m.netlify.app" target="_blank">
                    Science rules
                  </a>
                </div>
              )
            }
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
          <InteractiveModal
            url="/models/SeaSideVilla.glb"
            position={[-2, 7.73, -3.55]}
            rotation={[0, 60, 0]}
            scale={0.35}
            onClick={() =>
              setModalContent(
                <div>
                  <h2 className="text-xl font-bold mb-2">Holidaze</h2>
                  <p>Stay curious, stay cozy, stay Holidaze</p>
                  <a href="https://khh-daze.netlify.app" target="_blank">
                    Holidaze
                  </a>
                </div>
              )
            }
          />
          <InteractiveModal
            url="/models/Gavel.glb"
            position={[6.5, 7.73, -3.55]}
            rotation={[0, 134, 0]}
            scale={0.8}
            onClick={() =>
              setModalContent(
                <div>
                  <h2 className="text-xl font-bold mb-2">
                    Hammer time auction
                  </h2>
                  <p>Hammer Time</p>
                  <a href="https://khh-ht.netlify.app" target="_blank">
                    Hit that hammer
                  </a>
                </div>
              )
            }
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
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
        <div className="w-2 h-2 bg-white rounded-full" />
      </div>
      {modalContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setModalContent(null)}
        >
          <div
            className="bg-white text-black p-6 rounded shadow-lg w-[90%] max-w-[600px] h-[80%] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalContent(null)}
              className="absolute top-4 right-4 text-xl"
            >
              ✕
            </button>
            {modalContent}
          </div>
        </div>
      )}
    </>
  );
}
