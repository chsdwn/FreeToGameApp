import React from 'react';
import { Alert, View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react-native';

import { Chip, ChipProps } from './Chip';

const ChipMeta: Meta<ChipProps> = {
  title: 'Chip',
  component: Chip,
  argTypes: {
    onPress: {
      action: 'on press',
    },
  },
  args: {
    active: false,
    label: 'Chip',
    onPress: () => Alert.alert('Chip', 'onPress action'),
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

export const Basic: StoryObj<ChipProps> = {};

export default ChipMeta;
