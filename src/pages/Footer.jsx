import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import Reveal from "../components/Reveal";

const Footer = () => {
  const copyToClipboard = () => {
    const result = navigator.clipboard.writeText("roccobazo@gmail.com");

    result.then(() => {
      alert("Email copied to clipboard");
    });
  };

  return (
    <Reveal>
      <div className="footer flex justify-center items-center text-gray-800 w-full sm:px-[80px] px-4">
        <div className="flex flex-col sm:flex-row lg:gap-[150px] gap-8 sm:my-24 mb-12">
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-4xl font-bold dark:text-white">Contactame</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Si te gusta mi trabajo, o tenés ideas para un proyecto,
              <br />
              sentite libre de contactarme a traves de mis redes, o mediante
              email.
            </p>
            <ul className="gap-4 font-bold flex items-center dark:text-white">
              <li>
                <a
                  href="#home"
                  className="hover:text-[#00A8E8] duration-300 hover:cursor-pointer active:text-[#00A8E8] active:cursor-default"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#00A8E8] duration-300 hover:cursor-pointer active:text-[#00A8E8] active:cursor-default"
                >
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-[#00A8E8] duration-300 hover:cursor-pointer active:text-[#00A8E8] active:cursor-default"
                >
                  Proyectos{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="mail flex gap-4 sm:flex-row flex-col">
            <div className="flex flex-col justify-center items-center bg-slate-700 sm:h-[200px] sm:w-[200px] rounded-tl-2xl rounded-br-2xl rounded-tr-[3px] shadow-md shadow-gray-800">
              <a
                href="https://www.linkedin.com/in/rocco-bazo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-center items-center hover:scale-110 transition-all duration-300 hover:cursor-pointer"
              >
                <FaLinkedin size={50} className="text-white" />
                <p className="text-gray-300">Rocco Bazo</p>
              </a>
            </div>
            <div className="flex flex-col justify-center items-center bg-slate-700 sm:h-[200px] sm:w-[200px] rounded-tl-2xl rounded-br-2xl rounded-tr-[3px] shadow-md shadow-gray-800">
              <button
                onClick={copyToClipboard}
                className="flex flex-col justify-center items-center hover:scale-110 transition-all duration-300 hover:cursor-pointer"
              >
                <FaEnvelope size={50} className="text-white" />
                <p className="text-gray-300">roccobazo@gmail.com</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 bg-slate-800 py-4 dark:text-gray-400">
        <span>© 2024 Rocco Bazo</span>
      </div>
    </Reveal>
  );
};

export default Footer;
