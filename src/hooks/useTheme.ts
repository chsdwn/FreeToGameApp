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
  spacing as themeSpacing,
  Theme,
} from '@/config/theme';
import { deepCloneObject } from '@/utils';
import { useScale } from './useScale';

export const useTheme = () => {
  const colorScheme = useColorScheme();
  const { scaleByWidth, scaleFontSizeByWidth } = useScale();

  const fonts = useMemo(() => {
    const config = deepCloneObject(fontsConfig);
    Object.values(config).forEach((definition) => {
      definition.fontSize = scaleFontSizeByWidth(definition.fontSize!);
      definition.lineHeight = scaleFontSizeByWidth(definition.lineHeight!);
    });
    return configureFonts({ config });
  }, [scaleFontSizeByWidth]);

  const spacing = useMemo(() => {
    const values = { ...themeSpacing };
    for (const [k, value] of Object.entries(values)) {
      const key = Number(k) as keyof typeof values;
      values[key] = scaleByWidth(value);
    }
    return values;
  }, [scaleByWidth]);

  const theme: Theme = useMemo(() => {
    const isDark = colorScheme === 'dark';
    const colors = isDark ? darkColors : lightColors;
    const md3Theme = isDark ? MD3DarkTheme : MD3LightTheme;

    return {
      ...md3Theme,
      colors,
      fonts,
      roundness,
      spacing,
    };
  }, [colorScheme, fonts, spacing]);

  return theme;
};
