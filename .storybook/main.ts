import { StorybookConfig } from '@storybook/react-native';

const main: StorybookConfig = {
  stories: ['../src/components/**/*.stories.?(tsx|ts)'],
  addons: [
    '@storybook/addon-ondevice-actions',
    '@storybook/addon-ondevice-backgrounds',
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-notes',
  ],
};

export default main;
