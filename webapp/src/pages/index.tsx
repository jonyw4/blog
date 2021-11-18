import { GetStaticProps } from "next";
import { formatDate } from "../components/global/formatDate";
import { HomePage, HomePageProps } from "../components/templates/HomePage";
import { createArticleRepository } from "../factories";

function Home(props: HomePageProps) {
  return <HomePage {...props} />;
}

export const getStaticProps: GetStaticProps<HomePageProps> = async ({locale}) => {
  const articleRepository = createArticleRepository(locale);
  const articles = await articleRepository.getAllArticleMetadata();
  return {
    props: {
      articlesPreview: articles.map((article) => ({
        ...article,
        createdAt: formatDate(new Date(article.createdAt)),
        updatedAt: formatDate(new Date(article.updatedAt)),
      })),
    },
  };
};

export default Home;
