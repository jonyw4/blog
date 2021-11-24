import { AppProps } from "..";
import { ThemeRepository } from "../../../data";
import { ThemeData } from "../theme";

export const adaptThemeRepositoryToThemeData = (
  themeRepository: ThemeRepository
): AppProps['themeData'] => {
  return {
    initialTheme: themeRepository.getTheme(),
    callback: (theme) => themeRepository.changeTheme(theme),
  };
};
