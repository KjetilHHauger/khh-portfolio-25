import Wall from "../Wall";

export default function WallSetup() {
  return (
    <>
      {/* Wall Blue */}
      <Wall
        url="/models/Wall.glb"
        start={[-10, 0, -10]}
        direction="x"
        length={18}
        height={10}
        color="#2C3E50"
      />

      {/* Wall Green Window */}
      <group position={[0, 0, 0]} scale={1}>
        <Wall
          url="/models/Wall.glb"
          start={[-10, 0, -9]}
          direction="z"
          length={18}
          height={10}
          color="#739592"
        />
      </group>

      {/* Wall Green Right Side */}
      <group position={[18, 0, 0]} scale={1}>
        <Wall
          url="/models/Wall.glb"
          start={[-10, 0, -9]}
          direction="z"
          length={18}
          height={10}
          color="#739592"
        />
      </group>
    </>
  );
}
