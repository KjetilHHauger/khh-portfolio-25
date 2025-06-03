import { useState } from "react";

export default function MovementButtons({ onChange }) {
  const [state, setState] = useState({ forward: false, backward: false });

  const handlePress = (dir, val) => {
    const newState = { ...state, [dir]: val };
    setState(newState);
    onChange(newState);
  };

  return (
    <div
      className="fixed bottom-4 right-4 flex flex-col gap-4 z-50 select-none"
      style={{ touchAction: "none" }}
      onTouchMove={(e) => e.preventDefault()}
    >
      <button
        className="bg-white/70 text-black px-4 py-2 rounded shadow-lg text-lg active:scale-95"
        onTouchStart={() => handlePress("forward", true)}
        onTouchEnd={() => handlePress("forward", false)}
        onTouchCancel={() => handlePress("forward", false)}
      >
        ↑
      </button>
      <button
        className="bg-white/70 text-black px-4 py-2 rounded shadow-lg text-lg active:scale-95"
        onTouchStart={() => handlePress("backward", true)}
        onTouchEnd={() => handlePress("backward", false)}
        onTouchCancel={() => handlePress("forward", false)}
      >
        ↓
      </button>
    </div>
  );
}
