import React, { useMemo } from 'react';
import { TextStyle } from 'react-native';
// eslint-disable-next-line no-restricted-imports
import { Text as PaperText, TextProps } from 'react-native-paper';
import { useScale, useStyle } from 'react-native-responsive-scalability';

import { fontsConfig } from '@/config/theme';
import { useTheme } from '@/hooks';

export const Text = <T,>({ variant, style, ...props }: TextProps<T>) => {
  const theme = useTheme();
  const { scaleByWidth } = useScale();

  const fontStyles = useMemo(() => {
    if (!variant) return undefined;

    const fontVariant = variant as keyof typeof fontsConfig;
    const { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } =
      theme.fonts[fontVariant];
    return {
      fontFamily,
      fontSize: scaleByWidth(fontSize),
      fontWeight,
      lineHeight: scaleByWidth(lineHeight),
      letterSpacing,
    } as TextStyle;
  }, [theme.fonts, variant, scaleByWidth]);

  return (
    <PaperText
      {...props}
      variant={undefined}
      style={useStyle(() => [fontStyles, style], [fontStyles, style])}
    />
  );
};
