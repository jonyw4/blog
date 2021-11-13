import { Meta } from "@storybook/react";
import { StoryFactory } from "../../../../tests/utils/StoryFactoryBuilder";
import { ProfileCard } from "./ProfileCard.component";

export default {
  title: "WebApp/Organisms/ProfileCard",
} as Meta;

const storyFactory = new StoryFactory(ProfileCard);

export const Default = storyFactory.create();
