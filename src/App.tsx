import { NavigationContainer } from '@react-navigation/native';
import { wrap } from '@sentry/react-native';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import {
  ResponsiveScalabilityProvider,
  IResponsiveScalabilityConfig,
} from 'react-native-responsive-scalability';

import { StatusBar } from './components';
import { useTheme } from './hooks';
import { initializeSentry, queryClient } from './lib';
import { HomeRoute } from './routes';

initializeSentry();

const config: IResponsiveScalabilityConfig = {
  breakpoints: {
    lg: 1280,
  },
};

export const BaseApp = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <ResponsiveScalabilityProvider config={config}>
          <PaperProvider theme={theme}>
            <StatusBar />
            <SafeAreaView style={styles.root}>
              <HomeRoute />
            </SafeAreaView>
          </PaperProvider>
        </ResponsiveScalabilityProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export const App = wrap(BaseApp);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
