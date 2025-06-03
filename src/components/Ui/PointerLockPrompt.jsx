export default function PointerLockPrompt() {
  const handleClick = () => {
    const canvas = document.querySelector("canvas");
    canvas?.requestPointerLock?.();
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="fixed bottom-4 left-4 z-50 text-white bg-black/50 px-3 py-1 rounded cursor-pointer"
      >
        Click to Move (WASD)
      </div>{" "}
      <div
        onClick={handleClick}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-white bg-black/50 px-4 py-2 rounded cursor-pointer shadow"
      >
        Click to Reconnect Camera
      </div>
    </>
  );
}
