import React from 'react';
import { View } from 'react-native';
import { useScale, useStyle } from 'react-native-responsive-scalability';

import { Chip } from '@/components';
import { useTheme } from '@/hooks';

type IProps = {
  label: string;
  active: boolean;
  onPress: () => void;
};
export const GamesFilterChip = ({ label, active = false, onPress }: IProps) => {
  const theme = useTheme();
  const { scaleByWidth } = useScale();

  return (
    <View
      style={useStyle(
        () => ({
          marginBottom: scaleByWidth(theme.spacing[2]),
          marginRight: scaleByWidth(theme.spacing[2]),
        }),
        [theme.spacing, scaleByWidth],
      )}
    >
      <Chip active={active} label={label} onPress={onPress} />
    </View>
  );
};
