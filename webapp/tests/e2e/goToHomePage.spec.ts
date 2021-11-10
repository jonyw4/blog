import { AppDriver } from "./drivers/AppDriver";
import {
  PlaywrightTestBrowser,
  AppPlaywrightDriver,
} from "./infra";

let appDriver: AppDriver;

describe('Go to home page', () => {
  let playwrightTestBrowser: PlaywrightTestBrowser;
  beforeAll(async () => {
    playwrightTestBrowser = await PlaywrightTestBrowser.getInstance();
    appDriver = new AppPlaywrightDriver(playwrightTestBrowser);
  });

  afterAll(async () => {
    await playwrightTestBrowser.finish();
  });
  describe('given I launched the website', () => {
    beforeEach(async () => {
      await appDriver.goToHomePage();
    })
    it('should display the title Hello world', async () => {
      const title = await appDriver.getTitle();
      expect(title).toBe("Hello world");
    })
  });
})