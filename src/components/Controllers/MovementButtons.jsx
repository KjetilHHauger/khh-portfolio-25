import { useState } from "react";

export default function MovementButtons({ onChange }) {
  const [state, setState] = useState({ forward: false, backward: false });

  const handlePress = (dir, val) => {
    const newState = { ...state, [dir]: val };
    setState(newState);
    onChange(newState);
  };

  return (
    <div className="fixed bottom-4 left-1/2 flex gap-4 z-50 -translate-x-1/2">
      <button
        className="bg-white/70 text-black px-4 py-2 rounded shadow-lg text-lg active:scale-95"
        onTouchStart={() => handlePress("forward", true)}
        onTouchEnd={() => handlePress("forward", false)}
      >
        ↑
      </button>
      <button
        className="bg-white/70 text-black px-4 py-2 rounded shadow-lg text-lg active:scale-95"
        onTouchStart={() => handlePress("backward", true)}
        onTouchEnd={() => handlePress("backward", false)}
      >
        ↓
      </button>
    </div>
  );
}
