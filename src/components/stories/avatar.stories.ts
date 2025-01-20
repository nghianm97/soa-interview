import type { Meta, StoryObj } from "@storybook/react";

import AvatarComponent from "./avatar";

const meta = {
  title: "V2/Component/Avatar",
  component: AvatarComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof AvatarComponent>;
export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarSingle: Story = {
  args: {
    type: "single",
  },
};
export const AvatarGroup: Story = {
  args: {
    type: "group",
  },
};
