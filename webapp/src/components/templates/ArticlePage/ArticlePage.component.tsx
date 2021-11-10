import { ArticleProps } from "./ArticlePage.props";

export function ArticlePage({ title, children, date }: ArticleProps) {
  return (
    <article>
      <h1 data-test="title">{title}</h1>
      <div>{date}</div>
      <hr />

      <main>{children}</main>
    </article>
  );
}