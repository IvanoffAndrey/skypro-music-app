import React from "react";

export const themes = {
  light: {
    button: "light",
    color: "#000000",
    centerblockBackground: "#F5F5F5",
    sidebarblockBackground: "#F5F5F5",
    menuBackground: "#F6F5F3",
    titleColor: "#B1B1B1",
    filterButtonBorder: "#000000",
    trackTitleBackground: "#F6F4F4",
    barBackground: "rgba(246, 245, 243, 0.5)",
    playerProgressColor: "#D9D9D9",
    volumeColor: "#C4C4C4",
  },
  dark: {
    button: "dark",
    color: "#FFFFFF",
    centerblockBackground: "#181818",
    sidebarblockBackground: "#181818",
    menuBackground: "#1C1C1C",
    titleColor: "#4E4E4E",
    filterButtonBorder: "#FFFFFF",
    trackTitleBackground: "#313131",
    barBackground: "rgba(28, 28, 28, 0.5)",
    playerProgressColor: "#2E2E2E",
    volumeColor: "#797979",
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  setTheme: () => {},
});
