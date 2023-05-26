import type { Meta, StoryObj } from "@storybook/react";

import Title from ".";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    children: "Gift a friend this holiday",
  },
};

export const LastWordTitle: Story = {
  args: {
    children: "Gift a friend this holiday",
    lastWordColor: "#F15156",
    preceedingWordsColor: "#FDD365",
  },
};

export const SingleWordTitle: Story = {
  args: {
    children: "Gift",
    lastWordColor: "#F15156",
    preceedingWordsColor: "#FDD365",
  },
};
