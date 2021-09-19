import { useTheme } from "../../hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme("dark");

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-4xl text-white tracking-widest">TODO</h1>
      <img
        src={`${
          theme === "dark" ? "images/icon-sun.svg" : "/images/icon-moon.svg"
        }`}
        alt=""
        className="hover:cursor-pointer"
        onClick={toggleTheme}
      />
    </div>
  );
};

export default Header;
