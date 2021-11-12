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
  createdAt: "2020-01-01",
  updatedAt: "2020-01-01",
  children: (
    <>
      <h2>Component level</h2>
      <p>Nowadays, it is common to use a component approach. We start creating components that have tiny pieces of our layout, and then we stitch together to create a whole page. Using that as a principle we can have some levels of testing.
      In this level we test what we are going to use in the components code. Ideally our components are decoupled from the rest of the code. So we can test it independently, to work with whatever input.</p>

      <h2>Snapshots test</h2>
      <p>We are usually not using raw HTML to create our code. React, Vue and Angular come to rescue. So the first test that you want to have in our codebase is snapshot testing. With that test we can assure that the component made in React for example is rendering the same output in HTML as should be in the browser.</p>
    </>
  ),
};
