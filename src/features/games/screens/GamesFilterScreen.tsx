import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Button, Surface, Text, useTheme } from 'react-native-paper';

import { Icon } from '@/components';
import { defaultTheme, Theme } from '@/config/theme';
import { categoryItems, platformItems, sortByItems } from '../config';
import { useGamesFilterStore } from '../store';
import { IGameCategory, IGamePlatform, IGameSortBy } from '../types';

export const GamesFilterScreen = () => {
  const theme = useTheme<Theme>();
  const navigation = useNavigation();
  const gamesFilterStore = useGamesFilterStore();

  const [platform, setPlatform] = useState<IGamePlatform | null>(
    gamesFilterStore.platform,
  );
  const [category, setCategory] = useState<IGameCategory | null>(
    gamesFilterStore.category,
  );
  const [sortBy, setSortBy] = useState<IGameSortBy | null>(
    gamesFilterStore.sortBy,
  );

  const handlePlatformChange = (newPlatform: IGamePlatform) => {
    setPlatform(newPlatform === platform ? null : newPlatform);
  };

  const handleCategoryChange = (newCategory: IGameCategory) => {
    setCategory(newCategory === category ? null : newCategory);
  };

  const handleSortByChange = (newSortBy: IGameSortBy) => {
    setSortBy(newSortBy === sortBy ? null : newSortBy);
  };

  const handleResetPress = () => {
    gamesFilterStore.resetGamesFilter();
    navigation.goBack();
  };

  const handleFilterPress = () => {
    gamesFilterStore.setPlatform(platform);
    gamesFilterStore.setCategory(category);
    gamesFilterStore.setSortBy(sortBy);
    navigation.goBack();
  };

  return (
    <Surface style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <Icon
            name="layers-triple"
            size={32}
            color={theme.colors.tertiary}
            style={styles.titleIcon}
          />
          <Text variant="bodySmall">Platform:</Text>
        </View>
        <View style={styles.filterBtnContainer}>
          {platformItems.map(({ label, value }) => (
            <Button
              key={`platformItem-${value}`}
              mode={platform === value ? 'contained' : 'outlined'}
              onPress={() => handlePlatformChange(value)}
              style={styles.filterBtn}
            >
              {label}
            </Button>
          ))}
        </View>
        <View style={styles.titleContainer}>
          <Icon
            name="shape"
            size={32}
            color={theme.colors.tertiary}
            style={styles.titleIcon}
          />
          <Text variant="bodySmall">Category:</Text>
        </View>
        <View style={styles.filterBtnContainer}>
          {categoryItems.map(({ label, value }) => (
            <Button
              key={`categoryItem-${value}`}
              mode={category === value ? 'contained' : 'outlined'}
              onPress={() => handleCategoryChange(value)}
              style={styles.filterBtn}
            >
              {label}
            </Button>
          ))}
        </View>
        <View style={styles.titleContainer}>
          <Icon
            name="sort"
            size={32}
            color={theme.colors.tertiary}
            style={styles.titleIcon}
          />
          <Text variant="bodySmall">Sort by:</Text>
        </View>
        <View style={styles.filterBtnContainer}>
          {sortByItems.map(({ label, value }) => (
            <Button
              key={`sortByItem-${value}`}
              mode={sortBy === value ? 'contained' : 'outlined'}
              onPress={() => handleSortByChange(value)}
              style={styles.filterBtn}
            >
              {label}
            </Button>
          ))}
        </View>
        <View style={styles.actionButtonsContainer}>
          <Button
            icon="close"
            textColor={theme.colors.tertiary}
            onPress={handleResetPress}
            style={styles.closeButton}
          >
            Clear
          </Button>
          <Button mode="contained" icon="magnify" onPress={handleFilterPress}>
            Filter
          </Button>
        </View>
      </ScrollView>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: defaultTheme.spacing[3],
    height: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: defaultTheme.spacing[3],
  },
  titleIcon: {
    marginRight: defaultTheme.spacing[1],
  },
  filterBtnContainer: {
    marginTop: defaultTheme.spacing[2],
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filterBtn: {
    marginBottom: defaultTheme.spacing[2],
    marginRight: defaultTheme.spacing[2],
    flexGrow: 1,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: defaultTheme.spacing[5],
  },
  closeButton: {
    marginRight: defaultTheme.spacing[2],
  },
});
