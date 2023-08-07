import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import { Surface } from 'react-native-paper';

import { GamesErrorFallback, GamesList, GamesListHeader } from '../components';

export const GamesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Surface style={styles.container}>
        <ErrorBoundary FallbackComponent={GamesErrorFallback}>
          <GamesListHeader />
          <GamesList />
        </ErrorBoundary>
      </Surface>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
