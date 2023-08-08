import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Badge, Text } from 'react-native-paper';

import { useScale } from '@/hooks';
import { HomeStackNavigationProp } from '@/types';
import { useGamesFilterStore } from '../store';

export const GamesListHeader = () => {
  const { scaleByWidth } = useScale();
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
    <Appbar.Header statusBarHeight={0}>
      <Appbar.Content
        title={
          <Text variant="headlineMedium" style={styles.title}>
            Free Games
          </Text>
        }
      />
      <View>
        <Badge
          visible={!!badgeCount}
          size={scaleByWidth(4)}
          style={styles.badge}
        >
          {badgeCount}
        </Badge>
        <Appbar.Action
          icon="filter-outline"
          size={scaleByWidth(7)}
          onPress={handleFilterPress}
        />
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
    top: 8,
    right: 8,
  },
});
