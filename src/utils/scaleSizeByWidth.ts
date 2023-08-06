import { Dimensions, PixelRatio } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

import { breakpoints } from '@/config/theme';

export const scaleSizeByWidth = (size: number) => {
  const { width } = Dimensions.get('screen');
  let divisor = 1;
  if (width >= breakpoints.sm) divisor = 2;
  if (width >= breakpoints.md) divisor = 3;

  return PixelRatio.roundToNearestPixel(widthPercentageToDP(size) / divisor);
};
