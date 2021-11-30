import { ThemeRepository } from "../data";
import { Theme } from "../domain";

const LOCAL_STORAGE_THEME_KEY = "theme";
const DEFAULT_THEME = "light";

export class ThemeLocalStorageRepository implements ThemeRepository {
  getTheme(): Theme {
    if(!global.localStorage){
      return DEFAULT_THEME;
    }

    const theme = global.localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

    if(!theme){
      return this.userThemePreference();
    }
    
    return theme;
  }
  private userThemePreference(): Theme {
    const darkThemeMq = global.matchMedia("(prefers-color-scheme: dark)");
    const isDarkMode = darkThemeMq.matches;
    return isDarkMode ? "dark" : "light";
  }
  changeTheme(theme: Theme): void {
    global.localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }
}