import { Header } from '../Header'
import { Footer } from "../Footer";
import { LayoutProps } from './Layout.props';
import { useTheme } from '../../global';
import React from 'react';

export function Layout({ children }: LayoutProps) {
  const { theme, changeTheme } = useTheme();

  React.useEffect(() => {
    const themeClassName = `${theme}-mode`;
    document.querySelector('body').className = themeClassName;
  }, [theme])

  const changeThemeByColorScheme = (event: MediaQueryListEvent) => {
    const theme = event.matches ? "dark" : "light";
    changeTheme(theme);
  };

  React.useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", changeThemeByColorScheme);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("keydown", changeThemeByColorScheme);
    };
  });

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
