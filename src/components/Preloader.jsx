// Don't handle loading logic here anymore, just show animation
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const texts = ["Elegance.", "Value.", "Vision."];

const letterAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const container = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const Preloader = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    if (currentTextIndex < texts.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentTextIndex((prev) => prev + 1);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [currentTextIndex]);

  const currentText = texts[currentTextIndex];

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-[9999]" // VERY high z-index
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <motion.div
        key={currentText}
        className="text-transparent text-6xl font-extrabold bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-300"
        variants={container}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {currentText.split("").map((char, i) => (
          <motion.span key={i} variants={letterAnimation}>
            {char}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
