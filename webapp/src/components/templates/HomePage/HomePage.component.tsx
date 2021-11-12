import { HomePageProps } from "./HomePage.props";
import { Layout } from "../../organisms/Layout";
import { ArticlePreview } from "../../organisms/ArticlePreview";

export function HomePage({ articlesPreview }: HomePageProps) {
  return (
    <Layout>
      {articlesPreview.map((article) => (
        <ArticlePreview key={article.slug} {...article} />
      ))}
    </Layout>
  );
}
