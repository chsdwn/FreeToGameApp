import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Surface, useTheme } from 'react-native-paper';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { scaleSizeByWidth } from '@/utils';

export const GameCardSkeleton = () => {
  const theme = useTheme();

  return (
    <Surface
      elevation={3}
      style={[styles.container, { backgroundColor: theme.colors.surface }]}
    >
      <SkeletonPlaceholder
        borderRadius={4}
        backgroundColor={theme.colors.onSurfaceDisabled}
      >
        <View style={styles.image} />
      </SkeletonPlaceholder>
      <SkeletonPlaceholder
        borderRadius={4}
        backgroundColor={theme.colors.onSurfaceDisabled}
      >
        <SkeletonPlaceholder.Item alignItems="center">
          <SkeletonPlaceholder.Item
            width="50%"
            height={scaleSizeByWidth(7)}
            marginTop={scaleSizeByWidth(4)}
          />
          <SkeletonPlaceholder.Item
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
            width="100%"
            marginTop={scaleSizeByWidth(4)}
            paddingBottom={scaleSizeByWidth(4)}
          >
            <SkeletonPlaceholder.Item flexDirection="row" width="30%">
              <SkeletonPlaceholder.Item
                width={scaleSizeByWidth(5.5)}
                height={scaleSizeByWidth(5.5)}
                borderRadius={30}
                marginRight={4}
              />
              <SkeletonPlaceholder.Item
                width="70%"
                height={scaleSizeByWidth(5)}
              />
            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item flexDirection="row" width="30%">
              <SkeletonPlaceholder.Item
                width={scaleSizeByWidth(5.5)}
                height={scaleSizeByWidth(5.5)}
                borderRadius={30}
                marginRight={4}
              />
              <SkeletonPlaceholder.Item
                width="70%"
                height={scaleSizeByWidth(5)}
              />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 8,
  },
  image: {
    height: scaleSizeByWidth(50),
  },
});
