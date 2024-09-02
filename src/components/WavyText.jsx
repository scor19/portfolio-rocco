// import PropTypes from "prop-types";
// import { useEffect, useRef } from "react";
// import { motion, useInView, useAnimation } from "framer-motion";

// const WavyText = ({ children, delay = 0.25 }) => {
//   const letters = children.split("");

//   return (
//     <div>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: delay }}
//       >
//         {letters.map((letter, index) => (
//           <motion.span
//             key={index}
//             variants={{
//               hidden: { opacity: 0 },
//               visible: { opacity: 1 },
//             }}
//             className="inline-block"
//           >
//             {letter}
//           </motion.span>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default WavyText;
