import { useEffect, useRef } from "react";
import nipplejs from "nipplejs";

export default function Thumbstick({ onMove }) {
  const zoneRef = useRef();

  useEffect(() => {
    const manager = nipplejs.create({
      zone: zoneRef.current,
      mode: "static",
      position: { left: "60px", bottom: "60px" },
      color: "white",
      size: 80,
    });

    manager.on("move", (_, data) => {
      const rad = data.angle.radian;
      const force = data.force;
      const scaled = Math.min(force * 0.2, 2.8); // Sensitivity
      const dx = Math.cos(rad) * scaled;
      const dy = -Math.sin(rad) * scaled;
      onMove({ dx, dy });
    });

    manager.on("end", () => onMove({ dx: 0, dy: 0 }));

    return () => manager.destroy();
  }, [onMove]);

  return (
    <div
      ref={zoneRef}
      className="absolute bottom-4 left-4 w-32 h-32 z-50 touch-none"
    />
  );
}
