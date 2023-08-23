import { useCallback, useContext, useMemo } from 'react';
import { PixelRatio, useWindowDimensions } from 'react-native';

import { ResponsiveContext } from '@/store';

export const useScale = () => {
  const { baseWidth, breakpoints } = useContext(ResponsiveContext);
  const { width } = useWindowDimensions();

  const windowWidth = useMemo(() => {
    let divisor = 1;
    if (breakpoints?.sm && breakpoints.sm <= width) divisor = 2;
    if (breakpoints?.md && breakpoints.md <= width) divisor = 3;
    if (breakpoints?.lg && breakpoints.lg <= width) divisor = 4;
    if (breakpoints?.xl && breakpoints.xl <= width) divisor = 5;
    return width / divisor;
  }, [breakpoints, width]);

  const scaleByWidth = useCallback(
    (size: number) => {
      return PixelRatio.roundToNearestPixel(size * (windowWidth / baseWidth));
    },
    [baseWidth, windowWidth],
  );

  const scaleFontSizeByWidth = useCallback(
    (fontSize: number) => {
      return PixelRatio.roundToNearestPixel(
        (fontSize * windowWidth) / baseWidth,
      );
    },
    [baseWidth, windowWidth],
  );

  return { scaleByWidth, scaleFontSizeByWidth };
};
