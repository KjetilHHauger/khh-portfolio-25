import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats, PerspectiveCamera } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";
import { KeyboardControls } from "@react-three/drei";

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

export default function SceneCanvas() {
  const [modalContent, setModalContent] = useState(null);
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  const [movement, setMovement] = useState({ forward: false, backward: false });
  const joystickInput = useRef({ angle: 0, force: 0 });
  const [sensitivity, setSensitivity] = useState(1);
  const [pointerLocked, setPointerLocked] = useState(false);
  const cameraRef = useRef();
  const cameraRig = useRef();

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
          camera={{ position: [4.99, 8.26, 13.01], fov: 50 }}
          style={{ width: "100vw", height: "100vh" }}
        >
          <color attach="background" args={["#000"]} />
          {/* Lighting */}
          <LightingSetup />
          {/* Camera */}
          <group ref={cameraRig}>
            <PerspectiveCamera
              makeDefault
              ref={cameraRef}
              position={[0, 5, 0]}
            />
          </group>

          {/* Controls */}
          <PlayerControls
            speed={0.15}
            bounds={{
              x: [-8, 8],
              y: [2, 8],
              z: [-8, 8],
            }}
          />

          {isMobile && (
            <MobileControlLogic
              movement={movement}
              look={joystickInput}
              sensitivity={sensitivity}
              lockVertical={true}
              cameraRef={cameraRef}
              rigRef={cameraRig}
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
        <div className="fixed bottom-48 left-1/2 transform -translate-x-1/2 z-50 bg-black/50 p-2 rounded shadow-md text-white text-sm w-[180px]">
          <label className="block mb-1">Look Sensitivity</label>
          <input
            type="range"
            min="0.3"
            max="2"
            step="0.1"
            value={sensitivity}
            onChange={(e) => setSensitivity(parseFloat(e.target.value))}
            className="w-full"
          />
          <div className="text-center mt-1">{sensitivity.toFixed(1)}x</div>
        </div>
      )}

      {isMobile && (
        <>
          <JoystickUI onMove={(v) => (joystickInput.current = v)} />
          <MovementButtons onChange={setMovement} />
        </>
      )}

      {!modalContent && <Crosshair />}

      <AnimationModalWrapper
        modalContent={modalContent}
        setModalContent={setModalContent}
      />
    </>
  );
}
