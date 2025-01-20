import type { Meta, StoryObj } from "@storybook/react";

import InputComponent from "./Input";

const meta = {
  title: "V2/Component/Input",
  component: InputComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof InputComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchInput: Story = {
  args: {
    type: "searchInput",
    searchValue: "",
    handleChange: () => {},
    handleKeyDown: () => {},
  },
};

export const Input: Story = {
  args: {
    type: "input",
    searchValue: "",
    handleChange: () => {},
    handleKeyDown: () => {},
  },
};
