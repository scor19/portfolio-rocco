import { useState, useEffect } from "react";
import { FaMoon, FaRegSun } from "react-icons/fa";

const ColorThemeSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  // Recuperar la preferencia del tema de localStorage cuando el componente se monta
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsChecked(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsChecked(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Actualizar el modo oscuro o claro en el body y localStorage
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <label className="relative inline-flex cursor-pointer select-none items-center justify-center">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="sr-only"
      />
      <span
        className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
          isChecked ? "bg-[#212b36]" : "bg-[#CCCCCE]"
        }`}
      >
        <div
          className={`dot flex items-center h-6 w-6 rounded-full bg-white duration-200 ${
            isChecked ? "translate-x-[28px] justify-center" : ""
          }`}
        >
          {isChecked ? <FaRegSun size={20} /> : <FaMoon size={20} />}
        </div>
      </span>
    </label>
  );
};

export default ColorThemeSwitch;
