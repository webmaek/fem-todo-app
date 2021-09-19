import { useEffect, useState } from "react";

const useTheme = (initialValue) => {
  const [theme, setTheme] = useState(initialValue);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setTheme("light");
    } else if (theme === "light") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  };

  useEffect(() => {
    document.documentElement.classList.add(initialValue);
  }, []);

  return { theme, toggleTheme };
};

export { useTheme };
