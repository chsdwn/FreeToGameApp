const { getSentryExpoConfig } = require('@sentry/react-native/metro');
const withStorybook = require('@storybook/react-native/metro/withStorybook');
const { getDefaultConfig } = require('expo/metro-config');
const path = require('node:path');

if (process.env.STORYBOOK_ENABLED === 'true') {
  /** @type {import("expo/metro-config").MetroConfig} */
  const config = getDefaultConfig(__dirname);
  module.exports = withStorybook(config, {
    enabled: true,
    configPath: path.resolve(__dirname, './.storybook'),
  });
} else {
  module.exports = getSentryExpoConfig(__dirname);
}
