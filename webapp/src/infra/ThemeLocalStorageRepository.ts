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
      return DEFAULT_THEME;
    }
    
    return theme;
  }
  changeTheme(theme: Theme): void {
    global.localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }
}