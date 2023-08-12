import React from 'react';
import { View } from 'react-native';

import { Chip } from '@/components';
import { useStyle, useTheme } from '@/hooks';

type IProps = {
  label: string;
  active: boolean;
  onPress: () => void;
};
export const GamesFilterChip = ({ label, active = false, onPress }: IProps) => {
  const theme = useTheme();

  return (
    <View
      style={useStyle(
        () => ({
          marginBottom: theme.spacing[2],
          marginRight: theme.spacing[2],
        }),
        [theme.spacing],
      )}
    >
      <Chip active={active} label={label} onPress={onPress} />
    </View>
  );
};
