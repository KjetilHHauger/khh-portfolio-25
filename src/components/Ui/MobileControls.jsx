import { useEffect } from "react";

export default function MobileControls({ onMove }) {
  return (
    <div className="absolute bottom-4 left-4 z-50 flex gap-4">
      {/* Backward */}
      <button
        className="bg-white/80 p-3 rounded-full"
        onTouchStart={() => onMove("backward", true)}
        onTouchEnd={() => onMove("backward", false)}
      >
        ⬅
      </button>

      {/* Forward */}
      <button
        className="bg-white/80 p-3 rounded-full"
        onTouchStart={() => onMove("forward", true)}
        onTouchEnd={() => onMove("forward", false)}
      >
        ➡
      </button>
    </div>
  );
}
