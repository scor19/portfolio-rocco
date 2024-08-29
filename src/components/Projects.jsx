import React from "react";
import ScrSTA1 from "../assets/STA1.webp";
import ScrSTA2 from "../assets/STA2.webp";
import ScrSTA3 from "../assets/STA3.webp";
import ScrSTA4 from "../assets/STA4.webp";
import Celular from "../assets/celular.webp";
import RentableInversor from "../assets/RentableInversor.webp";
import Reveal from "./Reveal";

const Projects = () => {
  const projects = [
    {
      name: "Schedule Time App",
      description: "Aplicación de turnos médicos",
      repo: "https://www.google.com",
      frame: Celular,
      image: ScrSTA1,
      moreImages: [ScrSTA2, ScrSTA3, ScrSTA4],
      isMobile: true,
    },
    {
      name: "Rentable Inversor",
      description: "Web de venta de cursos online",
      repo: "https://www.google.com",
      image: RentableInversor,
      isMobile: false,
    },
  ];

  return (
    <div>
      <Reveal amount={0.5}>
        <div className="md:mx-auto justify-between max-w-5xl mx-2 mb-12 items-center w-full">
          <p className="text-lg font-[800] text-primary mb-2">Portafolio</p>
          <p className="text-xl font-[800] text-gray-700">
            Cada proyecto es una experiencia emocionante
          </p>
        </div>
      </Reveal>
      <div className="container mx-auto px-4 mb-[200px] w-full">
        <div className="md:mx-auto justify-between max-w-5xl mx-2 items-center w-full">
          <div className="flex flex-col gap-10 font-bold">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex justify-between ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="relative w-full">
                  <Reveal delay={0.5} amount={0.5} direction="bottom">
                    {project.frame && project.isMobile && (
                      <>
                        <img
                          src={project.frame}
                          alt="Frame"
                          className="h-[500px] object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent"></div>
                      </>
                    )}
                    <img
                      src={project.image}
                      alt={project.name + " image"}
                      className={`object-cover ${
                        project.isMobile
                          ? "h-[385px] absolute top-[3px] left-[50px] z-[-1] rounded-3xl"
                          : "rounded-2xl"
                      }`}
                    />
                  </Reveal>
                </div>
                <div className="flex flex-col items-center w-full">
                  <Reveal delay={0.5} direction="top">
                    <a
                      href={project.link}
                      className="md:text-2xl text-lg font-bold text-gray-700"
                    >
                      {project.name}
                    </a>
                    <p className="text-gray-500">{project.description}</p>
                    <a href={project.repo}>Repositorio</a>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
