import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Surface } from 'react-native-paper';
import { useScale, useStyle } from 'react-native-responsive-scalability';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

import { useTheme } from '@/hooks';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export const GameCardSkeleton = () => {
  const theme = useTheme();
  const { scaleByWidth } = useScale();

  return (
    <Surface
      elevation={3}
      style={useStyle(
        () => [
          styles.container,
          {
            backgroundColor: theme.colors.surface,
            margin: scaleByWidth(theme.spacing[2]),
          },
        ],
        [theme.colors.surface, theme.spacing, scaleByWidth],
      )}
    >
      <ShimmerPlaceholder
        style={[
          styles.image,
          { backgroundColor: theme.colors.onSurfaceDisabled },
        ]}
        height={200}
      />
      <ShimmerPlaceholder height={16} style={styles.title} />
      <View style={styles.section}>
        <ShimmerPlaceholder height={14} style={styles.subtitle} />
        <ShimmerPlaceholder height={14} style={styles.subtitle} />
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    alignItems: 'center',
    paddingBottom: 16,
  },
  image: {
    borderRadius: 4,
    width: '100%',
  },
  title: {
    marginTop: 16,
    width: '30%',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    gap: 24,
  },
  subtitle: {
    width: '35%',
  },
});
