import { ArticlePage } from "../../components/templates/ArticlePage";
import { ArticleRepository } from '../../data';
import { ArticleFileSystemRepository } from '../../infra'
import { GetStaticProps, GetStaticPaths } from "next";

let articleRepository: ArticleRepository = new ArticleFileSystemRepository();

export interface ArticleProps {
  content: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export default function Article({ content, title, createdAt, updatedAt }: ArticleProps) {
  return (
    <ArticlePage title={title} createdAt={createdAt} updatedAt={updatedAt}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </ArticlePage>
  );
}

export const getStaticProps: GetStaticProps<ArticleProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const {
    title,
    createdAt,
    content,
    updatedAt,
  } = await articleRepository.findBySlug(slug);
  return {
    props: {
      title,
      createdAt,
      updatedAt,
      content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articleSlugs = await articleRepository.getAllSlugs();
  return {
    paths: articleSlugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};