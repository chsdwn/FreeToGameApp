import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { Button, TamaguiProvider, Text, YStack } from 'tamagui';

import config from '../tamagui.config';
import { queryClient } from './lib';
import { HomeRoute } from './routes';

export const App = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <TamaguiProvider config={config}>
          <StatusBar />
          <SafeAreaView style={styles.container}>
            <YStack flex={1} alignItems="center" justifyContent="center">
              <Text
                color="black"
                fontSize={48}
                fontWeight="300"
                fontFamily="$body"
              >
                Tamagui
              </Text>
              <Text
                color="black"
                fontSize={48}
                fontWeight="300"
                fontFamily="$body"
              >
                Tamagui
              </Text>
              <Text
                color="black"
                fontSize={48}
                fontWeight="400"
                fontFamily="$body"
              >
                Tamagui
              </Text>
              <Text
                color="black"
                fontSize={48}
                fontWeight="500"
                fontFamily="$body"
              >
                Tamagui
              </Text>
              <Text
                color="black"
                fontSize={48}
                fontWeight="600"
                fontFamily="$body"
              >
                Tamagui
              </Text>
              <Text
                color="black"
                fontSize={48}
                fontWeight="700"
                fontFamily="$body"
              >
                Tamagui
              </Text>
              <Button>Press ME</Button>
            </YStack>
          </SafeAreaView>
        </TamaguiProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
