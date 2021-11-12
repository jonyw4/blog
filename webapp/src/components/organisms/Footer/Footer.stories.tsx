import { Meta } from "@storybook/react";
import { StoryFactory } from "../../../../tests/utils/StoryFactoryBuilder";
import { Footer } from "./Footer.component";

export default {
  title: "WebApp/Organisms/Footer",
} as Meta;

const storyFactory = new StoryFactory(Footer);

export const Default = storyFactory.create();
