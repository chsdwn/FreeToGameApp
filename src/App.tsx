import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import {
  ActivityIndicator,
  Button,
  PaperProvider,
  Surface,
  Text,
} from 'react-native-paper';

import { darkTheme, defaultTheme, lightTheme } from './config/theme';
import { queryClient } from './lib';
// import { HomeRoute } from './routes';

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
            <Surface mode="flat" style={styles.container}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text variant="titleLarge">titleLarge</Text>
                <Text variant="titleMedium">titleMedium</Text>
                <Text variant="titleSmall">titleSmall</Text>
                <Text variant="bodyLarge">bodyLarge</Text>
                <Text variant="bodyMedium">bodyMedium</Text>
                <Text variant="bodySmall">bodySmall</Text>
                <Text variant="labelLarge">labelLarge</Text>
                <Text variant="labelMedium">labelMedium</Text>
                <Text variant="labelSmall">labelSmall</Text>
                <ActivityIndicator animating />
                <Button>Press ME</Button>
                <Button mode="contained">Press ME</Button>
                <Button mode="contained-tonal">Press ME</Button>
                <Button mode="elevated">Press ME</Button>
                <Button mode="outlined">Press ME</Button>
              </ScrollView>
            </Surface>
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
