import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { PaperProvider, Surface } from 'react-native-paper';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';

import { useTheme } from '../src/hooks';

export const decorators = [
  withBackgrounds,
  (Story) => {
    const colorScheme = useColorScheme();
    const theme = useTheme();

    const isDark = colorScheme === 'dark';

    return (
      <PaperProvider theme={theme}>
        <StatusBar
          backgroundColor={isDark ? 'black' : 'white'}
          barStyle={isDark ? 'light-content' : 'dark-content'}
        />
        <Surface style={{ flex: 1, width: '100%', height: '100%' }}>
          <SafeAreaView style={{ flex: 1, margin: 8 }}>
            <Story />
          </SafeAreaView>
        </Surface>
      </PaperProvider>
    );
  },
];

/** @type { import("@storybook/react-native").Parameters } */
export const parameters = {
  // backgrounds: {
  //   default: 'white',
  //   values: [
  //     { name: 'white', value: 'white' },
  //     { name: 'black', value: 'black' },
  //   ],
  // },
  options: {
    storySort: {
      order: ['Chip', 'Icon'],
      // locales: 'en-US',
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
