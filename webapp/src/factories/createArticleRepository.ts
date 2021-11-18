import { ArticleRepository } from "../data";
import { ArticleFileSystemRepository } from "../infra";

export function createArticleRepository(language: string): ArticleRepository {
  return new ArticleFileSystemRepository(language);
}