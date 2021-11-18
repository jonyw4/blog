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
}

export default function Article({
  content,
  title,
  createdAt,
  updatedAt,
}: ArticleProps) {
  return (
    <ArticlePage title={title} createdAt={createdAt} updatedAt={updatedAt}>
      <Markdown content={content} />
    </ArticlePage>
  );
}

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params,
  locale
}) => {
  setLocale(locale);

  const articleRepository = createArticleRepository(locale);
  const slug = params?.slug as string;
  const article = await articleRepository.findArticleBySlug(slug);
  return {
    props: {
      ...article,
      createdAt: formatDate(new Date(article.createdAt)),
      updatedAt: formatDate(new Date(article.updatedAt)),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const articleRepository = createArticleRepository("en-US");
  const articleSlugs = await articleRepository.getAllArticleSlugs();

  const paths = articleSlugs.map((slug) => ({ params: { slug } }));
  const pathsByLocale = locales.map((locale) => paths.map((path) => ({...path, locale})));

  return {
    paths: pathsByLocale.flat(),
    fallback: false,
  };
};
