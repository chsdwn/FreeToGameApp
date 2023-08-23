import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { Icon } from '@/components';
import { useScale, useStyle, useTheme } from '@/hooks';
import { GamesFilterChip } from './GamesFilterChip';

type IProps<T> = {
  title: string;
  icon: string;
  activeOption: T | null;
  optionItems: { label: string; value: T }[];
  onOptionChange: (option: T) => void;
};
export const GamesFilterOptions = <T,>({
  title,
  icon,
  activeOption,
  optionItems,
  onOptionChange,
}: IProps<T>) => {
  const theme = useTheme();
  const { scaleByWidth } = useScale();

  return (
    <>
      <View
        style={useStyle(
          () => [styles.titleContainer, { marginTop: theme.spacing[3] }],
          [theme.spacing],
        )}
      >
        <Icon
          name={icon}
          size={scaleByWidth(16)}
          color={theme.colors.tertiary}
          style={useStyle(
            () => ({ marginRight: theme.spacing[1] }),
            [theme.spacing],
          )}
        />
        <Text variant="labelLarge">{title}</Text>
      </View>
      <View
        style={useStyle(
          () => [styles.filterBtnContainer, { marginTop: theme.spacing[2] }],
          [theme.spacing],
        )}
      >
        {optionItems.map(({ label, value }) => (
          <GamesFilterChip
            key={`games-filter-option-${label}-${value}`}
            label={label}
            active={activeOption === value}
            onPress={() => onOptionChange(value)}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterBtnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
