import { Appearance, View } from 'react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  decorators: [
    Story => (
      <View style={{flex: 1, padding: 16}}>
        <Story />
      </View>
    ),
    withBackgrounds
  ],

  parameters: {
    backgrounds: {
      default: Appearance.getColorScheme() === "dark" ? "dark" : "plain",
      values: [
        { name: "plain", value: "white" },
        { name: "dark", value: "#333" },
        { name: "secondary", value: "pink" },
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
