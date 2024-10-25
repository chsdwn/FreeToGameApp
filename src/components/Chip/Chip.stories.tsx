import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from 'react-native';

import { Chip } from './Chip';

const meta = {
  title: 'Chip',
  component: Chip,
  argTypes: {
    active: {
      type: 'boolean',
      description: 'Is chip active?',
    },
    label: {
      type: 'string',
      description: 'Title of the chip',
    },
    onPress: {
      action: 'pressed',
    },
  },
  args: {
    active: false,
    label: 'Chip Label',
    onPress: () => {},
  },
  parameters: {
    notes: `
# Chip

You can also add markdown notes.

Please Subscribe.

- Item
1. Lorem`,
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const Active: Story = {
  args: {
    active: true,
    label: 'Active Chip',
    onPress: () => Alert.alert("You've pressed the chip"),
  },
};
