import { ArticleProps } from "./ArticlePage.props";
import { Header } from '../../organisms/Header'
import { Footer } from "../../organisms/Footer";

export function ArticlePage({ title, children, createdAt, updatedAt }: ArticleProps) {
  return (
    <>
      <Header />
      <article>
        <h1 data-test="title">{title}</h1>
        <small>{createdAt}</small>

        <main>{children}</main>
      </article>
      <Footer />
    </>
  );
}