import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Badge } from 'react-native-paper';

import { useGamesFilterModalStore, useGamesFilterStore } from '../store';

export const GamesListHeader = () => {
  const { platform, category, sortBy } = useGamesFilterStore();
  const { show } = useGamesFilterModalStore();

  let badgeCount = 0;
  if (platform !== 'all') badgeCount++;
  if (category) badgeCount++;
  if (sortBy) badgeCount++;

  return (
    <Appbar.Header statusBarHeight={0}>
      <Appbar.Content title="Free Games" titleStyle={styles.title} />
      <View>
        <Badge visible={!!badgeCount} size={16} style={styles.badge}>
          {badgeCount}
        </Badge>
        <Appbar.Action icon="filter-variant" onPress={show} />
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
  badge: {
    position: 'absolute',
    top: 6,
    right: 6,
  },
});
