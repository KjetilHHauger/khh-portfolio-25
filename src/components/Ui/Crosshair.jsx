export default function Crosshair() {
  return (
    <div
      className="fixed top-1/2 left-1/2 z-50 pointer-events-none"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <div className="w-2 h-2 bg-white rounded-full shadow" />
    </div>
  );
}
