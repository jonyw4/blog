import { ArticleProps } from "./ArticlePage.props";

export function ArticlePage({ title, children, createdAt, updatedAt }: ArticleProps) {
  return (
    <article>
      <h1 data-test="title">{title}</h1>
      <div>
        <strong>Created At:</strong> {createdAt}
      </div>
      <div>
        <strong>Updated At:</strong> {updatedAt}
      </div>
      <hr />

      <main>{children}</main>
    </article>
  );
}