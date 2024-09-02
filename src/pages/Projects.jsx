import ScrSTA1 from "../assets/STA1.webp";
import ScrSTA2 from "../assets/STA2.webp";
import ScrSTA3 from "../assets/STA4.webp";
import ScrSTA4 from "../assets/STA3.webp";
import RentableInversor from "../assets/RentableInversor.webp";
import Reveal from "../components/Reveal";
import MockupWithCarousel from "../components/MockupWithCarousel";
import { FaGithub } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  const projects = [
    {
      name: "Schedule Time App",
      description:
        "Schedule Time App es una aplicación móvil diseñada para médicos que permite gestionar los turnos de sus pacientes. Con una interfaz intuitiva, facilita la organización de citas, el seguimiento del historial médico de cada paciente y la optimización del tiempo de consulta.",
      stack: ["React Native", "MySQL", "Node.js", "Express", "JWT"],
      repo: "https://www.google.com",
      demo: "",
      images: [ScrSTA1, ScrSTA2, ScrSTA3, ScrSTA4],
      isMobile: true,
    },
    {
      name: "Rentable Inversor",
      description:
        "La web de Rentable Inversor se realizó con la finalidad de vender cursos de inversión. Todos los aspectos de los cursos en venta pueden ser actualizados facilmente desde un panel de administrador. También cuenta con un apartado para publicar cursos y próximas clases.",
      stack: ["React", "Firebase", "Tailwind"],
      repo: "",
      demo: "https://www.rentableinversor.com",
      image: RentableInversor,
      isMobile: false,
    },
    {
      name: "Truco argentino discord",
      description:
        "Este es un proyecto de aplicación web para jugar al Truco Argentino, un juego de cartas de mesa. El objetivo de este proyecto es integrarlo en las actividades de discord una vez terminado. Por lo pronto se esta desarrollando el backend con el uso de WebSockets. ",
      stack: ["Node.js", "Express", "Socket.io"],
      repo: "https://github.com/scor19/truco-ar-discord",
      demo: "",
      image: "",
      isMobile: false,
    },
  ];

  return (
    <div id="projects">
      <Reveal amount={0.5}>
        <div className="container px-4 mb-[50px] mx-auto max-w-5xl">
          <p className="text-lg font-[800] text-primary mb-2">Portafolio</p>
          <p className="text-xl font-[700] text-gray-700">
            Cada proyecto es una oportunidad de aprendizaje
          </p>
        </div>
      </Reveal>
      <div className="container px-4 sm:mb-[200px] mb-[100px] flex justify-center mx-auto w-full">
        <div className="flex flex-col md:gap-[300px] gap-12 font-bold w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col justify-center items-center md:gap-[140px] w-full lg:mx-auto ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full max-w-[512px]">
                <Reveal delay={0.5} amount={0.5} direction="bottom">
                  {project.isMobile ? (
                    <div className="flex justify-center">
                      <MockupWithCarousel project={project} />
                    </div>
                  ) : project.image ? (
                    <div className="flex justify-center">
                      <img
                        src={project.image}
                        alt={project.name + " image"}
                        className="object-cover rounded-xl w-[500px]"
                      />
                    </div>
                  ) : (
                    <div className="flex justify-center items-center bg-dark rounded-xl max-w-[500px] h-[330px]">
                      <span className="text-white text-3xl font-bold p-4 text-center w-full hover:cursor-default">
                        Trabajo en progreso...
                      </span>
                    </div>
                  )}
                </Reveal>
              </div>
              <div className="flex flex-col items-center w-full justify-center md:mt-0 mt-12 max-w-[512px]">
                <Reveal delay={0.5} direction="top">
                  <div className="w-full flex flex-col gap-6 items-center text-center leading-6">
                    <a
                      href={project.link}
                      className="md:text-2xl text-lg font-bold text-gray-800"
                    >
                      {project.name}
                    </a>
                    <p className="text-gray-500 text-md font-medium">
                      {project.description}
                    </p>
                    <div className="flex gap-4">
                      {project.stack.map((stack, index) => (
                        <p
                          key={index}
                          className="text-gray-800 text-md font-bold"
                        >
                          {stack}
                        </p>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="h-10 w-40 rounded-xl bg-black text-white hover:bg-gray-800 hover:shadow-lg active:bg-gray-900 transition-all duration-300 flex items-center justify-center"
                        >
                          Repo
                          <FaGithub size={25} className="ml-2" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="h-10 w-40 rounded-xl bg-black text-white hover:bg-gray-800 hover:shadow-lg active:bg-gray-900 transition-all duration-300 flex items-center justify-center"
                        >
                          Visitar
                          <RxOpenInNewWindow size={25} className="ml-2" />
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              </div>
              {index !== projects.length - 1 && (
                <div className="w-full h-[2px] bg-gray-800 dark:bg-gray-700 mt-12 rounded-3xl shadow shadow-gray-800 opacity-50 md:hidden"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
