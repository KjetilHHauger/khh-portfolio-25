export default function CameraDebugHUD({ cameraInfo }) {
  const fmt = (arr) => arr.map((n) => n.toFixed(2)).join(", ");

  return (
    <div
      style={{
        position: "fixed",
        top: 100,
        left: 0,
        padding: "6px 10px",
        background: "rgba(0,0,0,0.6)",
        color: "white",
        fontSize: "12px",
        fontFamily: "monospace",
        zIndex: 1000,
        pointerEvents: "none",
      }}
    >
      <strong>Dev camera tracker</strong>
      <div>Pos: {fmt(cameraInfo.position)}</div>
      <div>Rot: {fmt(cameraInfo.rotation)}</div>
    </div>
  );
}
