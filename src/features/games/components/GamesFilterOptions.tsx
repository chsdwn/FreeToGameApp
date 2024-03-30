import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useScale, useStyle } from 'react-native-responsive-scalability';

import { GamesFilterChip } from './GamesFilterChip';

import { Icon, Text } from '@/components';
import { IconName } from '@/components/Icon';
import { useTheme } from '@/hooks';

type IProps<T> = {
  title: string;
  icon: IconName;
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
          () => [
            styles.titleContainer,
            { marginTop: scaleByWidth(theme.spacing[3]) },
          ],
          [theme.spacing, scaleByWidth],
        )}
      >
        <Icon
          name={icon}
          size={scaleByWidth(16)}
          color={theme.colors.tertiary}
          style={useStyle(
            () => ({ marginRight: scaleByWidth(theme.spacing[1]) }),
            [theme.spacing, scaleByWidth],
          )}
        />
        <Text variant="bodyMedium">{title}</Text>
      </View>
      <View
        style={useStyle(
          () => [
            styles.filterBtnContainer,
            { marginTop: scaleByWidth(theme.spacing[2]) },
          ],
          [theme.spacing, scaleByWidth],
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
