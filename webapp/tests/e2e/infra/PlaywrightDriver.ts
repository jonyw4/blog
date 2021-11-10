import { PlaywrightTestBrowser } from "./PlaywrightTestBrowser";
import { expect } from "@playwright/test";

export abstract class PlaywrightDriver {
  constructor(private playwrightTestBrowser: PlaywrightTestBrowser) {}
  protected getPage() {
    return this.playwrightTestBrowser.page;
  }
  protected getBrowser() {
    return this.playwrightTestBrowser.browser;
  }
  protected expect<T = unknown>(actual: T): PlaywrightTest.Matchers<T> {
    return expect(actual);
  }
}
