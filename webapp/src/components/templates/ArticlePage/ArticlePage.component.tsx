import { ArticleProps } from "./ArticlePage.props";

export function ArticlePage({ title, children, createdAt }: ArticleProps) {
  return (
    <article>
      <h1 data-test="title">{title}</h1>
      <div>{createdAt}</div>
      <hr />

      <main>{children}</main>
    </article>
  );
}