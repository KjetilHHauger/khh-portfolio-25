import InteractiveModal from "../Interactive/InteractiveModal";
import Prop from "../Prop";
import CorkImage from "./CorkImage";

export default function CorkBoard({ setModalContent }) {
  return (
    <>
      <CorkImage
        imageUrl="/images/cork/Dresin.webp"
        position={[0.58, 5.55, 7.889]}
        rotation={[0, 180, 3]}
        size={[0.6, 0.6, 1]}
        setModalContent={setModalContent}
      />
      <CorkImage
        className="index-10"
        imageUrl="/images/cork/smoke2.webp"
        position={[1, 6, 7.888]}
        rotation={[0, 180, -9]}
        size={[0.6, 0.6, 1]}
        setModalContent={setModalContent}
      />
      <CorkImage
        className="index-5"
        imageUrl="/images/cork/Gentlemen.webp"
        position={[0.6, 6, 7.89]}
        rotation={[0, 180, -9]}
        size={[0.4, 0.4, 1]}
        setModalContent={setModalContent}
      />
      <CorkImage
        className="index-5"
        imageUrl="/images/cork/Minature.webp"
        position={[2.46, 5.8, 7.889]}
        rotation={[0, 180, -3]}
        size={[0.4, 0.4, 1]}
        setModalContent={setModalContent}
      />
      <CorkImage
        className="index-5"
        imageUrl="/images/cork/Minature2.webp"
        position={[2.8, 6, 7.89]}
        rotation={[0, 180, 1]}
        size={[0.5, 0.5, 1]}
        setModalContent={setModalContent}
      />
      <InteractiveModal
        url="/models/Post-it.glb"
        position={[3.4, 6.98, 7.85]}
        rotation={[0, 180, 10]}
        scale={5}
        hitboxPosition={[0, 0.04, 0]}
        hitboxScale={[0.08, 0.08, 0.01]}
        hitboxRotation={[0, 0, 0]}
        onClick={() =>
          setModalContent(
            <div className="flex flex-col items-center w-full max-w-md mx-auto text-center gap-4">
              <h2 className="text-2xl font-bold text-center">My Logo</h2>
              <img
                src="/images/KHH_Black.png"
                alt="KHH Logo"
                loading="lazy"
                className="w-full rounded"
              />
              <p className="text-sm text-left text-gray-700 leading-relaxed">
                You like it? i do.
              </p>
            </div>
          )
        }
      />

      <InteractiveModal
        url="/models/Post-it.glb"
        position={[3, 6.65, 7.85]}
        rotation={[0, 180, -7]}
        scale={5}
        hitboxPosition={[0, 0.04, 0]}
        hitboxScale={[0.08, 0.08, 0.01]}
        hitboxRotation={[0, 0, 0]}
        onClick={() =>
          setModalContent(
            <div className="flex flex-col items-center w-full max-w-md mx-auto text-center gap-4">
              <h2 className="text-2xl font-bold text-center">Shopping List</h2>
              <ul className="text-left text-sm text-gray-700 leading-relaxed list-disc list-inside">
                <li>Bananas</li>
                <li>Milk</li>
                <li>Instant noodles</li>
                <li>Cheese</li>
                <li>Toilet paper</li>
                <li>Grandiosa</li>
                <li>Pepsi max</li>
                <li>Burger</li>
                <li>Egg</li>
              </ul>
            </div>
          )
        }
      />

      <Prop
        url="/models/Corkboard.glb"
        position={[2, 5, 7.92]}
        rotation={[0, 180, 0]}
        scale={5}
        roughness={1}
      />
    </>
  );
}
