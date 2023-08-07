import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Button, Surface, Text, useTheme } from 'react-native-paper';

import { Icon } from '@/components';
import { defaultTheme, Theme } from '@/config/theme';
import { scaleSizeByWidth } from '@/utils';
import { GamesFilterChip } from '../components';
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
    <Surface style={styles.root}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleContainer}>
            <Icon
              name="layers-triple"
              size={scaleSizeByWidth(5.5)}
              color={theme.colors.tertiary}
              style={[styles.titleIcon]}
            />
            <Text variant="labelLarge">Platform:</Text>
          </View>
          <View style={styles.filterBtnContainer}>
            {platformItems.map(({ label, value }) => (
              <GamesFilterChip
                key={`platformItem-${value}`}
                label={label}
                active={platform === value}
                onPress={() => handlePlatformChange(value)}
              />
            ))}
          </View>

          <View style={styles.titleContainer}>
            <Icon
              name="shape"
              size={scaleSizeByWidth(5.5)}
              color={theme.colors.tertiary}
              style={styles.titleIcon}
            />
            <Text variant="labelLarge">Category:</Text>
          </View>
          <View style={styles.filterBtnContainer}>
            {categoryItems.map(({ label, value }) => (
              <GamesFilterChip
                key={`categoryItem-${value}`}
                label={label}
                active={category === value}
                onPress={() => handleCategoryChange(value)}
              />
            ))}
          </View>

          <View style={styles.titleContainer}>
            <Icon
              name="sort"
              size={scaleSizeByWidth(5.5)}
              color={theme.colors.tertiary}
              style={styles.titleIcon}
            />
            <Text variant="labelLarge">Sort by:</Text>
          </View>
          <View style={styles.filterBtnContainer}>
            {sortByItems.map(({ label, value }) => (
              <GamesFilterChip
                key={`sortByItem-${value}`}
                label={label}
                active={sortBy === value}
                onPress={() => handleSortByChange(value)}
              />
            ))}
          </View>
        </ScrollView>

        <View style={styles.actionButtonsContainer}>
          <Button
            icon="close"
            textColor={theme.colors.tertiary}
            onPress={handleResetPress}
            mode="outlined"
            style={styles.actionButton}
          >
            Clear
          </Button>
          <View style={styles.actionButtonSeperator} />
          <Button
            mode="contained"
            icon="magnify"
            onPress={handleFilterPress}
            style={styles.actionButton}
          >
            Filter
          </Button>
        </View>
      </SafeAreaView>
    </Surface>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
  },
  container: {
    flex: 1,
    margin: defaultTheme.spacing[3],
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
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: defaultTheme.spacing[3],
  },
  actionButton: {
    flex: 1,
  },
  actionButtonSeperator: {
    width: defaultTheme.spacing[4],
  },
});
