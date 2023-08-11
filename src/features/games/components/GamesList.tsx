import React from 'react';
import { useWindowDimensions } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { BREAKPOINTS } from '@/config';
import { useDebounce, useStyle, useTheme } from '@/hooks';
import { GameCard } from './GameCard';
import { GameCardSkeleton } from './GameCardSkeleton';
import { GamesListEmpty } from './GamesListEmpty';
import { useGames } from '../api';
import { useGamesFilterStore } from '../store';

const generateSkeletonDataArrayOfSize = (size: number) => {
  return Array.from(Array(size).keys()).map((id) => ({
    id,
    Skeleton: GameCardSkeleton,
  }));
};

export const GamesList = () => {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const { platform, category, sortBy } = useGamesFilterStore();
  const gamesQuery = useGames({ platform, category, sortBy });

  const debouncedIsFetching = useDebounce(gamesQuery.isFetching, 500);
  const debouncedIsLoading = useDebounce(gamesQuery.isLoading, 500);

  const listContentStyle = useStyle(
    () => ({ padding: theme.spacing[2] }),
    [theme.spacing],
  );

  const handleRefresh = () => {
    gamesQuery.refetch();
  };

  let numColumns = 1;
  if (width >= BREAKPOINTS.sm) numColumns = 2;
  if (width >= BREAKPOINTS.md) numColumns = 3;

  if (gamesQuery.isLoading || debouncedIsLoading) {
    return (
      <FlashList
        data={generateSkeletonDataArrayOfSize(numColumns * 4)}
        keyExtractor={(item) => `game-skeleton-${item.id}`}
        renderItem={({ item: { Skeleton } }) => <Skeleton />}
        contentContainerStyle={listContentStyle}
        numColumns={numColumns}
        estimatedItemSize={250}
      />
    );
  }

  return (
    <FlashList
      data={gamesQuery.data}
      keyExtractor={(item) => `game-${item.id}`}
      renderItem={({ item }) => <GameCard game={item} />}
      contentContainerStyle={listContentStyle}
      ListEmptyComponent={<GamesListEmpty />}
      refreshing={gamesQuery.isFetching || debouncedIsFetching}
      onRefresh={handleRefresh}
      estimatedItemSize={325}
      numColumns={numColumns}
    />
  );
};
