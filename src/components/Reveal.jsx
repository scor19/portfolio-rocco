import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({
  children,
  delay = 0.25,
  amount = 0.75,
  direction = "left",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount,
    once: true,
  });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    console.log("isInView", isInView);
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  const initial = {
    left: { x: -60, y: 0 },
    right: { x: 60, y: 0 },
    top: { x: 0, y: -60 },
    bottom: { x: 0, y: 60 },
  };

  return (
    <div ref={ref} className="reveal-component relative object-contain">
      <motion.div
        variants={{
          hidden: { opacity: 0, ...initial[direction] },
          visible: { opacity: 1, x: 0, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  amount: PropTypes.number,
  direction: PropTypes.oneOf(["left", "right", "top", "bottom"]),
};

export default Reveal;
