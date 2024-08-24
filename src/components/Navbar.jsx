const Navbar = () => {
  return (
    <header className="w-full lg:px-[100px] px-2">
      <nav>
        <div className="flex justify-between items-center h-16">
          <div className="bg-white text-black text-3xl font-[800]">
            Rocco.dev
          </div>
          <div>
            <ul className="flex gap-4 font-bold">
              {/* <li>Inicio</li>
              <li>Sobre mí</li>
              <li>Proyectos</li>
              <li>Contacto</li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
