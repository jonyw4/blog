import { Article, ArticleMetadata } from "../domain";

export interface ArticleRepository {
  findArticleBySlug(slug: string): Promise<Article>;
  getAllArticleMetadata(): Promise<ArticleMetadata[]>;
  getAllArticleSlugs(): Promise<string[]>;
}