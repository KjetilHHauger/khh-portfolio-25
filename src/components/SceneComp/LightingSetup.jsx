export default function LightingSetup() {
  return (
    <>
      <ambientLight intensity={5} />
      <directionalLight
        intensity={1}
        position={[100, 20, 100]}
        castShadow={false}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
    </>
  );
}
