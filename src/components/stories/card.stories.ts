import type { Meta, StoryObj } from "@storybook/react";
import CardComponent from "./card";

const meta = {
  title: "V2/Component/Card",
  component: CardComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof CardComponent>;
export default meta;
type Story = StoryObj<typeof meta>;

export const CardBase: Story = {
  args: {},
};
