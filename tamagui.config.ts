import { shorthands } from '@tamagui/shorthands';
import { themes, tokens } from '@tamagui/themes';
import { createFont, createTamagui, createTokens } from 'tamagui';

const size = {
  1: 12,
  2: 14,
  3: 16,
  4: 18,
  5: 20,
  6: 24,
  7: 30,
  8: 36,
  9: 48,
  10: 60,
};

const lineHeight = Object.entries(size).reduce((acc, [key, value]) => {
  acc[+key as keyof typeof size] = value * 1.5;
  return acc;
}, {} as typeof size);

const appConfig = createTamagui({
  themes,
  shorthands,
  fonts: {
    body: createFont({
      size,
      lineHeight,
      face: {
        300: { normal: 'RobotoMono-Light' },
        400: { normal: 'RobotoMono-Regular' },
        500: { normal: 'RobotoMono-Medium' },
        600: { normal: 'RobotoMono-SemiBold' },
        700: { normal: 'RobotoMono-Bold' },
      },
    }),
  },
  tokens: createTokens({
    ...tokens,
    spacing: {
      0: 0,
      1: 4,
      2: 8,
      3: 12,
      4: 16,
      5: 24,
      6: 32,
      7: 48,
      8: 64,
      9: 96,
      10: 128,
    },
  }),
});

export type AppConfig = typeof appConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;
