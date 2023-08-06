import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { defaultTheme } from '@/config/theme';
import { useDebounce } from '@/hooks';
import { GameCard } from './GameCard';
import { GameCardSkeleton } from './GameCardSkeleton';
import { useGames } from '../api';
import { useGamesFilterStore } from '../store';

const Seperator = () => <View style={styles.seperator} />;

export const GamesList = () => {
  const { platform, category, sortBy } = useGamesFilterStore();
  const gamesQuery = useGames({ platform, category, sortBy });

  const debouncedIsFetching = useDebounce(gamesQuery.isFetching, 500);
  const debouncedIsLoading = useDebounce(gamesQuery.isLoading, 500);

  const handleRefresh = () => {
    gamesQuery.refetch();
  };

  if (debouncedIsLoading) {
    return (
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <GameCardSkeleton />
        <Seperator />
        <GameCardSkeleton />
      </ScrollView>
    );
  }

  return (
    <FlashList
      data={gamesQuery.data}
      keyExtractor={(item) => `game-${item.id}`}
      renderItem={({ item }) => <GameCard game={item} />}
      contentContainerStyle={styles.content}
      ItemSeparatorComponent={Seperator}
      refreshing={debouncedIsFetching}
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
