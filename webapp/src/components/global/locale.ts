import React from "react";

export interface Locale {
  locale: string;
  changeLocale: (locale: string) => void
}

// @ts-ignore
export const LocaleContext = React.createContext<Locale>();

export const useLocale = () => React.useContext(LocaleContext);