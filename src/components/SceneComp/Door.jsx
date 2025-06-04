import { TextureLoader } from "three";
import InteractiveModal from "../Interactive/InteractiveModal";

export default function Door({ setModalContent }) {
  return (
    <group position={[-2, 8.5, -3]}>
      <InteractiveModal
        url="/models/Door.glb"
        position={[-2, -4, 11]}
        rotation={[90, 90, -90]}
        scale={4}
        hitboxPosition={[-0.04, -0.13, -0.2]}
        hitboxScale={[0.3, 1.9, 0.9]}
        hitboxRotation={[0, 0, 0]}
        onClick={() => {
          document.exitPointerLock?.();
          setTimeout(() => {
            setModalContent(
              <div className="flex flex-col items-center w-full max-w-md mx-auto text-center gap-4">
                <h2 className="text-2xl font-bold text-center">Beware:</h2>
                <p>This door is just a figment of your imagination!</p>
              </div>
            );
          }, 0);
        }}
      />
    </group>
  );
}
