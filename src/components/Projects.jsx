import React from "react";
import ScrSTA1 from "../assets/STA1.webp";
import ScrSTA2 from "../assets/STA2.webp";
import ScrSTA3 from "../assets/STA3.webp";
import ScrSTA4 from "../assets/STA4.webp";
import Celular from "../assets/celular.webp";
import Reveal from "./Reveal";

const Projects = () => {
  const projects = [
    {
      name: "Schedule Time App",
      description: "Aplicación de turnos medicos",
      repo: "https://www.google.com",
      imagen1: Celular,
      imagen2: ScrSTA2,
      imagen3: ScrSTA3,
    },
    {
      name: "Rentable Inversor",
      description: "Web de venta de cursos online",
      repo: "https://www.google.com",
      imagen1: "https://www.google.com",
      imagen2: "https://www.google.com",
      imagen3: "https://www.google.com",
    },
  ];

  return (
    <div>
      <Reveal>
        <div className="md:mx-auto justify-between max-w-5xl mx-2 mb-4 items-center w-full">
          <p className="text-xl font-[800] text-primary">Portafolio</p>
        </div>
      </Reveal>
      <div className="container mx-auto px-4 mb-[200px] mb-[100px] w-full">
        <div className="md:mx-auto justify-between max-w-5xl mx-2 items-center w-full">
          <ul className="flex flex-col gap-4 font-bold">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex justify-between ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="relative pl-10">
                  <Reveal delay={0.5} amount={0.3}>
                    <img
                      src={project.imagen1}
                      alt="imagen 1"
                      className="h-[500px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent"></div>
                  </Reveal>
                </div>
                <div className="flex flex-col items-center">
                  <a
                    href={project.link}
                    className="md:text-2xl text-lg font-bold text-gray-700"
                  >
                    {project.name}
                  </a>
                  <p className="text-gray-500">{project.description}</p>
                  <a href={project.repo}>Repositorio</a>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
