import React from 'react';
import { View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react-native';

import { Icon, IconProps } from './Icon';

const IconMeta: Meta<IconProps> = {
  title: 'Icon',
  component: Icon,
  argTypes: {
    name: {
      description: 'Name of any Material Community Icons icon',
    },
  },
  args: {
    name: 'home',
    size: 32,
    color: 'red',
  },
  decorators: [
    (Story) => {
      return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Story />
        </View>
      );
    },
  ],
};

export const Basic: StoryObj<IconProps> = {};

export default IconMeta;
