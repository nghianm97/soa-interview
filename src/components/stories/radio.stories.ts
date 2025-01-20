import type { Meta, StoryObj } from "@storybook/react";

import RadioComponent from "./radio";

const meta = {
  title: "V2/Component/Radio",
  component: RadioComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof RadioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioBase: Story = {
  args: {},
};
