import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { GamesFilterModal, GamesList, GamesListHeader } from '../components';

export const GamesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <GamesListHeader />
      <GamesList />
      <GamesFilterModal />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
