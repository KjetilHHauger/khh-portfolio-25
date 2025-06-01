import { AnimatePresence, motion } from "framer-motion";

export default function AnimationModalWrapper({
  modalContent,
  setModalContent,
}) {
  return (
    <AnimatePresence>
      {modalContent && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setModalContent(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white text-black p-6 rounded shadow-lg w-[90%] max-w-[600px] max-h-[90vh] h-fit overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <button
              onClick={() => {
                setModalContent(null);
                document.body.requestPointerLock?.();
              }}
              className="absolute top-4 right-4 text-xl"
            >
              ✕
            </button>
            {modalContent}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
