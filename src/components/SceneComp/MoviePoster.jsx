import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import InteractiveModal from "../Interactive/InteractiveModal";

export default function MoviePoster({ setModalContent }) {
  const posterTexture = useLoader(TextureLoader, "/images/RunnersPoster.webp");
  const degToRad = (deg) => (deg * Math.PI) / 180;

  return (
    <group position={[-8, 0, -8.8]}>
      <InteractiveModal
        url="/models/Frame.glb"
        position={[-2.1, 6, 3]}
        rotation={[90, 0, -90]}
        scale={10}
        hitboxPosition={[-0.04, 0, -0.08]}
        hitboxScale={[0.3, 0.1, 0.44]}
        hitboxRotation={[0, 0, 0]}
        onClick={() => {
          document.exitPointerLock?.();
          setTimeout(() => {
            setModalContent(
              <div className="flex flex-col items-center w-full max-w-md mx-auto text-center gap-4">
                <h2 className="text-2xl font-bold text-center">
                  Runners Part 2
                </h2>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/qardOF52JDo?si=360OSeoztBNkNzLi"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            );
          }, 0);
        }}
      />
      <mesh
        position={[-1.85, 6.8, 3.35]}
        scale={[2.8, 4, 1]}
        rotation={[degToRad(0), degToRad(90), degToRad(0)]}
      >
        <planeGeometry />
        <meshBasicMaterial map={posterTexture} />
      </mesh>
    </group>
  );
}
