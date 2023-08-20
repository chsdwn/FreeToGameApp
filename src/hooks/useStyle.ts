import { DependencyList, useMemo } from 'react';
import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

export const useStyle = <T extends ImageStyle | TextStyle | ViewStyle>(
  styleCb: () => StyleProp<T extends (infer U)[] ? U : T>,
  deps?: DependencyList,
) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => StyleSheet.flatten(styleCb()), deps);
};
