import { useState, useEffect, useRef } from "react";
import { motion, MotionConfig } from "framer-motion";

const AnimatedHamburguerButton = () => {
  const [active, setActive] = useState(false);

  const menuRef = useRef(null);

  const toggleMenu = () => {
    setActive((pv) => !pv);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    if (active) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active]);

  return (
    <div ref={menuRef} className="relative">
      <MotionConfig
        transition={{ duration: 0.5, ease: "easeInOut", times: [0, 0.5, 1] }}
      >
        <motion.button
          initial={false}
          onClick={toggleMenu}
          animate={active ? "open" : "closed"}
          className="relative z-10 h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-black/10 md:hidden"
        >
          <motion.span
            style={{ top: "35%", left: "50%", x: "-50%", y: "-50%" }}
            className="absolute h-1 w-10 bg-black"
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
                top: ["35%", "50%", "50%"],
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
                top: ["50%", "50%", "35%"],
              },
            }}
          />
          <motion.span
            className="absolute h-1 w-10 bg-black"
            style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "-45deg"],
              },
              closed: {
                rotate: ["-45deg", "0deg", "0deg"],
              },
            }}
          />
          <motion.span
            style={{ bottom: "35%", left: "50%", x: "-50%", y: "50%" }}
            className="absolute h-1 w-10 bg-black"
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
                bottom: ["35%", "50%", "50%"],
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
              },
            }}
          />
        </motion.button>
      </MotionConfig>

      {active && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="absolute right-[80px] bottom-[-100px] overflow-hidden rounded-lg bg-gray-100 shadow-lg"
        >
          <ul className="flex flex-col items-start gap-4 p-4 font-bold">
            <li>
              <a href="#home" onClick={toggleMenu}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contacto
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default AnimatedHamburguerButton;
