import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { Icon } from '@/components';
import { useScale, useStyle, useTheme } from '@/hooks';

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
        () => [styles.container, { marginTop: theme.spacing[1] }],
        [theme.spacing],
      )}
    >
      <Icon
        name={icon}
        size={scaleByWidth(6.5)}
        color={theme.colors.tertiary}
        style={useStyle(
          () => ({ marginRight: theme.spacing[2] }),
          [theme.spacing],
        )}
      />
      <Text variant="labelLarge">{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
