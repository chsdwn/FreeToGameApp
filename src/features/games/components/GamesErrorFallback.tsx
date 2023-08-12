import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { isAxiosError } from 'axios';
import { Button, Surface, Text } from 'react-native-paper';
import { FallbackComponentProps } from 'react-native-error-boundary';

import { Icon } from '@/components';
import { useScale, useStyle, useTheme } from '@/hooks';

export const GamesErrorFallback = ({
  error,
  resetError,
}: FallbackComponentProps) => {
  const theme = useTheme();
  const { scaleByWidth } = useScale();

  let errorMessage = 'An error occured while fetching games.';
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
      <Surface
        mode="flat"
        style={useStyle(
          () => [styles.container, { margin: theme.spacing[3] }],
          [theme.spacing],
        )}
      >
        <Icon
          name="alert-circle-outline"
          size={scaleByWidth(36)}
          color={theme.colors.error}
        />
        <Text variant="bodyLarge" style={styles.message}>
          {errorMessage}
        </Text>
        <Button
          onPress={resetError}
          mode="outlined"
          style={useStyle(
            () => ({ marginTop: theme.spacing[4] }),
            [theme.spacing],
          )}
        >
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
});
