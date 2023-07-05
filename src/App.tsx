import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { PaperProvider } from 'react-native-paper';

import { queryClient } from './lib';
import { HomeRoute } from './routes';

export const App = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <StatusBar />
          <SafeAreaView style={styles.container}>
            <HomeRoute />
          </SafeAreaView>
        </PaperProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
