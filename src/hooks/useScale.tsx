import React, { createContext, useCallback, useContext, useMemo } from 'react';
import { PixelRatio, useWindowDimensions } from 'react-native';

const BASE_WIDTH = 360;
const BASE_HEIGHT = 800;

export type IResponsiveConfig = {
  baseWidth: number;
  baseHeight: number;
  breakpoints?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
};
export const ResponsiveContext = createContext<IResponsiveConfig>({
  baseWidth: BASE_WIDTH,
  baseHeight: BASE_HEIGHT,
});

type IProviderProps = {
  config?: Partial<IResponsiveConfig>;
  children: React.ReactNode;
};
export const ResponsiveProvider = ({ config, children }: IProviderProps) => {
  const memoizedConfig: IResponsiveConfig = useMemo(() => {
    return {
      baseWidth: config?.baseWidth || BASE_WIDTH,
      baseHeight: config?.baseHeight || BASE_HEIGHT,
      breakpoints: config?.breakpoints,
    };
  }, [config]);

  return (
    <ResponsiveContext.Provider value={memoizedConfig}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useScale = () => {
  const { baseWidth, breakpoints } = useContext(ResponsiveContext);
  const { fontScale, height, scale, width } = useWindowDimensions();

  const windowWidth = useMemo(() => {
    const isPortrait = width < height;
    const widthByRotation = isPortrait ? width : height;

    let divisor = 1;
    if (breakpoints?.sm && breakpoints.sm <= widthByRotation) divisor = 2;
    if (breakpoints?.md && breakpoints.md <= widthByRotation) divisor = 3;
    if (breakpoints?.lg && breakpoints.lg <= widthByRotation) divisor = 4;
    if (breakpoints?.xl && breakpoints.xl <= widthByRotation) divisor = 5;
    return widthByRotation / divisor;
  }, [breakpoints, height, width]);

  const scaleByWidth = useCallback(
    (size: number) => {
      return PixelRatio.roundToNearestPixel(
        size * (windowWidth / baseWidth) * scale,
      );
    },
    [baseWidth, scale, windowWidth],
  );

  const scaleFontSizeByWidth = useCallback(
    (fontSize: number) => {
      return PixelRatio.roundToNearestPixel(
        fontSize * (windowWidth / baseWidth) * fontScale,
      );
    },
    [baseWidth, fontScale, windowWidth],
  );

  return { scaleByWidth, scaleFontSizeByWidth };
};
