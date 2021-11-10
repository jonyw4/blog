import { AppDriver } from "./drivers/AppDriver";
import { PlaywrightTestBrowser, AppPlaywrightDriver } from "./infra";

let appDriver: AppDriver;

describe("Go to an article page", () => {
  let playwrightTestBrowser: PlaywrightTestBrowser;
  beforeAll(async () => {
    playwrightTestBrowser = await PlaywrightTestBrowser.getInstance();
    appDriver = new AppPlaywrightDriver(playwrightTestBrowser);
  });

  afterAll(async () => {
    await playwrightTestBrowser.finish();
  });
  describe("given I launched the website inside the page /articles/testing-in-front-end", () => {
    beforeEach(async () => {
      await appDriver.goToArticlePage("testing-in-front-end");
    });
    it("should display the title Testing in Front End", async () => {
      const title = await appDriver.getTitle();
      expect(title).toBe("Testing in Front End");
    });
  });
});
