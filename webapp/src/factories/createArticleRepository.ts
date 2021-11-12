import { ArticleRepository } from "../data";
import { ArticleFileSystemRepository } from "../infra";

export function createArticleRepository(): ArticleRepository {
  return new ArticleFileSystemRepository();
}

export const articleRepository = createArticleRepository();