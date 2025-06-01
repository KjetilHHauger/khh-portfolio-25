import InteractiveModal from "../Interactive/InteractiveModal";

export default function DeskSetup({ setModalContent }) {
  return (
    <InteractiveModal
      url="/models/CardboardBoxes.glb"
      position={[-8, 0, -8.8]}
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
              purchase, sealed with the hope that one day, in the golden glow of
              retirement, it will be built. Or admired. Or… traded for a house.
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
  );
}
