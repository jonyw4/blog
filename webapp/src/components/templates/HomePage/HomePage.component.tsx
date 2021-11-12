import { HomeProps } from "./HomePage.props";
import { Layout } from "../../organisms/Layout";

export function HomePage({articles}: HomeProps) {
  return (
    <Layout>
      {articles.map(article => (
        <div key={article.slug}>
          <h1>{article.title}</h1>
        </div>
      ))}
    </Layout>
  );
}
