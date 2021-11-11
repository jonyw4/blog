import { Meta } from "@storybook/react";
import { StoryFactory } from "../../../../tests/utils/StoryFactoryBuilder";
import { Markdown } from "./Markdown.component";

export default {
  title: "WebApp/Atoms/Markdown",
} as Meta;

const storyFactory = new StoryFactory(Markdown);

export const Default = storyFactory.create();
Default.args = {
  content: "# Title"
};
