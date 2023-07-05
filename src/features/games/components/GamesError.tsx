import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { isAxiosError } from 'axios';
import { Button, Surface, Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import type { FallbackComponentProps } from 'react-native-error-boundary';
export const GamesError = ({ error, resetError }: FallbackComponentProps) => {
  const theme = useTheme();

  let errorMessage = 'An error occured.';
  if (isAxiosError(error)) {
    const status = error.response?.status;
    if (status === 404) {
      errorMessage = "The game you're looking for not found.";
    } else if (status === 500) {
      errorMessage = 'Our servers not responding right now. Try again later.';
    } else if (error.message === 'Network Error') {
      errorMessage =
        'No internet connection. Connect to a network an try again.';
    }
  }

  return (
    <SafeAreaView style={styles.root}>
      <Surface mode="flat" style={styles.container}>
        <Icon
          name="close-circle-outline"
          size={wp(32)}
          color={theme.colors.error}
        />
        <Text variant="bodyLarge" style={styles.message}>
          {errorMessage}
        </Text>
        <Button onPress={resetError} mode="outlined" style={styles.button}>
          Try Again
        </Button>
      </Surface>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
  },
  button: {
    marginTop: wp(4),
  },
});
