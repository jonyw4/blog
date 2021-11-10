export interface AppDriver {
  goToHomePage(): Promise<void>;
  getTitle(): Promise<string>;
  goToArticlePage(articleSlug: string): Promise<void>;
}