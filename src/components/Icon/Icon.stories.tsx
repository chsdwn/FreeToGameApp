import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';

const meta = {
  title: 'Icon',
  component: Icon,
  argTypes: {
    name: {
      type: 'string',
      description: 'Name of the icon',
    },
    size: {
      type: 'number',
      description: 'Size of the icon',
    },
    color: {
      type: 'string',
      description: 'Color of the icon',
    },
  },
  args: {
    name: 'controller-classic-outline',
    size: 32,
    color: 'red',
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
