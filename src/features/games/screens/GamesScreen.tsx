import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';

import {
  GamesError,
  GamesFilterModal,
  GamesList,
  GamesListHeader,
} from '../components';

export const GamesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ErrorBoundary FallbackComponent={GamesError}>
        <GamesListHeader />
        <GamesList />
        <GamesFilterModal />
      </ErrorBoundary>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
