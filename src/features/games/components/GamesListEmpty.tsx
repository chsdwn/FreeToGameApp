import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { Icon } from '@/components';
import { useScale, useTheme } from '@/hooks';

export const GamesListEmpty = () => {
  const theme = useTheme();
  const { scaleByWidth } = useScale();

  return (
    <View style={styles.container}>
      <Icon
        name="controller-classic-outline"
        size={scaleByWidth(32)}
        color={theme.colors.tertiary}
      />
      <Text variant="bodyLarge">No games found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
