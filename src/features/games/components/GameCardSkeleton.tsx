import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Surface } from 'react-native-paper';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { useScale, useStyle, useTheme } from '@/hooks';

export const GameCardSkeleton = () => {
  const theme = useTheme();
  const { scaleByWidth } = useScale();

  return (
    <Surface
      elevation={3}
      style={useStyle(
        () => [
          styles.container,
          { backgroundColor: theme.colors.surface, margin: theme.spacing[2] },
        ],
        [theme.colors.surface, theme.spacing],
      )}
    >
      <SkeletonPlaceholder
        borderRadius={4}
        backgroundColor={theme.colors.onSurfaceDisabled}
      >
        <View
          style={useStyle(() => ({ height: scaleByWidth(60) }), [scaleByWidth])}
        />
      </SkeletonPlaceholder>
      <SkeletonPlaceholder
        borderRadius={4}
        backgroundColor={theme.colors.onSurfaceDisabled}
      >
        <SkeletonPlaceholder.Item alignItems="center">
          <SkeletonPlaceholder.Item
            width="50%"
            height={scaleByWidth(7)}
            marginTop={scaleByWidth(4)}
          />
          <SkeletonPlaceholder.Item
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
            width="100%"
            marginTop={scaleByWidth(4)}
            paddingBottom={scaleByWidth(4)}
          >
            <SkeletonPlaceholder.Item flexDirection="row" width="30%">
              <SkeletonPlaceholder.Item
                width={scaleByWidth(5.5)}
                height={scaleByWidth(5.5)}
                borderRadius={30}
                marginRight={4}
              />
              <SkeletonPlaceholder.Item width="70%" height={scaleByWidth(5)} />
            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item flexDirection="row" width="30%">
              <SkeletonPlaceholder.Item
                width={scaleByWidth(5.5)}
                height={scaleByWidth(5.5)}
                borderRadius={30}
                marginRight={4}
              />
              <SkeletonPlaceholder.Item width="70%" height={scaleByWidth(5)} />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
  },
});
