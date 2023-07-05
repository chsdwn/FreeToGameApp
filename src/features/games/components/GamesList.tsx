import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { GameCard } from '.';
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
    <FlatList
      data={gamesQuery.data}
      keyExtractor={(item) => `game-${item.id}`}
      renderItem={({ item }) => <GameCard game={item} />}
      contentContainerStyle={styles.content}
      ItemSeparatorComponent={Seperator}
      refreshing={gamesQuery.isFetching || gamesQuery.isLoading}
      onRefresh={handleRefresh}
      initialNumToRender={5}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    padding: wp(3),
  },
  seperator: {
    height: wp(3),
  },
});
