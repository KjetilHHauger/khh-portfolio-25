export default function PopUpModal({ content, onClose }) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/80 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded relative max-w-[90vw] max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-black text-xl"
          onClick={onClose}
        >
          ✕
        </button>
        {content}
      </div>
    </div>
  );
}
