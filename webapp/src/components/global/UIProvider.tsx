import React from "react";
import { Theme } from "../../domain";
import { Locale, LocaleContext } from "./locale";
import { ThemeDataContext } from "./theme";

export interface UIProviderProps {
  locale: Locale;
  children: React.ReactNode;
  themeData: {
    initialTheme: Theme;
    callback: (theme: Theme) => void;
  };
}

export function UIProvider({ locale, children, themeData }: UIProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(themeData.initialTheme);

  const changeTheme = (newTheme: Theme) => {
    themeData.callback(newTheme);
    setTheme(newTheme);
  }

  return (
    <LocaleContext.Provider value={locale}>
      <ThemeDataContext.Provider value={{ theme, changeTheme }}>
        {children}
      </ThemeDataContext.Provider>
    </LocaleContext.Provider>
  );
}