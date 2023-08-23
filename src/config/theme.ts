import { MD3Theme, MD3TypescaleKey } from 'react-native-paper';
import { MD3Colors, MD3Type } from 'react-native-paper/lib/typescript/types';

export interface Theme extends MD3Theme {
  spacing: Record<number, number>;
}

const roboto = 'Roboto-Regular';
const robotoSlabMedium = 'RobotoSlab-Medium';

export const fontsConfig: Partial<Record<MD3TypescaleKey, Partial<MD3Type>>> = {
  // # Title Fonts
  headlineLarge: {
    fontFamily: robotoSlabMedium,
    fontSize: 22,
    lineHeight: 22 * 1.5,
    fontWeight: '500',
    letterSpacing: 0,
  },
  headlineMedium: {
    fontFamily: robotoSlabMedium,
    fontSize: 21,
    lineHeight: 21 * 1.5,
    fontWeight: '500',
    letterSpacing: 0,
  },
  headlineSmall: {
    fontFamily: robotoSlabMedium,
    fontSize: 20,
    lineHeight: 20 * 1.5,
    fontWeight: '500',
    letterSpacing: 0,
  },

  titleLarge: {
    fontFamily: robotoSlabMedium,
    fontSize: 19,
    lineHeight: 19 * 1.5,
    fontWeight: '500',
    letterSpacing: 0,
  },
  titleMedium: {
    fontFamily: robotoSlabMedium,
    fontSize: 18,
    lineHeight: 18 * 1.5,
    fontWeight: '500',
    letterSpacing: 0,
  },
  titleSmall: {
    fontFamily: robotoSlabMedium,
    fontSize: 17,
    lineHeight: 17 * 1.5,
    fontWeight: '500',
    letterSpacing: 0,
  },

  // # Content Fonts
  displayLarge: {
    fontFamily: roboto,
    fontSize: 20,
    lineHeight: 20 * 1.5,
    fontWeight: '400',
    letterSpacing: 0,
  },
  displayMedium: {
    fontFamily: roboto,
    fontSize: 19,
    lineHeight: 19 * 1.5,
    fontWeight: '400',
    letterSpacing: 0,
  },
  displaySmall: {
    fontFamily: roboto,
    fontSize: 18,
    lineHeight: 18 * 1.5,
    fontWeight: '400',
    letterSpacing: 0,
  },

  bodyLarge: {
    fontFamily: roboto,
    fontSize: 17,
    lineHeight: 17 * 1.5,
    fontWeight: '400',
    letterSpacing: 0.15,
  },
  bodyMedium: {
    fontFamily: roboto,
    fontSize: 16,
    lineHeight: 16 * 1.5,
    fontWeight: '400',
    letterSpacing: 0.25,
  },
  bodySmall: {
    fontFamily: roboto,
    fontSize: 15,
    lineHeight: 15 * 1.5,
    fontWeight: '400',
    letterSpacing: 0.4,
  },

  labelLarge: {
    fontFamily: roboto,
    fontSize: 14,
    lineHeight: 14 * 1.5,
    fontWeight: '400',
    letterSpacing: 0.1,
  },
  labelMedium: {
    fontFamily: roboto,
    fontSize: 13,
    lineHeight: 13 * 1.5,
    fontWeight: '400',
    letterSpacing: 0.5,
  },
  labelSmall: {
    fontFamily: roboto,
    fontSize: 12,
    lineHeight: 12 * 1.5,
    fontWeight: '400',
    letterSpacing: 0.5,
  },
};

export const roundness = 3;
export const spacing = {
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
};

