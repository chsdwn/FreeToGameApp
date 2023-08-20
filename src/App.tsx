import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { PaperProvider } from 'react-native-paper';

import { StatusBar } from './components';
import { useTheme } from './hooks';
import { queryClient } from './lib';
import { HomeRoute } from './routes';
import { ResponsiveProvider } from './store';
import { IResponsiveConfig } from './types';

const config: IResponsiveConfig = {
  baseWidth: 360,
  baseHeight: 800,
  breakpoints: {
    sm: 640,
    md: 960,
    lg: 1280,
  },
};

export const App = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <ResponsiveProvider config={config}>
          <PaperProvider theme={theme}>
            <StatusBar />
            <SafeAreaView style={styles.root}>
              <HomeRoute />
            </SafeAreaView>
          </PaperProvider>
        </ResponsiveProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
