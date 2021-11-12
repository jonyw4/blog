import { GetStaticProps } from "next";
import { formatDate } from "../components/global/formatDate";
import { articleRepository } from "../factories";
import { HomePage } from "../components/templates/HomePage";

function Home(props: HomeProps) {
  return <HomePage {...props} />;
}

export interface HomeProps {
  articles: Array<{
    slug: string;
    title: string;
    createdAt: string;
    updatedAt: string;
  }>;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const articles = await articleRepository.getAllArticleMetadata()
  return {
    props: {
      articles: articles.map(article => ({
        ...article,
        createdAt: formatDate(new Date(article.createdAt)),
        updatedAt: formatDate(new Date(article.updatedAt)),
      }))
    },
  };
};

export default Home;
