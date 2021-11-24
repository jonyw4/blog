import { Header } from '../Header'
import { Footer } from "../Footer";
import { LayoutProps } from './Layout.props';
import { useTheme } from '../../global';
import React from 'react';

export function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();

  React.useEffect(() => {
    const themeClassName = `${theme}-mode`;
    document.querySelector('body').className = themeClassName;
  }, [theme])

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
