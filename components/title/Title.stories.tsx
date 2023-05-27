import type { Meta, StoryObj } from "@storybook/react";

import Title from ".";
import { PaletteColor } from "../../theme/themeColour";

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
    secondaryColor: PaletteColor.red100,
    primaryColor: PaletteColor.yellow100,
  },
};

export const SingleWordTitle: Story = {
  args: {
    children: "Gift",
    secondaryColor: PaletteColor.red100,
    primaryColor: PaletteColor.yellow100,
  },
};
