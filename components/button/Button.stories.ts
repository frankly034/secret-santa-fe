import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click Me!",
    onClick: () => alert("Yaay! You clicked me 😎"),
  },
};

export const PrimaryButtonDisabled: Story = {
  args: {
    children: "Click Me!",
    type: "primary",
    disabled: true,
    onClick: () => alert("Yaay! You clicked me 😎"),
  },
};

export const PrimaryButton: Story = {
  args: {
    children: "Click Me!",
    type: "primary",
    onClick: () => alert("Yaay! You clicked me 😎"),
  },
};

export const SecondaryButton: Story = {
  args: {
    children: "Click Me!",
    type: "secondary",
    onClick: () => alert("Yaay! You clicked me 😎"),
  },
};
