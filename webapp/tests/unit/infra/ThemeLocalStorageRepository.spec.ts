import { ThemeLocalStorageRepository } from '../../../src/infra'
import { createMock } from "ts-auto-mock";

interface Storage {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
}

describe("infra :: ThemeLocalStorageRepository", () => {

  const fakeMatchMedia = jest.fn();
  beforeEach(() => {
    // @ts-ignore
    global.localStorage = createMock<Storage>();
    global.matchMedia = fakeMatchMedia;
  })

  const themeRepository = new ThemeLocalStorageRepository();

  describe("givan an undefined localstorage", () => {
    beforeEach(() => {
      // @ts-ignore
      global.localStorage = undefined
    });
    it("should get the light theme", () => {
      const theme = themeRepository.getTheme();
      expect(theme).toBe("light");
    });
  });

  describe('given an empty localstorage', () => {

    describe('with user theme preference as dark', () => {
      beforeEach(() => {
        fakeMatchMedia.mockReturnValue({
          matches: true,
        });
      })
      it("should get the dark theme", () => {
        const theme = themeRepository.getTheme();
        expect(theme).toBe("dark");
      });
    })
    describe("with user theme preference as light", () => {
      beforeEach(() => {
        // @ts-ignore
        fakeMatchMedia.mockReturnValue({
          matches: false,
        });
      });
      it("should get the light theme", () => {
        const theme = themeRepository.getTheme();
        expect(theme).toBe("light");
      });
    });
  });
  

  describe('given an dark theme in localstorage', () => {
    beforeEach(() => {
      // @ts-ignore
      global.localStorage = createMock<Storage>({
        getItem: () => "dark"
      });
    })
    it("should get dark theme", () => {
      const theme = themeRepository.getTheme();
      expect(theme).toBe("dark");
    });
  });

  describe("given an light theme in localstorage", () => {
    beforeEach(() => {
      // @ts-ignore
      global.localStorage = createMock<Storage>({
        getItem: () => "light",
      });
    });
    it("should get light theme", () => {
      const theme = themeRepository.getTheme();
      expect(theme).toBe("light");
    });
  });
  
});
