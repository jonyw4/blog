import path from "path";
import fs from "fs";
import { ArticleRepository } from "../data";
import { Article, ArticleMetadata } from "../domain";
import frontMatterParser from "gray-matter";
import readTimeEstimate from 'read-time-estimate'
const ARTICLE_FILE_PATH = path.resolve(process.cwd(), "../posts/src");

export class ArticleFileSystemRepository implements ArticleRepository {
  constructor(
    private language: string,
    private articleFilePath = path.resolve(ARTICLE_FILE_PATH, language)
  ) {}
  async findArticleBySlug(slug: string): Promise<Article> {
    const filePath = path.join(this.articleFilePath, `${slug}.md`);
    const file = fs.readFileSync(filePath);
    const {
      data: { title, createdAt, updatedAt, description, previewImg },
      content,
    } = frontMatterParser(file);

    const readEstimateTimeInMinutes = this.calculateReadEstimateTimeInMinutesByContent(
      content
    );
    return {
      title,
      description,
      createdAt,
      updatedAt,
      slug,
      content,
      readEstimateTimeInMinutes,
      previewImg
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
    });

    return Promise.all(articleMetadataPromises);
  }
  private calculateReadEstimateTimeInMinutesByContent(content: string): number {
    return Math.round(readTimeEstimate(content).duration);
  }
  private getArticleFileNames(): string[] {
    return fs.readdirSync(this.articleFilePath);
  }
}
