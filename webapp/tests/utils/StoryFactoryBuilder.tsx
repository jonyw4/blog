import * as React from "react";
import { Story } from "@storybook/react";

export type GetComponentProps<T> = T extends
  | React.ComponentType<infer P>
  | React.Component<infer P>
  ? P
  : never;


export class StoryFactory<C extends React.ElementType> {
  private template: Story<GetComponentProps<C>>;

  constructor(Component: C) {
    this.template = (args) => <Component {...args} />;
  }

  public create(): Story<GetComponentProps<C>> {
    const { template } = this;
    return this.template.bind({}) as typeof template;
  }
}
