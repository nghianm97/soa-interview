import type { Meta, StoryObj } from "@storybook/react";
import { ButtonDragComponent } from "./DragnDrop";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "V2/Component/ButtonDrag",
  component: ButtonDragComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof ButtonDragComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DragnDrop: Story = {
  args: {
    onDragStart: (e: React.DragEvent, option?: string) =>
      console.log(e, option),
  },
};
