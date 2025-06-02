import { useRef, useEffect } from "react";

export default function MobileControls({ onMove, onLook }) {
  const joystickRef = useRef(null);
  const origin = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const joystick = joystickRef.current;
    if (!joystick) return;

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      origin.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const dx = touch.clientX - origin.current.x;
      const dy = touch.clientY - origin.current.y;
      onLook(dx, dy);
    };

    const handleTouchEnd = () => {
      onLook(0, 0);
    };

    joystick.addEventListener("touchstart", handleTouchStart);
    joystick.addEventListener("touchmove", handleTouchMove);
    joystick.addEventListener("touchend", handleTouchEnd);

    return () => {
      if (!joystick) return; // ✅ null check before removing
      joystick.removeEventListener("touchstart", handleTouchStart);
      joystick.removeEventListener("touchmove", handleTouchMove);
      joystick.removeEventListener("touchend", handleTouchEnd);
    };
  }, [onLook]);

  return (
    <>
      {/* Buttons */}
      <div className="absolute bottom-4 right-4 z-50 flex flex-col gap-4">
        <button
          className="bg-white/80 p-4 rounded-full text-xl"
          onTouchStart={() => onMove("forward", true)}
          onTouchEnd={() => onMove("forward", false)}
        >
          ↑
        </button>
        <button
          className="bg-white/80 p-4 rounded-full text-xl"
          onTouchStart={() => onMove("backward", true)}
          onTouchEnd={() => onMove("backward", false)}
        >
          ↓
        </button>
      </div>
    </>
  );
}
