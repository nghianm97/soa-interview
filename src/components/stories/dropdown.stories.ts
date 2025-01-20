import type { Meta, StoryObj } from "@storybook/react";

import DropdownComponent from "./dropdown";

const meta = {
  title: "V2/Component/Dropdown",
  component: DropdownComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof DropdownComponent>;
export default meta;
type Story = StoryObj<typeof meta>;

export const DropdownBase: Story = {
  args: {},
};
