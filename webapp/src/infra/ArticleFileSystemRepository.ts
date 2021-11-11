import path from "path";
import fs from "fs";
import { ArticleRepository } from "../data";
import { Article } from "../domain";
import frontMatterParser from "gray-matter";

const ARTICLE_FILE_PATH = path.join(__dirname, "../../../../../posts/src/posts/en");

export class ArticleFileSystemRepository implements ArticleRepository {
  async findBySlug(slug: string): Promise<Article> {
    const filePath = path.join(ARTICLE_FILE_PATH, `${slug}.md`);
    const file = fs.readFileSync(filePath);
    const {
      data: { title, date },
      content,
    } = frontMatterParser(file);

    return {
      title,
      createdAt: String(date),
      updatedAt: String(date),
      slug,
      content,
    };
  }
  async getAllSlugs(): Promise<string[]> {
    const filesName = fs.readdirSync(ARTICLE_FILE_PATH);
    return filesName.map((fileName) => {
      const slug = fileName.replace(".md", "");
      return slug;
    });
  };
}
