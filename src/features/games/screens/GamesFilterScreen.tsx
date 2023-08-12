import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Button, Surface } from 'react-native-paper';

import { useStyle, useTheme } from '@/hooks';
import { GamesFilterOptions } from '../components';
import { categoryItems, platformItems, sortByItems } from '../config';
import { useGamesFilterStore } from '../store';
import { IGameCategory, IGamePlatform, IGameSortBy } from '../types';

export const GamesFilterScreen = () => {
  const theme = useTheme();
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
      <SafeAreaView
        style={useStyle(
          () => [styles.container, { margin: theme.spacing[3] }],
          [theme.spacing],
        )}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <GamesFilterOptions
            title="Platform:"
            icon="layers-triple"
            activeOption={platform}
            optionItems={platformItems}
            onOptionChange={handlePlatformChange}
          />
          <GamesFilterOptions
            title="Category:"
            icon="shape"
            activeOption={category}
            optionItems={categoryItems}
            onOptionChange={handleCategoryChange}
          />
          <GamesFilterOptions
            title="Sort by:"
            icon="sort"
            activeOption={sortBy}
            optionItems={sortByItems}
            onOptionChange={handleSortByChange}
          />
        </ScrollView>

        <View
          style={useStyle(
            () => [
              styles.actionButtonsContainer,
              { marginTop: theme.spacing[3] },
            ],
            [theme.spacing],
          )}
        >
          <Button
            icon="close"
            textColor={theme.colors.tertiary}
            onPress={handleResetPress}
            mode="outlined"
            style={styles.actionButton}
          >
            Clear
          </Button>
          <View
            style={useStyle(
              () => ({ width: theme.spacing[4] }),
              [theme.spacing],
            )}
          />
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
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  actionButton: {
    flex: 1,
  },
});
