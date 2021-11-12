import { ArticleProps } from "./ArticlePage.props";
import { Layout } from "../../organisms/Layout";

export function ArticlePage({ title, children, createdAt, updatedAt }: ArticleProps) {
  return (
    <Layout>
      <article>
        <h1 data-test="title">{title}</h1>
        <small>{createdAt}</small>

        <main>{children}</main>
      </article>
    </Layout>
  );
}