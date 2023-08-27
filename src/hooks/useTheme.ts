import { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import {
  configureFonts,
  MD3DarkTheme,
  MD3LightTheme,
} from 'react-native-paper';

import {
  darkColors,
  lightColors,
  fontsConfig,
  roundness,
  spacing,
  Theme,
} from '@/config/theme';

export const useTheme = () => {
  const colorScheme = useColorScheme();

  const theme: Theme = useMemo(() => {
    const isDark = colorScheme === 'dark';
    const colors = isDark ? darkColors : lightColors;
    const md3Theme = isDark ? MD3DarkTheme : MD3LightTheme;

    return {
      ...md3Theme,
      colors,
      fonts: configureFonts({ config: fontsConfig }),
      roundness,
      spacing,
    };
  }, [colorScheme]);

  return theme;
};
