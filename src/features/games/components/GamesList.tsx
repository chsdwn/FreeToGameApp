import { LegendList } from '@legendapp/list';
import React, { useMemo } from 'react';
import {
  useResponsiveScalability,
  useSafeAreaWindow,
  useScale,
  useStyle,
} from 'react-native-responsive-scalability';

import { GameCard } from './GameCard';
import { GameCardSkeleton } from './GameCardSkeleton';
import { GamesListEmpty } from './GamesListEmpty';
import { useGames } from '../api';
import { useGamesFilterStore } from '../store';

import { useDebounce, useTheme } from '@/hooks';

const generateSkeletonDataArrayOfSize = (size: number) => {
  return Array.from(Array(size).keys()).map((id) => ({
    id,
    Skeleton: GameCardSkeleton,
  }));
};

export const GamesList = () => {
  const theme = useTheme();
  const { width } = useSafeAreaWindow();
  const { breakpoints } = useResponsiveScalability();
  const { scaleByWidth } = useScale();
  const { platform, category, sortBy } = useGamesFilterStore();
  const gamesQuery = useGames({ platform, category, sortBy });

  const debouncedIsFetching = useDebounce(gamesQuery.isFetching, 500);
  const debouncedIsLoading = useDebounce(gamesQuery.isLoading, 500);

  const listContentStyle = useStyle(
    () => ({ padding: scaleByWidth(theme.spacing[2]) }),
    [theme.spacing, scaleByWidth],
  );

  const handleRefresh = () => {
    gamesQuery.refetch();
  };

  let numColumns = 1;
  if (breakpoints.sm && width >= breakpoints.sm) numColumns = 2;
  if (breakpoints.md && width >= breakpoints.md) numColumns = 3;
  if (breakpoints?.lg && width >= breakpoints.lg) numColumns = 4;

  const skeletonData = useMemo(
    () => generateSkeletonDataArrayOfSize(numColumns * 4),
    [numColumns],
  );

  if (gamesQuery.isLoading || debouncedIsLoading) {
    return (
      <LegendList
        key={`games-list-skeleton-column-${numColumns}`}
        data={skeletonData}
        keyExtractor={(item) => `game-skeleton-${item.id}`}
        renderItem={({ item: { Skeleton } }) => <Skeleton />}
        contentContainerStyle={listContentStyle}
        numColumns={numColumns}
      />
    );
  }

  return (
    <LegendList
      key={`games-list-column-${numColumns}`}
      data={gamesQuery.data ?? []}
      keyExtractor={(item) => `game-${item.id}`}
      renderItem={({ item }) => <GameCard game={item} />}
      contentContainerStyle={listContentStyle}
      ListEmptyComponent={GamesListEmpty}
      refreshing={gamesQuery.isFetching || debouncedIsFetching}
      onRefresh={handleRefresh}
      numColumns={numColumns}
      estimatedItemSize={334}
      waitForInitialLayout
      recycleItems
    />
  );
};
