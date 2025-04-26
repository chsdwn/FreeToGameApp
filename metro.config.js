const { getSentryExpoConfig } = require('@sentry/react-native/metro');
const withStorybook = require('@storybook/react-native/metro/withStorybook');
const { getDefaultConfig } = require('expo/metro-config');
const path = require('node:path');

module.exports = getSentryExpoConfig(__dirname, {
  getDefaultConfig: (projectRoot, options) => {
    const config = getDefaultConfig(projectRoot, options);

    return withStorybook(config, {
      enabled: true,
      configPath: path.resolve(__dirname, './.storybook'),
    });
  },
});
