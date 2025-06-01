export default function LightingSetup() {
  return (
    <>
      <ambientLight intensity={3} />
      <directionalLight position={[1, 3, 15]} intensity={1} castShadow />
      <pointLight position={[2, 2, 2]} intensity={0.5} />
    </>
  );
}
