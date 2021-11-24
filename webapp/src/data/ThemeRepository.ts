import { Theme } from "../domain/Theme";

export interface ThemeRepository {
  getTheme(): Theme;
  changeTheme(theme: Theme): void;
}