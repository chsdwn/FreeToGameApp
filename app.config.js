/** @type {import("expo/config").ExpoConfig} */
module.exports = ({ config }) => ({
  ...config,
  plugins: [
    ...config.plugins,
    [
      '@sentry/react-native/expo',
      {
        url: process.env.SENTRY_URL,
        project: process.env.SENTRY_PROJECT,
        organization: process.env.SENTRY_ORGANIZATION,
      },
    ],
  ],
  extra: {
    ...config.extra,
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
});
