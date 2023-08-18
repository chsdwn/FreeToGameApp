import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Badge, IconButton, Surface, Text } from 'react-native-paper';

import { useScale, useStyle, useTheme } from '@/hooks';
import { HomeStackNavigationProp } from '@/types';
import { useGamesFilterStore } from '../store';

export const GamesListHeader = () => {
  const theme = useTheme();
  const { scaleByHeight } = useScale();
  const navigation = useNavigation<HomeStackNavigationProp>();
  const { platform, category, sortBy } = useGamesFilterStore();

  let badgeCount = 0;
  if (platform) badgeCount++;
  if (category) badgeCount++;
  if (sortBy) badgeCount++;

  const handleFilterPress = () => {
    navigation.navigate('GamesFilter');
  };

  return (
    <Surface
      elevation={3}
      style={useStyle(
        () => [styles.header, { backgroundColor: theme.colors.surface }],
        [theme.colors.surface],
      )}
    >
      <View style={styles.placeholder} />
      <Text variant="headlineMedium" style={styles.title}>
        Free Games
      </Text>
      <View style={styles.filterButtonContainer}>
        <IconButton
          icon="filter-outline"
          size={scaleByHeight(8)}
          onPress={handleFilterPress}
        />
        <Badge
          visible={!!badgeCount}
          size={scaleByHeight(4.5)}
          style={styles.badge}
        >
          {badgeCount}
        </Badge>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  placeholder: {
    flex: 0.3,
  },
  title: {
    textAlign: 'center',
    flex: 1,
  },
  filterButtonContainer: {
    alignItems: 'flex-end',
    flex: 0.3,
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
});
