import Navbar from "./Navbar";
import Projects from "./Projects";
import About from "./About";
import AnimatedReactIcon from "./AnimatedReactIcon";
import Reveal from "./Reveal";
import AnimatedImage from "./AnimatedImage";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Fade from "./Fade";
// import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Navbar />
      <section id="home" className="">
        <div className="flex md:flex-row flex-col md:mx-auto justify-between items-center max-w-5xl mx-2 md:my-[200px] my-[100px] md:px-6 px-2">
          <div>
            <Reveal>
              <h1 className="font-[800] text-5xl w-full md:w-[500px] leading-[60px] md:text-left text-center">
                Front-End React
              </h1>
            </Reveal>
            <div className="flex items-center justify-center md:justify-start">
              <Reveal>
                <p className="font-[800] text-5xl leading-[60px] md:text-left text-center shrink-0">
                  Developer
                </p>
              </Reveal>
              {/* <FaReact size={40} className="text-[#00A8E8] md:ml-4" /> */}
              <div className="ml-4">
                <Fade delay={0.75}>
                  <AnimatedReactIcon />
                </Fade>
              </div>
            </div>
            <p className="text-lg w-full md:w-[450px] text-gray-500 my-5 md:text-left text-center">
              Soy <span className="text-[#00A8E8]">Rocco</span>, un
              desarrollador front-end con experiencia en React, Node.js y
              JavaScript.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/rocco-bazo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://github.com/scor19"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </div>
          </div>
          {/* <img
              src={rocco}
              alt="gojo"
              className=""
            /> */}
          <AnimatedImage />
        </div>
      </section>
      <section>
        <About />
      </section>
      <section>
        <Projects />
      </section>
    </>
  );
};

export default Home;
