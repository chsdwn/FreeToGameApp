import React from 'react';
import { StyleSheet } from 'react-native';
import { Chip, Text } from 'react-native-paper';

import { useStyle, useTheme } from '@/hooks';

type IProps = {
  label: string;
  active?: boolean;
  onPress?: () => void;
  onClose?: () => void;
};
export const GamesFilterChip = ({
  label,
  active = false,
  onPress,
  onClose,
}: IProps) => {
  const theme = useTheme();

  return (
    <Chip
      mode={active ? 'flat' : 'outlined'}
      onPress={onPress}
      onClose={onClose}
      style={useStyle(
        () => [
          styles.chip,
          {
            borderColor: theme.colors.tertiary,
            marginBottom: theme.spacing[2],
            marginRight: theme.spacing[2],
          },
        ],
        [theme.colors.tertiary, theme.spacing],
      )}
    >
      <Text variant="labelMedium">{label}</Text>
    </Chip>
  );
};

const styles = StyleSheet.create({
  chip: {
    borderWidth: 1,
  },
});
