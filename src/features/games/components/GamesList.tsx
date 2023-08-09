import React from 'react';
import { ScrollView, useWindowDimensions, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { BREAKPOINTS } from '@/config';
import { useDebounce, useTheme } from '@/hooks';
import { GameCard } from './GameCard';
import { GameCardSkeleton } from './GameCardSkeleton';
import { GamesListEmpty } from './GamesListEmpty';
import { useGames } from '../api';
import { useGamesFilterStore } from '../store';

const Seperator = () => {
  const theme = useTheme();

  return <View style={{ height: theme.spacing[4] }} />;
};

export const GamesList = () => {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const { platform, category, sortBy } = useGamesFilterStore();
  const gamesQuery = useGames({ platform, category, sortBy });

  const debouncedIsFetching = useDebounce(gamesQuery.isFetching, 500);
  const debouncedIsLoading = useDebounce(gamesQuery.isLoading, 500);

  const handleRefresh = () => {
    gamesQuery.refetch();
  };

  let numColumns = 1;
  if (width >= BREAKPOINTS.sm) numColumns = 2;
  if (width >= BREAKPOINTS.md) numColumns = 3;

  if (gamesQuery.isLoading || debouncedIsLoading) {
    return (
      <ScrollView
        contentContainerStyle={{ padding: theme.spacing[4] }}
        showsVerticalScrollIndicator={false}
      >
        <GameCardSkeleton />
        <Seperator />
        <GameCardSkeleton />
        <Seperator />
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
      contentContainerStyle={{ padding: theme.spacing[4] }}
      ItemSeparatorComponent={Seperator}
      ListEmptyComponent={<GamesListEmpty />}
      refreshing={gamesQuery.isFetching || debouncedIsFetching}
      onRefresh={handleRefresh}
      estimatedItemSize={325}
      numColumns={numColumns}
    />
  );
};
