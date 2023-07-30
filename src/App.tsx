import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { Button, Stack, TamaguiProvider, Text, getTokens } from 'tamagui';

import config from '../tamagui.config';
import { queryClient } from './lib';
// import { HomeRoute } from './routes';

console.log('blue', getTokens().color.blue1Light);

export const App = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <TamaguiProvider config={config}>
          <StatusBar />
          <SafeAreaView style={styles.container}>
            <Stack
              flex={1}
              alignItems="center"
              justifyContent="center"
              margin={getTokens().spacing['1']}
              space={getTokens().spacing['1']}
            >
              <Text
                color="$gray1"
                fontSize="$9"
                fontWeight="300"
                fontFamily="$body"
              >
                Tamagui
              </Text>
              <Text
                color="$gray1"
                fontSize="$9"
                fontWeight="400"
                fontFamily="$body"
              >
                Tamagui
              </Text>
              <Text
                color="$gray1"
                fontSize="$9"
                fontWeight="500"
                fontFamily="$body"
              >
                Tamagui
              </Text>
              <Text
                color="$gray1"
                fontSize="$9"
                fontWeight="600"
                fontFamily="$body"
              >
                Tamagui
              </Text>
              <Text
                color="$gray1"
                fontSize="$9"
                fontWeight="700"
                fontFamily="$body"
              >
                Tamagui
              </Text>
              <Text
                color="$gray1"
                fontSize="$3"
                lineHeight="$3"
                fontFamily="$body"
                letterSpacing={0.05}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus in augue arcu. Fusce at laoreet dui, sed volutpat
                ipsum. Proin lobortis purus arcu, eget bibendum mi laoreet non.
              </Text>
              <Button>Press ME</Button>
            </Stack>
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
