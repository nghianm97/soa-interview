import type { Meta, StoryObj } from "@storybook/react";

import FileUploadComponent from "./FileUpload";

const meta = {
  title: "V2/Component/FileUpload",
  component: FileUploadComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof FileUploadComponent>;
export default meta;
type Story = StoryObj<typeof meta>;

export const FileUploadBase: Story = {
  args: {
    type: "base",
  },
};

export const FileUploadCustom: Story = {
  args: {
    type: "custom",
  },
};

export const ButtonUpload: Story = {
  args: {
    type: "button-upload",
  },
};

export const FileUploadCustom1: Story = {
  args: {
    type: "custom1",
  },
};

export const FileUploadGoogleDrive: Story = {
  args: {
    type: "gg-drive",
  },
};

export const FileUploadOneDrive: Story = {
  args: {
    type: "one-drive",
  },
};
