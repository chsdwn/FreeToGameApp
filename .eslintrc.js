module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-native',
            importNames: ['Text'],
            message: 'Import Text from react-native-paper',
          },
          {
            name: 'axios',
            importNames: ['default'],
            message: 'Import pre-configured axios from @/lib',
          },
        ],
      },
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    curly: 'off',
  },
};
