import { AppDriver } from "../drivers/AppDriver";
import { PlaywrightDriver } from "./PlaywrightDriver";

const LANDING_PAGE_URL =
  process.env.LANDING_PAGE_URL || "http://localhost:3000";

export class AppPlaywrightDriver extends PlaywrightDriver implements AppDriver {
  async goToHomePage(): Promise<void> {
    await this.getPage().goto(LANDING_PAGE_URL);
  }
  async getTitle(): Promise<string> {
    return await this.getPage().textContent(
      "[data-test=title]"
    );
  }
}