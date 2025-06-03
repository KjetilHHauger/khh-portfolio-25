import { useEffect, useRef } from "react";
import nipplejs from "nipplejs";

export default function JoystickUI({ onMove }) {
  const joystickRef = useRef(null);

  useEffect(() => {
    const joystick = nipplejs.create({
      zone: joystickRef.current,
      mode: "static",
      position: { left: "20%", bottom: "20%" },
      color: "white",
      size: 100,
    });

    joystick.on("move", (_, data) => {
      const angle = data.angle?.radian || 0;
      const force = data.force || 0;
      onMove({ angle, force });
    });

    joystick.on("end", () => {
      onMove({ angle: 0, force: 0 });
    });

    return () => joystick.destroy();
  }, [onMove]);

  return (
    <div
      ref={joystickRef}
      className="fixed bottom-14 left-14 w-[150px] h-[150px] z-50"
    />
  );
}
