module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['axios'],
            message: 'Import pre-configured axios from @/lib',
          },
        ],
        paths: [
          {
            name: 'react-native',
            importNames: ['Text'],
            message: 'Import Text from react-native-paper',
          },
        ],
      },
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    curly: 'off',
  },
};
