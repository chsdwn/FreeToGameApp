import React from 'react';
import {
  SafeAreaView,
  // eslint-disable-next-line no-restricted-imports
  StatusBar as RNStatusBar,
  useColorScheme,
  View,
} from 'react-native';
import { useStyle } from 'react-native-responsive-scalability';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '@/hooks';

type Props = {
  backgroundColor?: string;
};
export const StatusBar = ({ backgroundColor }: Props) => {
  const theme = useTheme();
  const { top } = useSafeAreaInsets();
  const isDark = useColorScheme() === 'dark';

  return (
    <View
      style={useStyle(
        () => ({
          height: top,
          backgroundColor: backgroundColor || theme.colors.surface,
        }),
        [backgroundColor, theme.colors.surface, top],
      )}
    >
      <SafeAreaView>
        <RNStatusBar
          backgroundColor="transparent"
          barStyle={isDark ? 'light-content' : 'dark-content'}
          translucent
        />
      </SafeAreaView>
    </View>
  );
};
