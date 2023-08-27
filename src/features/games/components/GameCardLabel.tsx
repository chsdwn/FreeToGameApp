import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useScale, useStyle } from 'react-native-responsive-scalability';

import { Icon, Text } from '@/components';
import { useTheme } from '@/hooks';

type IProps = {
  label: string;
  icon: string;
};
export const GameCardLabel = ({ label, icon }: IProps) => {
  const theme = useTheme();
  const { scaleByWidth } = useScale();

  return (
    <View
      style={useStyle(
        () => [styles.container, { marginTop: scaleByWidth(theme.spacing[1]) }],
        [theme.spacing, scaleByWidth],
      )}
    >
      <Icon
        name={icon}
        size={scaleByWidth(16)}
        color={theme.colors.tertiary}
        style={useStyle(
          () => ({ marginRight: scaleByWidth(theme.spacing[2]) }),
          [theme.spacing, scaleByWidth],
        )}
      />
      <Text variant="bodyMedium" numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
