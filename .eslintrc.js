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
      },
    ],
  },
};
