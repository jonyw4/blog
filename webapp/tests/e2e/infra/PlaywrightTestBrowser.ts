import { Page, chromium, Browser } from "@playwright/test";

export class PlaywrightTestBrowser {
  public static instance: PlaywrightTestBrowser;
  private constructor(public browser: Browser, public page: Page) {}
  public static async getInstance() {
    if (!this.instance) {
      this.instance = await this.createInstance();
    }

    return this.instance;
  }
  private static async createInstance(): Promise<PlaywrightTestBrowser> {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    return new PlaywrightTestBrowser(browser, page);
  }
  public async finish(): Promise<void> {
    await this.browser.close();
  }
}
