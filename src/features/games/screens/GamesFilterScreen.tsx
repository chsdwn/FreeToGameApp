import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Button, Surface, Text } from 'react-native-paper';

import { Icon } from '@/components';
import { useScale, useTheme } from '@/hooks';
import { GamesFilterChip } from '../components';
import { categoryItems, platformItems, sortByItems } from '../config';
import { useGamesFilterStore } from '../store';
import { IGameCategory, IGamePlatform, IGameSortBy } from '../types';

export const GamesFilterScreen = () => {
  const theme = useTheme();
  const { scaleByWidth } = useScale();
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
      <SafeAreaView style={[styles.container, { margin: theme.spacing[3] }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={[styles.titleContainer, { marginTop: theme.spacing[3] }]}
          >
            <Icon
              name="layers-triple"
              size={scaleByWidth(6.5)}
              color={theme.colors.tertiary}
              style={{ marginRight: theme.spacing[1] }}
            />
            <Text variant="labelLarge">Platform:</Text>
          </View>
          <View
            style={[styles.filterBtnContainer, { marginTop: theme.spacing[2] }]}
          >
            {platformItems.map(({ label, value }) => (
              <GamesFilterChip
                key={`platformItem-${value}`}
                label={label}
                active={platform === value}
                onPress={() => handlePlatformChange(value)}
              />
            ))}
          </View>

          <View
            style={[styles.titleContainer, { marginTop: theme.spacing[3] }]}
          >
            <Icon
              name="shape"
              size={scaleByWidth(6.5)}
              color={theme.colors.tertiary}
              style={{ marginRight: theme.spacing[1] }}
            />
            <Text variant="labelLarge">Category:</Text>
          </View>
          <View
            style={[styles.filterBtnContainer, { marginTop: theme.spacing[2] }]}
          >
            {categoryItems.map(({ label, value }) => (
              <GamesFilterChip
                key={`categoryItem-${value}`}
                label={label}
                active={category === value}
                onPress={() => handleCategoryChange(value)}
              />
            ))}
          </View>

          <View
            style={[styles.titleContainer, { marginTop: theme.spacing[3] }]}
          >
            <Icon
              name="sort"
              size={scaleByWidth(6.5)}
              color={theme.colors.tertiary}
              style={{ marginRight: theme.spacing[1] }}
            />
            <Text variant="labelLarge">Sort by:</Text>
          </View>
          <View
            style={[styles.filterBtnContainer, { marginTop: theme.spacing[2] }]}
          >
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

        <View
          style={[
            styles.actionButtonsContainer,
            { marginTop: theme.spacing[3] },
          ]}
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
          <View style={{ width: theme.spacing[4] }} />
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
  titleContainer: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  filterBtnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  actionButton: {
    flex: 1,
  },
});
