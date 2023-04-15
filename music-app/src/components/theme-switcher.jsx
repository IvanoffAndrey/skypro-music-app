import { useThemeContext } from "../contexts/theme";
import darkIcon from "../assets/img/icon/dark.svg";
import lightIcon from "../assets/img/icon/light.svg";

export const ThemeSwitcher = (props) => {
  const { toggleTheme } = useThemeContext();
  return <img src={ props.value.button === "light" ? lightIcon : darkIcon } onClick={ toggleTheme } />;
};
