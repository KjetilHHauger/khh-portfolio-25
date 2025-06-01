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
import InteractiveAnimatedModal from "./components/Interactive/InteractiveAnimatedModal";

export default function SceneCanvas() {
  const [modalContent, setModalContent] = useState(null);
  const [cameraInfo, setCameraInfo] = useState({
    position: [0, 0, 0],
    rotation: [0, 0, 0],
  });

  return (
    <>
      <Canvas
        camera={{ position: [4.99, 8.26, 13.01], fov: 50 }}
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
          target={[4.5, 2.5, -3.6]}
          enableRotate={false}
          enableZoom={false}
          enablePan={false}
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
              <div className="flex flex-col items-center w-full max-w-md mx-auto text-center gap-4">
                <h2 className="text-2xl font-bold text-center">
                  Cardboard Retirement Plan™
                </h2>
                <img
                  src="/images/LegoCollection.webp"
                  alt="Unopened LEGO box"
                  loading="lazy"
                  className="w-full rounded shadow-md"
                />
                <p className="text-sm text-left text-gray-700 leading-relaxed">
                  Welcome to a sacred vault of creativity — untouched since
                  purchase, sealed with the hope that one day, in the golden
                  glow of retirement, it will be built. Or admired. Or… traded
                  for a house.
                </p>
                <p className="text-sm text-left text-gray-700 leading-relaxed">
                  With every unopened LEGO set, the legend grows. Friends laugh,
                  shelves sag, and resale value fluctuates — but the mission is
                  clear: preserve potential, defer joy, and hoard with purpose.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed italic text-center">
                  “Don’t touch it. It’s a retirement build.”
                </p>
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
          <InteractiveAnimatedModal
            url="/models/HoodedAdventurer.glb"
            position={[3.7, 6.744, -3.4]}
            rotation={[0, -40, 0]}
            scale={0.5}
            hitboxPosition={[0.05, 1, 0.1]}
            hitboxScale={[0.8, 2, 0.5]}
            hitboxRotation={[0, 0, 0]}
            onClick={() =>
              setModalContent(
                <div className="flex flex-col items-center w-full max-w-md mx-auto text-center gap-4">
                  <h2 className="text-3xl font-bold">Anemic Heroes</h2>

                  <img
                    src="/images/AnemicHeroes.webp"
                    alt="Screenshot of the project"
                    loading="lazy"
                    className="w-full rounded shadow-md"
                  />

                  <p className="text-lg text-left text-gray-700 leading-relaxed">
                    Anemic Heroes is a browser-based dungeon crawler developed
                    as a team project at Noroff. Built with React and
                    JavaScript, the game lets players create their own hero and
                    embark on branching adventures filled with traders,
                    encounters, and turn-based battles.
                  </p>

                  <p className="text-lg text-left text-gray-700 leading-relaxed">
                    Players can choose from distinct classes like mage, warrior,
                    or rogue — each with unique stats and playstyles. The map
                    system generates random encounter paths ending in boss
                    fights, while progression is tracked through battles and
                    equipment upgrades.
                  </p>

                  <p className="text-lg text-left text-gray-700 leading-relaxed">
                    Featuring a shop, character sheet, item system, and a
                    scalable combat engine, Anemic Heroes emphasizes tactical
                    planning and replayability. Defeat the boss to continue — or
                    start over and try again.
                  </p>

                  <div className="flex gap-3 mt-2">
                    <a
                      href="https://your-anemic-heroes-demo-link.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-700 transition"
                    >
                      Visit Site
                    </a>
                    <a
                      href="https://github.com/AnemicGames/AnemicHeroes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white text-lg font-semibold rounded hover:bg-gray-900 transition"
                    >
                      GitHub Repository
                    </a>
                  </div>
                </div>
              )
            }
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
                <div className="flex flex-col items-stretch w-full  text-black p-4 gap-4">
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
                      <span className="text-xs text-gray-500">2023 - 2025</span>
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
                <div className="flex flex-col items-center w-full max-w-md mx-auto text-center gap-4">
                  <h2 className="text-3xl font-bold">Brickify</h2>

                  <img
                    src="/images/Brickify.webp"
                    alt="Screenshot of the project"
                    loading="lazy"
                    className="w-full rounded shadow-md"
                  />

                  <p className="text-lg text-left text-gray-700 leading-relaxed">
                    Brickify is a vibrant blog platform built during my time at
                    Noroff, created for fellow LEGO enthusiasts. It features
                    dynamic content loading, search filtering, pagination, and a
                    responsive carousel for showcasing the latest builds. With
                    full user authentication and blog management tools, it’s
                    designed to be both playful and practical — a digital space
                    to celebrate bricks and creativity.
                  </p>

                  <div className="flex gap-3 mt-2">
                    <a
                      href="https://khh-bloggie.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-700 transition"
                    >
                      Visit Site
                    </a>
                    <a
                      href="https://github.com/KjetilHHauger/FED1-EXAME-KJETIL-H-H"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white text-lg font-semibold rounded hover:bg-gray-900 transition"
                    >
                      GitHub Repository
                    </a>
                  </div>
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
                <div className="flex flex-col items-center w-full max-w-md mx-auto text-center gap-4">
                  <h2 className="text-3xl font-bold">Science Museum</h2>

                  <img
                    src="/images/ScienceMuseum.webp"
                    alt="Screenshot of the project"
                    loading="lazy"
                    className="w-full rounded shadow-md"
                  />

                  <p className="text-lg text-left text-gray-700 leading-relaxed">
                    Created as part of my Front-end development studies at
                    Noroff, this project is designed to engage children aged 7 -
                    14 through a fun and interactive digital experience. The
                    goal was to combine playful visuals with educational
                    content, making learning both accessible and exciting for
                    young users.
                  </p>

                  <div className="flex gap-3 mt-2">
                    <a
                      href="https://kjetilhhauger.github.io/science_museum//"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-700 transition"
                    >
                      Visit Site
                    </a>
                    <a
                      href="https://github.com/KjetilHHauger/science_museum"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white text-lg font-semibold rounded hover:bg-gray-900 transition"
                    >
                      GitHub Repository
                    </a>
                  </div>
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
                <div className="flex flex-col items-center w-full max-w-md mx-auto text-center gap-4">
                  <h2 className="text-3xl font-bold">Holidaze</h2>

                  <img
                    src="/images/Holidaze.webp"
                    alt="Screenshot of the project"
                    loading="lazy"
                    className="w-full rounded shadow-md"
                  />

                  <p className="text-lg text-left text-gray-700 leading-relaxed">
                    Holidaze is a responsive React-based booking platform built
                    for my Noroff final project. It features venue filtering,
                    user authentication, and a hero video landing page — all
                    styled with Tailwind and built for performance.
                  </p>

                  <span className=" text-xl text-gray-600">
                    Stay curious, stay cozy, stay Holidaze.
                  </span>

                  <div className="flex gap-3 mt-2">
                    <a
                      href="https://khh-daze.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-700 transition"
                    >
                      Visit Site
                    </a>
                    <a
                      href="https://github.com/KjetilHHauger/KHH-AUCTION-24"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white text-lg font-semibold rounded hover:bg-gray-900 transition"
                    >
                      GitHub Repository
                    </a>
                  </div>
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
                <div className="flex flex-col items-center w-full max-w-md mx-auto text-center gap-4">
                  <h2 className="text-3xl font-bold">Hammer Time</h2>

                  <img
                    src="/images/HammerTime.webp"
                    alt="Screenshot of the project"
                    loading="lazy"
                    className="w-full rounded shadow-md"
                  />

                  <p className="text-lg text-left text-gray-700 leading-relaxed">
                    Welcome to Hammer Time — an interactive auction platform
                    built as part of my studies at Noroff. This project allows
                    users to explore live auctions, place bids, and create their
                    own listings. Featuring user authentication, listing
                    management, and real-time bidding functionality, it’s
                    powered by the Noroff Auction API and designed for smooth,
                    intuitive interaction. Think of it as eBay with more
                    personality (and fewer fees).
                  </p>

                  <div className="flex gap-3 mt-2">
                    <a
                      href="https://khh-ht.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-700 transition"
                    >
                      Visit Site
                    </a>
                    <a
                      href="https://github.com/KjetilHHauger/KHH-AUCTION-24"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white text-lg font-semibold rounded hover:bg-gray-900 transition"
                    >
                      GitHub Repository
                    </a>
                  </div>
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
              className="
              bg-white text-black p-6 rounded shadow-lg w-[90%] max-w-[600px] max-h-[90vh] h-fit overflow-auto relative"
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
