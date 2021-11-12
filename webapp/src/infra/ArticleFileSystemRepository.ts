import path from "path";
import fs from "fs";
import { ArticleRepository } from "../data";
import { Article, ArticleMetadata } from "../domain";
import frontMatterParser from "gray-matter";

const ARTICLE_FILE_PATH = path.join(__dirname, "../../../../posts/src/posts/en");

export class ArticleFileSystemRepository implements ArticleRepository {
  async findArticleBySlug(slug: string): Promise<Article> {
    const filePath = path.join(ARTICLE_FILE_PATH, `${slug}.md`);
    const file = fs.readFileSync(filePath);
    const {
      data: { title, createdAt, updatedAt },
      content,
    } = frontMatterParser(file);

    return {
      title,
      createdAt,
      updatedAt,
      slug,
      content,
    };
  }
  async getAllArticleSlugs(): Promise<string[]> {
    return this.getArticleFileNames().map((fileName) => {
      const slug = fileName.replace(".md", "");
      return slug;
    });
  }

  async getAllArticleMetadata(): Promise<ArticleMetadata[]> {
    const slugs = await this.getAllArticleSlugs();
    const articleMetadataPromises = slugs.map((slug) => {
      return this.findArticleBySlug(slug).then(
        ({ content, ...articleMetadata }) => articleMetadata
      );
    })

    return Promise.all(articleMetadataPromises);
  }
  private getArticleFileNames(): string[] {
    return fs.readdirSync(ARTICLE_FILE_PATH);
  }
}
