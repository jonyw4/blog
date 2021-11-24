import React from "react";
import { Theme } from "../../domain";


export interface ThemeData {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

// @ts-ignore
export const ThemeDataContext = React.createContext<ThemeData>();
export const useTheme = () => React.useContext(ThemeDataContext);