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

export const App = () => {
  const colorScheme = useColorScheme();
  const theme = useTheme();

  const isDark = colorScheme === 'dark';

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <PaperProvider theme={theme}>
          <StatusBar
            backgroundColor={isDark ? 'black' : 'white'}
            barStyle={isDark ? 'light-content' : 'dark-content'}
          />
          <SafeAreaView style={styles.root}>
            <HomeRoute />
          </SafeAreaView>
        </PaperProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
