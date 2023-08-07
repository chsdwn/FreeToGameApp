import { Dimensions, PixelRatio } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

import { BREAKPOINTS } from '@/config';

export const scaleSizeByWidth = (size: number) => {
  const { width } = Dimensions.get('screen');
  let divisor = 1;
  if (width >= BREAKPOINTS.sm) divisor = 2;
  if (width >= BREAKPOINTS.md) divisor = 3;

  return PixelRatio.roundToNearestPixel(widthPercentageToDP(size) / divisor);
};
