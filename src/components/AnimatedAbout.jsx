import { motion } from "framer-motion";
import pc2 from "../assets/pc2.webp";

const AnimatedAbout = () => {
  <div>
    <motion.img
      className="w-[300px] h-[300px] border-8 rounded-full overflow-hidden"
      src={pc2}
      alt="pc"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
  </div>;
};

export default AnimatedAbout;
