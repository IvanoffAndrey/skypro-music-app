import React, { useContext } from "react";
import { ThemeContext, themes } from "../contexts/ThemeContext";
import darkIcon from "../assets/img/icon/dark.svg";
import lightIcon from "../assets/img/icon/light.svg";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <img
      src={theme === themes.dark ? darkIcon : lightIcon}
      onClick={setTheme}
    />
  );
};
