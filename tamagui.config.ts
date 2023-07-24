import { shorthands } from '@tamagui/shorthands';
import { themes, tokens } from '@tamagui/themes';
import { createFont, createTamagui } from 'tamagui';

export default createTamagui({
  themes,
  tokens,
  shorthands,
  fonts: {
    body: createFont({
      size: {
        // You'll want to fill these values in so you can use them
        // for now, fontSize="$4" will be 14px.
        // You can define different keys, but `tamagui`
        // standardizes on 1-15.
        4: 14,
      },

      lineHeight: {
        4: 16,
      },
      face: {
        300: { normal: 'RobotoMono-Light' },
        400: { normal: 'RobotoMono-Regular' },
        500: { normal: 'RobotoMono-Medium' },
        600: { normal: 'RobotoMono-SemiBold' },
        700: { normal: 'RobotoMono-Bold' },
      },
    }),
  },
});
