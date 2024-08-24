import { motion } from "framer-motion";
import rocco from "../assets/roccolessred.webp";

const AnimatedImage = () => {
  return (
    <div>
      <motion.img
        src={rocco}
        alt="rocco"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:w-[300px] w-[300px] border-8 rounded-full overflow-hidden"
      />
    </div>
  );
};

export default AnimatedImage;
