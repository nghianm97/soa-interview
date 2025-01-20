import type { Meta, StoryObj } from "@storybook/react";
import ModalComponent from "./modal";

const meta = {
  title: "V2/Component/Modal",
  component: ModalComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof ModalComponent>;
export default meta;
type Story = StoryObj<typeof meta>;

export const ModalBase: Story = {
  args: {
    type: "base",
    isOpen: true,
    handleClose: () => {},
  },
};

export const ModalImportFile: Story = {
  args: {
    type: "importFile",
    isOpen: true,
    handleClose: () => {},
  },
};

export const ModalImageCrop: Story = {
  args: {
    type: "image-crop",
    isOpen: true,
    handleClose: () => {},
  },
};
