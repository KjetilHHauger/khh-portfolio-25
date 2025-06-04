import InteractiveLightSwitch from "../Interactive/InteractiveLightSwitch";

export default function LightSwitch({ toggleLights }) {
  return (
    <group position={[0, 0, 0]}>
      <InteractiveLightSwitch
        url="/models/LightSwitch.glb"
        position={[-2, 5, 7.85]}
        rotation={[0, Math.PI, 0]}
        scale={4}
        hitboxPosition={[0, 0, -0.02]}
        hitboxScale={[0.12, 0.12, 0.02]}
        hitboxRotation={[0, 0, 0]}
        onClick={toggleLights}
      />
    </group>
  );
}
