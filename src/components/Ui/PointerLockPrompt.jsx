export default function PointerLockPrompt() {
  const handleClick = () => {
    const canvas = document.querySelector("canvas");
    if (canvas) {
      canvas.requestPointerLock?.();
    }
  };

  return (
    <div
      onClick={handleClick}
      className="fixed top-4 left-4 z-50 text-white bg-black/50 px-3 py-1 rounded cursor-pointer"
    >
      Click to Move (WASD)
    </div>
  );
}
