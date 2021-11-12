import { Header } from '../Header'
import { Footer } from "../Footer";
import { LayoutProps } from './Layout.props';

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
