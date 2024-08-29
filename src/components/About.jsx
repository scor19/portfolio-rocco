import pc2 from "../assets/pc2.webp";
import Reveal from "./Reveal";

const About = () => {
  return (
    <div className="container mx-auto px-4 mb-[200px] mb-[100px]">
      <div className="flex lg:flex-row flex-col md:mx-auto justify-between max-w-5xl mx-2 items-center">
        <Reveal>
          <img
            src={pc2}
            alt="pc"
            className="w-full max-w-[1000px] rounded-3xl mask-image-gradient"
          />
          <div className="lg:hidden block absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-white to-transparent"></div>
        </Reveal>
        <div className="flex flex-col justify-center md:justify-start w-full lg:pl-20">
          <Reveal delay={0.75}>
            <h1 className="text-lg font-[800] text-primary lg:pt-0 pt-4">
              Sobre mi
            </h1>
            <p className="md:text-2xl text-lg font-bold text-gray-700 mb-4 mt-4">
              Con pasión, programar es más fácil
            </p>
            <p className="text-base text-gray-500">
              Desde que era chico, me fascinó el mundo de la programación, lo
              que me llevó a elegir una escuela técnica especializada. Este
              camino me permitió descubrir mi verdadera pasión por el desarrollo
              web. Hoy, tengo experiencia en lenguajes como JavaScript y React,
              y me dedico a crear aplicaciones intuitivas que brindan la mejor
              experiencia al usuario. Siempre estoy en busqueda de aprender
              nuevas tecnologías y mejorar mis habilidades para seguir
              contribuyendo al mundo del desarrollo.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default About;
