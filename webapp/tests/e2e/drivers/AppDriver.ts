export interface AppDriver {
  goToHomePage(): Promise<void>;
  getTitle(): Promise<string>;
}