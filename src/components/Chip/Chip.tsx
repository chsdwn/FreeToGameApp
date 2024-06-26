import React from 'react';
import { StyleSheet } from 'react-native';
import { Chip as PaperChip } from 'react-native-paper';
import { useStyle } from 'react-native-responsive-scalability';

import { Text } from '../Text';

import { useTheme } from '@/hooks';

export type ChipProps = {
  label: string;
  active?: boolean;
  onPress?: () => void;
};
export const Chip = ({ label, active = false, onPress }: ChipProps) => {
  const theme = useTheme();

  return (
    <PaperChip
      mode={active ? 'flat' : 'outlined'}
      onPress={onPress}
      style={useStyle(
        () => [styles.chip, { borderColor: theme.colors.tertiary }],
        [theme.colors.tertiary],
      )}
    >
      <Text variant="labelLarge">{label}</Text>
    </PaperChip>
  );
};

const styles = StyleSheet.create({
  chip: {
    borderWidth: 1,
  },
});
