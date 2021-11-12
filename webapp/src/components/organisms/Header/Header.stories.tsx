import { Meta } from "@storybook/react";
import { StoryFactory } from "../../../../tests/utils/StoryFactoryBuilder";
import { Header } from "./Header.component";

export default {
  title: "WebApp/Organisms/Header",
} as Meta;

const storyFactory = new StoryFactory(Header);

export const Default = storyFactory.create();
