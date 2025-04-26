import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Badge, IconButton, Surface } from 'react-native-paper';
import { useScale, useStyle } from 'react-native-responsive-scalability';

import { useGamesFilterStore } from '../store';

import { Text } from '@/components';
import { useTheme } from '@/hooks';

export const GamesListHeader = () => {
  const theme = useTheme();
  const { scaleByWidth } = useScale();
  const navigation = useNavigation();
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
      <Text variant="headlineLarge" style={styles.title}>
        Free Games
      </Text>
      <View style={styles.filterButtonContainer}>
        <IconButton
          icon="filter-outline"
          size={scaleByWidth(20)}
          onPress={handleFilterPress}
        />
        <Badge
          visible={!!badgeCount}
          size={scaleByWidth(10)}
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
