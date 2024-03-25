import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.theme);
  const activeTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    //console.log(root);
    root.classList.remove(activeTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);

    // window.location.reload();
  }, [activeTheme, theme]);

  return [activeTheme, setTheme];
};

export default useThemeSwitcher;
