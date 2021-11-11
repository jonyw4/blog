import { Article } from "../domain";

export interface ArticleRepository {
  findBySlug(slug: string): Promise<Article>;
  getAllSlugs(): Promise<string[]>;
}