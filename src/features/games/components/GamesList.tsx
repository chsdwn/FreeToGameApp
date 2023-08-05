import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { defaultTheme } from '@/config/theme';
import { GameCard } from './GameCard';
import { useGames } from '../api';
import { useGamesFilterStore } from '../store';

const Seperator = () => <View style={styles.seperator} />;

export const GamesList = () => {
  const { platform, category, sortBy } = useGamesFilterStore();
  const gamesQuery = useGames({ platform, category, sortBy });

  const handleRefresh = () => {
    gamesQuery.refetch();
  };

  return (
    <FlashList
      data={gamesQuery.data}
      keyExtractor={(item) => `game-${item.id}`}
      renderItem={({ item }) => <GameCard game={item} />}
      contentContainerStyle={styles.content}
      ItemSeparatorComponent={Seperator}
      refreshing={gamesQuery.isFetching || gamesQuery.isLoading}
      onRefresh={handleRefresh}
      estimatedItemSize={325}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    padding: defaultTheme.spacing[4],
  },
  seperator: {
    height: defaultTheme.spacing[5],
  },
});
