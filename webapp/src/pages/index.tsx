import { GetStaticProps } from "next";
import Head from "next/head";
import { formatDate, setLocale } from "../components/global/formatDate";
import { HomePage, HomePageProps } from "../components/templates/HomePage";
import { createArticleRepository } from "../factories";

function Home(props: HomePageProps) {
  return (
    <>
      <Head>
        <title>Blog - Jonathan Celio</title>
        <meta name="description" content="Jonathan Celio's Blog" />
        <meta property="og:title" content="Blog - Jonathan Celio" key="title" />
        <meta property="og:type" content="website" key="type" />
        <meta
          property="og:image"
          content="https://jonycelio.com/images/jony.jpg"
          key="image"
        />
      </Head>
      <HomePage {...props} />
    </>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async ({ locale }) => {
  setLocale(locale);
  
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
