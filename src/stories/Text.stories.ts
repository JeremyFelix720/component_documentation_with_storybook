import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Text',
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: { control: 'color' },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const SmallParagraph: Story = {
  args: {
    text: "I'm a small paragraph",
    color: "black",
    size: "small",
    weight: "normal",
  },
};

export const MediumParagraph: Story = {
  args: {
    text: "I'm a medium paragraph",
    color: "black",
    size: "medium",
    weight: "normal",
  },
};

export const LargeParagraph: Story = {
  args: {
    text: "I'm a large paragraph",
    color: "black",
    size: "large",
    weight: "normal",
  },
};

export const SmallAndBoldParagraph: Story = {
  args: {
    text: "I'm a small and bold paragraph",
    color: "black",
    size: "small",
    weight: "bold",
  },
};

export const MediumAndBoldParagraph: Story = {
  args: {
    text: "I'm a medium and bold paragraph",
    color: "black",
    size: "medium",
    weight: "bold",
  },
};

export const LargeAndBoldParagraph: Story = {
  args: {
    text: "I'm a large and bold paragraph",
    color: "black",
    size: "large",
    weight: "bold",
  },
};