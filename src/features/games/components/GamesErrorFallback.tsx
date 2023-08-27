import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { isAxiosError } from 'axios';
import { Button, Surface } from 'react-native-paper';
import { useScale, useStyle } from 'react-native-responsive-scalability';
import { FallbackComponentProps } from 'react-native-error-boundary';

import { Icon, Text } from '@/components';
import { useTheme } from '@/hooks';

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
          () => [styles.container, { margin: scaleByWidth(theme.spacing[3]) }],
          [theme.spacing, scaleByWidth],
        )}
      >
        <Icon
          name="alert-circle-outline"
          size={scaleByWidth(128)}
          color={theme.colors.error}
        />
        <Text variant="displayMedium" style={styles.message}>
          {errorMessage}
        </Text>
        <Button
          onPress={resetError}
          mode="outlined"
          style={useStyle(
            () => ({ marginTop: scaleByWidth(theme.spacing[4]) }),
            [theme.spacing, scaleByWidth],
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
