import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Fade = ({ children, delay = 0.25 }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

Fade.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
};

export default Fade;
