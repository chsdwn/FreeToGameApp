import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useScale } from 'react-native-responsive-scalability';

import { Icon, Text } from '@/components';
import { useTheme } from '@/hooks';

export const GamesListEmpty = () => {
  const theme = useTheme();
  const { scaleByWidth } = useScale();

  return (
    <View style={styles.container}>
      <Icon
        name="controller-classic-outline"
        size={scaleByWidth(128)}
        color={theme.colors.tertiary}
      />
      <Text variant="displayMedium">No games found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
