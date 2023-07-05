import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Button,
  Divider,
  Modal,
  Portal,
  Surface,
  Text,
  useTheme,
} from 'react-native-paper';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { GamesFilterDropDown } from '.';
import {
  defaultCategoryItems,
  defaultPlatformItems,
  defaultSortByItems,
} from '../config';
import { useGamesFilterModalStore, useGamesFilterStore } from '../store';

import type { IGameCategory, IGamePlatform, IGameSortBy } from '../types';

export const GamesFilterModal = () => {
  const theme = useTheme();

  const { setPlatform, setCategory, setSortBy, resetGamesFilter } =
    useGamesFilterStore();
  const { visible, hide } = useGamesFilterModalStore();

  const [platformOpen, setPlatformOpen] = useState(false);
  const [platformValue, setPlatformValue] = useState<IGamePlatform>('all');
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [categoryValue, setCategoryValue] = useState<IGameCategory | null>(
    null,
  );
  const [sortByOpen, setSortByOpen] = useState(false);
  const [sortByValue, setSortByValue] = useState<IGameSortBy | null>(null);

  const handlePlatformOpen = () => {
    setCategoryOpen(false);
    setSortByOpen(false);
  };

  const handleCategoryOpen = () => {
    setPlatformOpen(false);
    setSortByOpen(false);
  };

  const handleSortByOpen = () => {
    setPlatformOpen(false);
    setCategoryOpen(false);
  };

  const handleClear = () => {
    setPlatformValue('all');
    setCategoryValue(null);
    setSortByValue(null);

    resetGamesFilter();
    hide();
  };

  const handleSearch = () => {
    setPlatform(platformValue);
    setCategory(categoryValue);
    setSortBy(sortByValue);
    hide();
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        contentContainerStyle={styles.modalContent}
        onDismiss={hide}
      >
        <Surface mode="flat" style={styles.surface}>
          <View>
            <Text variant="headlineMedium">Filter Games</Text>
            <Divider style={styles.divider} />

            <Text variant="bodyMedium">Platform:</Text>
            <GamesFilterDropDown
              defaultItems={defaultPlatformItems}
              open={platformOpen}
              value={platformValue}
              zIndex={3000}
              zIndexInverse={1000}
              onOpen={handlePlatformOpen}
              setOpen={setPlatformOpen}
              setValue={setPlatformValue}
            />

            <Text variant="bodyMedium">Category:</Text>
            <GamesFilterDropDown
              defaultItems={defaultCategoryItems}
              open={categoryOpen}
              value={categoryValue}
              zIndex={2000}
              zIndexInverse={2000}
              placeholder="Select category..."
              onOpen={handleCategoryOpen}
              setOpen={setCategoryOpen}
              setValue={setCategoryValue}
            />

            <Text variant="bodyMedium">Sort by:</Text>
            <GamesFilterDropDown
              defaultItems={defaultSortByItems}
              open={sortByOpen}
              value={sortByValue}
              zIndex={1000}
              zIndexInverse={3000}
              placeholder="Select sort by..."
              onOpen={handleSortByOpen}
              setOpen={setSortByOpen}
              setValue={setSortByValue}
            />
          </View>

          <View style={styles.actionsContainer}>
            <Button
              icon="delete-outline"
              textColor={theme.colors.error}
              onPress={handleClear}
            >
              Clear
            </Button>
            <Button icon="magnify" onPress={handleSearch}>
              Filter
            </Button>
          </View>
        </Surface>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    padding: wp(5),
    height: '90%',
  },
  surface: {
    padding: wp(5),
    height: '100%',
    justifyContent: 'space-between',
  },
  divider: {
    marginBottom: wp(2),
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
