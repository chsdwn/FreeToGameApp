import { useCallback } from 'react';
import { PixelRatio, useWindowDimensions } from 'react-native';

import { BREAKPOINTS } from '@/config';

const divideWindowWidthByBreakpoint = (width: number) => {
  let divisor = 1;
  if (BREAKPOINTS.sm <= width) divisor = 2;
  if (BREAKPOINTS.md <= width) divisor = 3;
  if (BREAKPOINTS.lg <= width) divisor = 4;
  return width / divisor;
};

const BASE_WIDTH = 360;
export const useScale = () => {
  const { fontScale, height, scale, width } = useWindowDimensions();

  const getWindowWidthByOrientation = useCallback(() => {
    const isPortrait = width < height;
    const windowWidth = isPortrait ? width : height;
    return divideWindowWidthByBreakpoint(windowWidth);
  }, [height, width]);

  const scaleByWidth = useCallback(
    (size: number) => {
      const windowWidth = getWindowWidthByOrientation();
      return PixelRatio.roundToNearestPixel(
        size * (windowWidth / BASE_WIDTH) * scale,
      );
    },
    [scale, getWindowWidthByOrientation],
  );

  const scaleFontSizeByWidth = useCallback(
    (fontSize: number) => {
      const windowWidth = getWindowWidthByOrientation();
      return PixelRatio.roundToNearestPixel(
        fontSize * (windowWidth / BASE_WIDTH) * fontScale,
      );
    },
    [fontScale, getWindowWidthByOrientation],
  );

  return { scaleByWidth, scaleFontSizeByWidth };
};
