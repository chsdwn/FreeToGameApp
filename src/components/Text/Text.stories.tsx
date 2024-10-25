import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta = {
  title: 'Text',
  component: Text,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Text variant',
    },
  },
  args: {
    variant: 'bodyMedium',
    children: 'Text Component',
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
export const DisplayMedium: Story = {
  args: {
    variant: 'displayMedium',
    children: 'Display Medium',
  },
};
