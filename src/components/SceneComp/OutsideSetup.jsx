import Prop from "../Prop";
import { MathUtils } from "three";

export default function OutsideSetup({
  rotation = [0, 0, 0], // Degrees
  position = [0, 0, 0],
  scale = 1,
}) {
  const toRadians = (degArray) => degArray.map(MathUtils.degToRad);

  return (
    <group position={position} scale={scale} rotation={toRadians(rotation)}>
      <Prop
        url="/models/CountrySideRoadSeamless.glb"
        position={[24, -3, 0]}
        rotation={[0, 180, 0]}
        scale={[1, 1, 1]}
      />
    </group>
  );
}
