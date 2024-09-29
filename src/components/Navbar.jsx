import AnimatedHamburguerButton from "./AnimatedHamburguerButton";
import ColorThemeSwitch from "./ColorThemeSwitch";
const Navbar = () => {
  return (
    <header className="w-full lg:px-[100px] px-2">
      <nav>
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <span className="text-black text-3xl font-[800] dark:text-white duration-200 cursor-default">
              Rocco.dev
            </span>
            <ColorThemeSwitch />
          </div>
          <div className="flex items-center text-black dark:text-white duration-300">
            <ul className="gap-4 font-bold hidden md:flex">
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
              <li>
                <a
                  href="#footer"
                  className="hover:text-[#00A8E8] duration-300 hover:cursor-pointer active:text-[#00A8E8] active:cursor-default"
                >
                  Contacto
                </a>
              </li>
            </ul>
            <AnimatedHamburguerButton />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
