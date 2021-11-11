import { ArticlePage } from "../../components/templates/ArticlePage";
import { Markdown } from '../../components/atoms/Markdown'
import { ArticleRepository } from '../../data';
import { ArticleFileSystemRepository } from '../../infra'
import { GetStaticProps, GetStaticPaths } from "next";

export interface ArticleProps {
  content: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export default function Article({ content, title, createdAt, updatedAt }: ArticleProps) {
  return (
    <ArticlePage title={title} createdAt={createdAt} updatedAt={updatedAt}>
      <Markdown content={content}/>
    </ArticlePage>
  );
}

let articleRepository: ArticleRepository = new ArticleFileSystemRepository();

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