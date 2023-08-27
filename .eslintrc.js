module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['react-native-vector-icons'],
            message: 'Import Icon from @/components',
          },
          {
            group: ['react-native', 'react-native-paper'],
            importNames: ['Text'],
            message: 'Import Text from @components',
          },
        ],
        paths: [
          {
            name: 'react-native',
            importNames: ['StatusBar'],
            message: 'Import StatusBar from @/components',
          },
          {
            name: 'axios',
            importNames: ['default'],
            message: 'Import pre-configured axios from @/lib',
          },
          {
            name: 'react-native-paper',
            importNames: ['useTheme'],
            message: 'Import useTheme from @/hooks',
          },
        ],
      },
    ],
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: '(useStyle)',
      },
    ],
    curly: 'off',
  },
};
