import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import InteractiveModal from "./components/Interactive/InteractiveModal";
import FloorGrid from "./components/FloorGrid";
import Prop from "./components/Prop";
import Wall from "./components/Wall";
import CameraDebugHUD from "./components/DevCamera/CameraDebugHUD";
import CameraTracker from "./components/DevCamera/CameraTracker";

export default function SceneCanvas() {
  const [modalContent, setModalContent] = useState(null);
  const [cameraInfo, setCameraInfo] = useState({
    position: [0, 0, 0],
    rotation: [0, 0, 0],
  });

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
        {/* Controls */}
        <OrbitControls
          target={[0, 0, 0]}
          enableRotate={true}
          enableZoom={true}
          enablePan={true}
        />
        <CameraTracker onUpdate={setCameraInfo} />
        <Stats />
        {/* 3D objects */}
        <InteractiveModal
          url="/models/CardboardBoxes.glb"
          position={[-2, 0, -2.8]}
          rotation={[0, 0, 0]}
          scale={3}
          hitboxPosition={[0.05, 0.9, 0.07]}
          hitboxScale={[1.4, 1.75, 0.9]}
          hitboxRotation={[0, 0, 0]}
          onClick={() =>
            setModalContent(
              <div>
                <h2 className="text-xl font-bold mb-2">Cardboard</h2>
                <p>Always save your lego boxes</p>
              </div>
            )
          }
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
            hitboxPosition={[0, 0.85, 0]}
            hitboxScale={[1.9, 1.1, 0.15]}
            hitboxRotation={[0, 0, 0]}
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
            hitboxPosition={[0, 0.85, 0]}
            hitboxScale={[1.9, 1.1, 0.15]}
            hitboxRotation={[0, 0, 0]}
            onClick={() =>
              setModalContent(
                <div className="w-full max-w-3xl bg-white text-black p-6 md:p-10 overflow-auto space-y-6">
                  <header className="text-center space-y-1">
                    <h1 className="text-3xl font-bold">
                      Kjetil Harneshaug Hauger
                    </h1>
                    <p className="text-sm text-gray-600">
                      Frontend Developer | React • Three.js
                    </p>
                    <div className="text-sm text-gray-500">
                      kjetil.h.hauger@gmail.com •
                      <a
                        href="https://www.linkedin.com/in/kjetil-harneshaug-hauger-00851084/"
                        className="underline hover:text-gray-700 ml-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </header>

                  <section>
                    <h2 className="text-xl font-semibold border-b pb-1 mb-2">
                      Summary
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-700">
                      Creative and dedicated frontend developer with over 1 year
                      of experience building dynamic, responsive websites and
                      immersive 3D user interfaces. Strong understanding of
                      modern JavaScript frameworks, performance optimization,
                      and user-centered design principles.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold border-b pb-1 mb-2">
                      Experience
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <div className="font-semibold">Web Editor - Lyreco</div>
                        <div className="text-xs text-gray-500 mb-1">
                          2024 - Present
                        </div>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                          <li>
                            Managing content in a CMS to support e-commerce
                            operations.
                          </li>
                          <li>
                            Collaborating with design teams using Figma for
                            visual updates.
                          </li>
                          <li>
                            Implementing HTML, CSS, and JavaScript updates for
                            site components.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <div className="font-semibold">
                          Kindergarten Assistant
                        </div>
                        <div className="text-xs text-gray-500 mb-1">
                          2012 - 2023
                        </div>
                      </div>

                      <div>
                        <div className="font-semibold">SFO/AKS Assistant</div>
                        <div className="text-xs text-gray-500 mb-1">
                          2009 - 2012
                        </div>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold border-b pb-1 mb-2">
                      Skills
                    </h2>
                    <div className="text-sm text-gray-700 space-y-1">
                      <div>
                        <strong>Languages:</strong> JavaScript, TypeScript,
                        HTML/CSS
                      </div>
                      <div>
                        <strong>Frameworks:</strong> React, Node.js, Express
                      </div>
                      <div>
                        <strong>Tools:</strong> Git, Vite, Webpack, Figma,
                        Three.js
                      </div>
                      <div>
                        <strong>Other:</strong> Responsive Design,
                        Accessibility, Agile Development
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold border-b pb-1 mb-2">
                      Education
                    </h2>
                    <div className="text-sm text-gray-700">
                      Noroff School of Technology and Digital Media <br />
                      <span className="text-xs text-gray-500">2023 – 2025</span>
                    </div>
                  </section>
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
            hitboxPosition={[0.05, 0.5, -0.06]}
            hitboxScale={[1.1, 0.9, 0.6]}
            hitboxRotation={[0, 0, 0]}
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
            hitboxPosition={[-0.02, 0.3, 0]}
            hitboxScale={[0.5, 1.34, 0.6]}
            hitboxRotation={[0, 0, 0]}
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
            hitboxPosition={[0, 0, 0]}
            hitboxScale={[2, 1, 2]}
            hitboxRotation={[0, 0, 0]}
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
            hitboxPosition={[-0.02, 0.06, 0.1]}
            hitboxScale={[0.8, 0.6, 1.1]}
            hitboxRotation={[0, 0, 0]}
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
      <CameraDebugHUD cameraInfo={cameraInfo} />

      <AnimatePresence>
        {modalContent && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setModalContent(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-black p-6 rounded shadow-lg w-[90%] max-w-[600px] h-[80%] overflow-auto relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <button
                onClick={() => setModalContent(null)}
                className="absolute top-4 right-4 text-xl"
              >
                ✕
              </button>
              {modalContent}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
