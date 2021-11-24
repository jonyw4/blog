import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { ArticlePage } from "../../components/templates/ArticlePage";
import { Markdown } from "../../components/atoms/Markdown";
import { formatDate, setLocale } from "../../components/global/formatDate";
import { createArticleRepository } from "../../factories";

export interface ArticleProps {
  content: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  readEstimateTimeInMinutes: number;
}

export default function Article({
  content,
  title,
  createdAt,
  updatedAt,
  readEstimateTimeInMinutes,
}: ArticleProps) {
  return (
    <>
      <Head>
        <title>{title} | Blog - Jonathan Celio</title>
        <meta name="description" content={title} />
        <meta property="og:title" content={title} key="title" />
        <meta property="og:type" content="article" key="type" />
        <meta
          property="og:image"
          content="https://jonycelio.com/images/jony.jpg"
          key="image"
        />
        <meta property="og:article:published_time" content={createdAt} />
        <meta property="og:article:modified_time" content={updatedAt} />
      </Head>
      <ArticlePage
        title={title}
        createdAt={formatDate(new Date(createdAt))}
        updatedAt={formatDate(new Date(updatedAt))}
        readEstimateTimeInMinutes={readEstimateTimeInMinutes}
      >
        <Markdown content={content} />
      </ArticlePage>
    </>
  );
}

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params,
  locale,
}) => {
  setLocale(locale);

  const articleRepository = createArticleRepository(locale);
  const slug = params?.slug as string;
  const article = await articleRepository.findArticleBySlug(slug);
  return {
    props: {
      ...article,
      createdAt: new Date(article.createdAt).toISOString(),
      updatedAt: new Date(article.updatedAt).toISOString(),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const articleRepository = createArticleRepository("en-US");
  const articleSlugs = await articleRepository.getAllArticleSlugs();

  const paths = articleSlugs.map((slug) => ({ params: { slug } }));
  const pathsByLocale = locales.map((locale) =>
    paths.map((path) => ({ ...path, locale }))
  );

  return {
    paths: pathsByLocale.flat(),
    fallback: false,
  };
};
