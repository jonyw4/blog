import { Meta } from "@storybook/react";
import { StoryFactory } from "../../../../tests/utils/StoryFactoryBuilder";
import { Layout } from "./Layout.component";

export default {
  title: "WebApp/Organisms/Layout",
} as Meta;

const storyFactory = new StoryFactory(Layout);

export const Default = storyFactory.create();
Default.args = {
  children: <div>Hello World</div>,
}
