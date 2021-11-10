import { Meta } from "@storybook/react";
import { StoryFactory } from "../../../../tests/utils/StoryFactoryBuilder";
import { ArticlePage } from "./ArticlePage.component";

export default {
  title: "WebApp/Templates/Article Page",
} as Meta;

const storyFactory = new StoryFactory(ArticlePage);

export const Default = storyFactory.create();
Default.args = {
  title: "Article title",
  date: "2020-01-01",
  children: "Article content",
};
