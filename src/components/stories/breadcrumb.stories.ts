import type { Meta, StoryObj } from "@storybook/react";
import BreadcrumbComponent from "./breadcrumb";

const meta = {
  title: "V2/Component/Breadcrumb",
  component: BreadcrumbComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof BreadcrumbComponent>;
export default meta;
type Story = StoryObj<typeof meta>;

export const BreadcrumbBase: Story = {
  args: {},
};
