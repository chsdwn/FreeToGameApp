import { Dimensions, PixelRatio } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

import { breakpoints } from '@/config/theme';

export const scaleSizeByWidth = (size: number) => {
  const { width, height } = Dimensions.get('screen');
  let divisor = 1;
  if (height > width) {
    if (width >= breakpoints.md) divisor = 3;
    else if (width >= breakpoints.sm) divisor = 2;
  }

  return PixelRatio.roundToNearestPixel(widthPercentageToDP(size) / divisor);
};
