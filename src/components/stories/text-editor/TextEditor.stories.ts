import type { Meta, StoryObj } from "@storybook/react";
import { TextEditorComponent } from "./TextEditor";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "V2/Component/TextEditor",
  component: TextEditorComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  tags: ["autodocs"],
  args: {
    value: "",
    onChangeNow: () => {},
    className: "",
    placeholder: "",
    dataWhiteBoard: [
      {
        points: [0, 0, 0, 0],
        type: 0,
        x: 0,
        y: 0,
      },
    ],
    handleOutPutImageWB: () => {},
    handleOutPutDataWB: () => {},
  },
} satisfies Meta<typeof TextEditorComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextEditorBase: Story = {};
