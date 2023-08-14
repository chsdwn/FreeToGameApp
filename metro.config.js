const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.resolverMainFields.unshift('sbmodern');

module.exports = mergeConfig(defaultConfig, config);
