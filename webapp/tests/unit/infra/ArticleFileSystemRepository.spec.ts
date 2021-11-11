import { ArticleFileSystemRepository } from "../../../src/infra/ArticleFileSystemRepository";

describe("infra :: ArticleFileSystemRepository", () => {
  const articleFileSystemRepository = new ArticleFileSystemRepository();
  it("should find an article by slug with success", async () => {
    const article = await articleFileSystemRepository.findBySlug('testing-in-front-end')
    expect(article.slug).toBe("testing-in-front-end");
    expect(article.title).toBe("Testing in Front End");
  })
  it("should get all articles slugs", async () => {
    const slugs = await articleFileSystemRepository.getAllSlugs()
    expect(slugs.length).toBe(1);
    expect(slugs).toContain('testing-in-front-end');
  })
});