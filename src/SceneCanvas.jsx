import { Canvas } from "@react-three/fiber";
import {
  useProgress,
  Stats,
  PerspectiveCamera,
  Sky,
  KeyboardControls,
} from "@react-three/drei";
import { useState, useEffect, useRef, useMemo } from "react";
import { AnimatePresence } from "framer-motion";

import LoadingScreen from "./components/LoadingScreen";
import FloorGrid from "./components/FloorGrid";
import PlayerControls from "./components/Controllers/PlayerControls";
import DeskSetup from "./components/SceneComp/DeskSetup";
import ShelfSetup from "./components/SceneComp/ShelfSetup";
import WallSetup from "./components/SceneComp/WallSetup";
import LightingSetup from "./components/SceneComp/LightingSetup";
import AnimationModalWrapper from "./components/Ui/AnimationModalWrapper";
import Crosshair from "./components/Ui/Crosshair";
import CardBoardBoxes from "./components/SceneComp/CardBoardBoxes";
import MoviePoster from "./components/SceneComp/MoviePoster";
import MovementButtons from "./components/Controllers/MovementButtons";
import JoystickUI from "./components/Ui/JoystickUI";
import MobileControlLogic from "./components/Controllers/MobileControllerLogic";
import Door from "./components/SceneComp/Door";
import LightSwitch from "./components/SceneComp/LightSwitch";
import OutsideSetup from "./components/SceneComp/OutsideSetup";

export default function SceneCanvas() {
  const [modalContent, setModalContent] = useState(null);
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  const [movement, setMovement] = useState({ forward: false, backward: false });
  const joystickInput = useRef({ angle: 0, force: 0 });
  const [sensitivity, setSensitivity] = useState(1.3);
  const [pointerLocked, setPointerLocked] = useState(false);
  const cameraRef = useRef();
  const cameraRig = useRef();
  const movementBounds = {
    x: [-8, 7],
    y: [2, 8],
    z: [-8, 7],
  };
  const [lightsOn, setLightsOn] = useState(false);
  const { active, progress } = useProgress();

  const sunPosition = useMemo(() => {
    const theta = Math.PI * 0.4;
    const phi = 2 * Math.PI * 0.25;

    const x = Math.cos(phi) * Math.sin(theta);
    const y = Math.cos(theta);
    const z = Math.sin(phi) * Math.sin(theta);

    return [x * 450000, y * 450000, z * 450000];
  }, []);

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const updateLock = () => {
      setPointerLocked(document.pointerLockElement === canvas);
    };
    document.addEventListener("pointerlockchange", updateLock);
    return () => document.removeEventListener("pointerlockchange", updateLock);
  }, []);

  return (
    <>
      <AnimatePresence>
        {active && <LoadingScreen progress={progress} />}
      </AnimatePresence>
      <div
        onClick={() => document.body.requestPointerLock()}
        className="fixed invisible md:visible bottom-4 left-4 z-50 text-white bg-black/50 px-3 py-1 rounded cursor-pointer"
      >
        <p>Click to Reconnect Camera</p>
        <p>Click to Move (WASD)</p>
      </div>

      {!modalContent && (
        <div
          className="fixed top-1/2 left-1/2 z-50 pointer-events-none"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <div className="w-2 h-2 bg-white rounded-full shadow" />
        </div>
      )}

      <KeyboardControls
        map={[
          { name: "forward", keys: ["KeyW"] },
          { name: "backward", keys: ["KeyS"] },
          { name: "left", keys: ["KeyA"] },
          { name: "right", keys: ["KeyD"] },
        ]}
      >
        <Canvas
          camera={{ position: [0, 5, 0], fov: 50 }}
          gl={{ toneMappingExposure: 0.9 }}
          style={{ width: "100vw", height: "100vh" }}
        >
          <Sky distance={450000} sunPosition={sunPosition} />
          <directionalLight
            position={sunPosition}
            intensity={2}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />

          {/* Lighting */}
          <LightSwitch toggleLights={() => setLightsOn((prev) => !prev)} />
          <LightingSetup lightsOn={lightsOn} />

          {/* Camera */}
          <group ref={cameraRig}>
            <PerspectiveCamera
              makeDefault
              ref={cameraRef}
              position={[-5, 5, 7]}
            />
          </group>

          {/* Controls */}
          <PlayerControls speed={0.15} bounds={movementBounds} />

          {isMobile && (
            <MobileControlLogic
              movement={movement}
              look={joystickInput}
              sensitivity={sensitivity}
              lockVertical={true}
              cameraRef={cameraRef}
              rigRef={cameraRig}
              bounds={movementBounds}
            />
          )}

          <Stats />
          {/* Room objects */}
          <CardBoardBoxes setModalContent={setModalContent} />
          <MoviePoster setModalContent={setModalContent} />
          {/* Desk */}
          <DeskSetup setModalContent={setModalContent} />
          {/* Shelf */}
          <ShelfSetup setModalContent={setModalContent} />
          {/* Wall */}
          <WallSetup />
          {/* Outside */}
          <OutsideSetup />

          <Door setModalContent={setModalContent} />

          {/* Floor */}
          <FloorGrid
            url="/models/FloorTile.glb"
            position={[0, 0, 0]}
            scale={1}
            color="#625d57"
          />
        </Canvas>
      </KeyboardControls>

      {isMobile && (
        <>
          <JoystickUI onMove={(v) => (joystickInput.current = v)} />
          <MovementButtons onChange={setMovement} />
        </>
      )}

      {!active && !modalContent && <Crosshair />}

      <AnimationModalWrapper
        modalContent={modalContent}
        setModalContent={setModalContent}
      />
    </>
  );
}
