import { useState, useEffect, useRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { MathUtils } from "three";
import Prop from "../Prop";
import MovingCars from "../Interactive/MovingCars";

const carModels = [
  "/models/cars/Car1.glb",
  "/models/cars/Car2.glb",
  "/models/cars/Car3.glb",
  "/models/cars/Car4.glb",
  "/models/cars/Car5.glb",
  "/models/cars/Car6.glb",
  "/models/cars/Car7.glb",
];

export default function OutsideSetup({
  rotation = [0, 0, 0],
  position = [0, 0, 0],
  scale = 1,
}) {
  const toRadians = (degArray) => degArray.map(MathUtils.degToRad);
  const [cars, setCars] = useState([]);
  const lastModelRef = useRef(null);

  const carModelCache = useMemo(() => {
    const map = {};
    for (const path of carModels) {
      map[path] = useGLTF(path);
    }
    return map;
  }, []);

  useEffect(() => {
    let timeoutId;

    const spawnCar = () => {
      let modelUrl;
      do {
        modelUrl = carModels[Math.floor(Math.random() * carModels.length)];
      } while (modelUrl === lastModelRef.current && carModels.length > 1);
      lastModelRef.current = modelUrl;

      const direction = Math.random() < 0.5 ? "forward" : "backward";
      const xOffset = direction === "forward" ? -5 : 0.5;

      const newCar = {
        id: crypto.randomUUID(),
        model: carModelCache[modelUrl].scene,
        speed: 5 + Math.random() * 1.5,
        direction,
        xOffset,
        startTime: Date.now(),
      };

      setCars((prev) => [
        ...prev.filter((c) => Date.now() - c.startTime < 15000),
        newCar,
      ]);

      const nextDelay = 1500 + Math.random() * 4500;
      timeoutId = setTimeout(spawnCar, nextDelay);
    };

    timeoutId = setTimeout(spawnCar, 500);
    return () => clearTimeout(timeoutId);
  }, [carModelCache]);

  return (
    <group position={position} scale={scale} rotation={toRadians(rotation)}>
      <Prop
        url="/models/CountrySideRoadSeamless.glb"
        position={[24, -3, 0]}
        rotation={[0, 180, 0]}
        scale={[1, 1, 1]}
      />
      {cars.map((car) => (
        <MovingCars
          key={car.id}
          model={car.model}
          speed={car.speed}
          direction={car.direction}
          xOffset={car.xOffset}
        />
      ))}
    </group>
  );
}
