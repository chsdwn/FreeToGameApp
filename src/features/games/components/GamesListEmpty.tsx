import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

import { Icon } from '@/components';
import { scaleSizeByWidth } from '@/utils';

export const GamesListEmpty = () => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Icon
        name="controller-classic-outline"
        size={scaleSizeByWidth(32)}
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
