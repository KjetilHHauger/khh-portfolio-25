import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ progress }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src="/KHH.png" alt="KHH Logo" className="w-[400px] " />
        <p className="mt-4 text-sm animate-pulse opacity-75">Loading...</p>
      </motion.div>
    </AnimatePresence>
  );
}