export const darkColors: MD3Colors = {
  primary: 'rgb(255, 178, 188)',
  onPrimary: 'rgb(103, 0, 35)',
  primaryContainer: 'rgb(145, 0, 53)',
  onPrimaryContainer: 'rgb(255, 217, 221)',
  secondary: 'rgb(255, 178, 189)',
  onSecondary: 'rgb(103, 0, 36)',
  secondaryContainer: 'rgb(144, 0, 54)',
  onSecondaryContainer: 'rgb(255, 217, 221)',
  tertiary: 'rgb(255, 176, 202)',
  onTertiary: 'rgb(93, 17, 53)',
  tertiaryContainer: 'rgb(122, 41, 76)',
  onTertiaryContainer: 'rgb(255, 217, 227)',
  error: 'rgb(255, 180, 171)',
  onError: 'rgb(105, 0, 5)',
  errorContainer: 'rgb(147, 0, 10)',
  onErrorContainer: 'rgb(255, 180, 171)',
  background: 'rgb(32, 26, 27)',
  onBackground: 'rgb(236, 224, 224)',
  surface: 'rgb(32, 26, 27)',
  onSurface: 'rgb(236, 224, 224)',
  surfaceVariant: 'rgb(82, 67, 69)',
  onSurfaceVariant: 'rgb(215, 193, 195)',
  outline: 'rgb(255, 178, 188)',
  outlineVariant: 'rgb(82, 67, 69)',
  shadow: 'rgb(0, 0, 0)',
  scrim: 'rgb(0, 0, 0)',
  inverseSurface: 'rgb(236, 224, 224)',
  inverseOnSurface: 'rgb(54, 47, 47)',
  inversePrimary: 'rgb(189, 0, 71)',
  elevation: {
    level0: 'transparent',
    level1: 'rgb(43, 34, 35)',
    level2: 'rgb(50, 38, 40)',
    level3: 'rgb(57, 43, 45)',
    level4: 'rgb(59, 44, 46)',
    level5: 'rgb(63, 47, 50)',
  },
  surfaceDisabled: 'rgba(236, 224, 224, 0.12)',
  onSurfaceDisabled: 'rgba(236, 224, 224, 0.38)',
  backdrop: 'rgba(58, 45, 46, 0.4)',
};

export const lightColors: MD3Colors = {
  primary: 'rgb(189, 0, 71)',
  onPrimary: 'rgb(255, 255, 255)',
  primaryContainer: 'rgb(255, 217, 221)',
  onPrimaryContainer: 'rgb(64, 0, 19)',
  secondary: 'rgb(178, 35, 77)',
  onSecondary: 'rgb(255, 255, 255)',
  secondaryContainer: 'rgb(255, 217, 221)',
  onSecondaryContainer: 'rgb(64, 0, 19)',
  tertiary: 'rgb(152, 64, 100)',
  onTertiary: 'rgb(255, 255, 255)',
  tertiaryContainer: 'rgb(255, 217, 227)',
  onTertiaryContainer: 'rgb(62, 0, 31)',
  error: 'rgb(186, 26, 26)',
  onError: 'rgb(255, 255, 255)',
  errorContainer: 'rgb(255, 218, 214)',
  onErrorContainer: 'rgb(65, 0, 2)',
  background: 'rgb(255, 251, 255)',
  onBackground: 'rgb(32, 26, 27)',
  surface: 'rgb(255, 251, 255)',
  onSurface: 'rgb(32, 26, 27)',
  surfaceVariant: 'rgb(243, 221, 223)',
  onSurfaceVariant: 'rgb(82, 67, 69)',
  outline: 'rgb(189, 0, 71)',
  outlineVariant: 'rgb(215, 193, 195)',
  shadow: 'rgb(0, 0, 0)',
  scrim: 'rgb(0, 0, 0)',
  inverseSurface: 'rgb(54, 47, 47)',
  inverseOnSurface: 'rgb(251, 238, 238)',
  inversePrimary: 'rgb(255, 178, 188)',
  elevation: {
    level0: 'transparent',
    level1: 'rgb(252, 238, 246)',
    level2: 'rgb(250, 231, 240)',
    level3: 'rgb(248, 223, 235)',
    level4: 'rgb(247, 221, 233)',
    level5: 'rgb(246, 216, 229)',
  },
  surfaceDisabled: 'rgba(32, 26, 27, 0.12)',
  onSurfaceDisabled: 'rgba(32, 26, 27, 0.38)',
  backdrop: 'rgba(58, 45, 46, 0.4)',
};
