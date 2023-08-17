import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { PaperProvider } from 'react-native-paper';

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
  const colorScheme = useColorScheme();
  const theme = useTheme();

  const isDark = colorScheme === 'dark';

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <ResponsiveProvider config={config}>
          <PaperProvider theme={theme}>
            <StatusBar
              backgroundColor={isDark ? 'black' : 'white'}
              barStyle={isDark ? 'light-content' : 'dark-content'}
            />
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
