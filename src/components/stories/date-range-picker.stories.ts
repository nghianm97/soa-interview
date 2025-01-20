import type { Meta, StoryObj } from "@storybook/react";
import DateRangePickerComponent from "./date-range-picker";

const meta = {
  title: "V2/Component/DateRangePicker",
  component: DateRangePickerComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
  },
} satisfies Meta<typeof DateRangePickerComponent>;
export default meta;
type Story = StoryObj<typeof meta>;

export const DateRangePickerBase: Story = {
  args: {},
};
