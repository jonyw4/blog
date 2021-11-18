import { ArticleRepository } from "../../../src/data";
import { ArticleFileSystemRepository } from "../../../src/infra/ArticleFileSystemRepository";

describe("infra :: ArticleFileSystemRepository", () => {
  const articleFileSystemRepository: ArticleRepository = new ArticleFileSystemRepository("en-US");
  it("should find an article by slug with success", async () => {
    const article = await articleFileSystemRepository.findArticleBySlug('testing-in-front-end')
    expect(article.slug).toBe("testing-in-front-end");
    expect(article.title).toBe("Testing in Front End");
  })
  it("should get all articles slugs", async () => {
    const slugs = await articleFileSystemRepository.getAllArticleSlugs();
    expect(slugs.length).toBe(1);
    expect(slugs).toContain("testing-in-front-end");
  });
  it("should get all articles metadata", async () => {
    const articleMetadata = await articleFileSystemRepository.getAllArticleMetadata();
    expect(articleMetadata.length).toBe(1);
    expect(articleMetadata[0].slug).toContain("testing-in-front-end");
    expect(articleMetadata[0].title).toContain("Testing in Front End");
  })
});