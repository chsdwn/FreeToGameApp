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

import { darkTheme, defaultTheme, lightTheme } from './config/theme';
import { queryClient } from './lib';
import { HomeRoute } from './routes';

export const App = () => {
  const colorScheme = useColorScheme();
  let theme = lightTheme;
  if (colorScheme === 'dark') theme = darkTheme;

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <PaperProvider theme={theme}>
          <StatusBar
            backgroundColor={colorScheme === 'dark' ? 'black' : 'white'}
            barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
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
  container: {
    flex: 1,
    padding: defaultTheme.spacing[2],
  },
});
