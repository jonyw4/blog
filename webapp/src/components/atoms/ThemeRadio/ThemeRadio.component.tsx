import { Theme } from "../../../domain";
import { useTheme } from "../../global";

export function ThemeRadio() {
  const {theme, changeTheme} = useTheme();

  const isLight = theme === "light";
  const isDark = theme === "dark";

  return (
    <div style={{ display: "flex" }}>
      <label htmlFor="theme-light-radio">☀️ Light Theme</label>
      <input
        id="theme-light-radio"
        type="radio"
        name="theme"
        value="light"
        checked={isLight}
        onClick={() => changeTheme("light")}
      />

      <label htmlFor="theme-dark-radio">🌒 Dark Theme</label>
      <input
        id="theme-dark-radio"
        type="radio"
        name="theme"
        value="dark"
        checked={isDark}
        onClick={() => changeTheme("dark")}
      />
    </div>
  );
}
