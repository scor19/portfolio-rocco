import Navbar from "../components/Navbar";
import Projects from "./Projects";
import About from "./About";
import AnimatedReactIcon from "../components/AnimatedReactIcon";
import Reveal from "../components/Reveal";
import AnimatedImage from "../components/AnimatedImage";
import Footer from "./Footer";
import ScrollProgress from "../components/ScrollProgress";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Fade from "../components/Fade";

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 duration-300">
      <ScrollProgress />
      <Navbar />
      <section id="home" className="scroll-mt-32">
        <div className="flex md:flex-row flex-col md:mx-auto justify-between items-center max-w-5xl mx-2 md:my-[200px] my-[100px] md:px-6 px-2">
          <div>
            <Reveal>
              <h1 className="font-[800] text-5xl w-full md:w-[500px] leading-[60px] md:text-left text-center shrink-0 dark:text-white duration-300 cursor-default">
                Front-End React
              </h1>
            </Reveal>
            <div className="flex items-center justify-center md:justify-start">
              <Reveal>
                <p className="font-[800] text-5xl leading-[60px] md:text-left text-center shrink-0 dark:text-white duration-300 cursor-default">
                  Developer
                </p>
              </Reveal>
              <div className="ml-4">
                <Fade delay={0.75}>
                  <AnimatedReactIcon />
                </Fade>
              </div>
            </div>
            <p className="text-lg w-full md:w-[450px] text-gray-500 my-5 md:text-left text-center cursor-default dark:text-gray-400 duration-300">
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
                <FaLinkedin
                  size={40}
                  className={
                    "text-black dark:text-white hover:text-[#00A8E8] dark:hover:text-[#00A8E8] duration-300 hover:cursor-pointer"
                  }
                />
              </a>
              <a
                href="https://github.com/scor19"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  size={40}
                  className={
                    "text-black dark:text-white hover:text-gray-400 dark:hover:text-gray-600 duration-300 hover:cursor-pointer"
                  }
                />
              </a>
            </div>
          </div>
          <AnimatedImage />
        </div>
      </section>
      <section id="about" className="scroll-mt-[300px]">
        <About />
      </section>
      <section id="projects" className="scroll-mt-[70px]">
        <Projects />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
