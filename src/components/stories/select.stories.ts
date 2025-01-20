import type { Meta, StoryObj } from "@storybook/react";
import SelectComponent from "./select";

const meta = {
  title: "V2/Component/Select",
  component: SelectComponent,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SelectComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectBase: Story = {
  args: {
    type: "select",
  },
};

export const MultiSelect: Story = {
  args: {
    type: "multiselect",
  },
};
