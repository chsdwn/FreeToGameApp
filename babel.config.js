module.exports = (api) => {
  const plugins = [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
        },
      },
    ],
  ];

  if (api.env() !== 'development') plugins.push('transform-remove-console');

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins,
  };
};
