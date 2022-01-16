import "normalize.css";
import "../webapp/src/components/global/styles/global.css";
import { TestUIProvider } from "../webapp/src/components/global/TestUIProvider";

export const decorators = [
  (Story) => (
    <TestUIProvider>
      <Story />
    </TestUIProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
