import Link from "next/link";
import { ArticlePreviewProps } from "./ArticlePreview.props";

export function ArticlePreview({
  title,
  description,
  slug,
  createdAt,
}: ArticlePreviewProps) {
  return (
    <article>
      <h3>
        <Link href={`articles/${slug}`}>
          <a>{title}</a>
        </Link>
      </h3>
      <small>{createdAt}</small>
      <p>{description}</p>
    </article>
  );
}
