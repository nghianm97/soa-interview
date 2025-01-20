import type { Meta, StoryObj } from "@storybook/react";
import ProgressComponent from "./progress";

const meta = {
  title: "V2/Component/Progress",
  component: ProgressComponent,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProgressComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProgressBase: Story = {
  args: {
    type: "circle",
  },
};

export const ProgressLineBar: Story = {
  args: {
    type: "line",
  },
};
