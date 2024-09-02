import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[4px] z-[100] w-full origin-0 bg-primary/50 rounded-2xl"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    ></motion.div>
  );
};

export default ScrollProgress;
