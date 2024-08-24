import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

const AnimatedReactIcon = () => {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.5,
      }}
    >
      <FaReact size={40} className="text-[#00A8E8]" />
    </motion.div>
  );
};

export default AnimatedReactIcon;
