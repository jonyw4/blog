import { UIProviderProps } from "..";
import { ThemeRepository } from "../../../data";

export const adaptThemeRepositoryToThemeData = (
  themeRepository: ThemeRepository
): UIProviderProps['themeData'] => {
  return {
    initialTheme: themeRepository.getTheme(),
    callback: (theme) => themeRepository.changeTheme(theme),
  };
};
