import React from 'react';
import { StyleSheet } from 'react-native';
import { Chip, Text, useTheme } from 'react-native-paper';

import { defaultTheme, Theme } from '@/config/theme';

type IProps = {
  label: string;
  active: boolean;
  onPress?: () => void;
  onClose?: () => void;
};
export const GamesFilterChip = ({
  label,
  active,
  onPress,
  onClose,
}: IProps) => {
  const theme = useTheme<Theme>();

  return (
    <Chip
      mode={active ? 'flat' : 'outlined'}
      onPress={onPress}
      onClose={onClose}
      style={[styles.chip, { borderColor: theme.colors.tertiary }]}
    >
      <Text variant="labelSmall">{label}</Text>
    </Chip>
  );
};

const styles = StyleSheet.create({
  chip: {
    marginBottom: defaultTheme.spacing[2],
    marginRight: defaultTheme.spacing[2],
    borderWidth: 1,
  },
});
