import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
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

import {
  defaultCategoryItems,
  defaultPlatformItems,
  defaultSortByItems,
} from '../config';
import { useGamesFilterModalStore, useGamesFilterStore } from '../store';

import type { IGameCategory, IGamePlatform, IGameSortBy } from '../types';

type IPlatformItems = { label: string; value: IGamePlatform }[];
type ICategoryItems = { label: string; value: IGameCategory }[];
type ISortByItems = { label: string; value: IGameSortBy }[];

export const GamesFilterModal = () => {
  const theme = useTheme();

  const { setPlatform, setCategory, setSortBy } = useGamesFilterStore();
  const { visible, hide } = useGamesFilterModalStore();

  const [platformOpen, setPlatformOpen] = useState(false);
  const [platformValue, setPlatformValue] = useState<IGamePlatform>('all');
  const [platformItems, setPlatformItems] =
    useState<IPlatformItems>(defaultPlatformItems);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [categoryValue, setCategoryValue] = useState<IGameCategory | null>(
    null,
  );
  const [categoryItems, setCategoryItems] =
    useState<ICategoryItems>(defaultCategoryItems);
  const [sortByOpen, setSortByOpen] = useState(false);
  const [sortByValue, setSortByValue] = useState<IGameSortBy | null>(null);
  const [sortByItems, setSortByItems] =
    useState<ISortByItems>(defaultSortByItems);

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
    setPlatform('all');
    setCategory(null);
    setSortBy(null);
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
            <DropDownPicker
              open={platformOpen}
              onOpen={handlePlatformOpen}
              value={platformValue}
              items={platformItems}
              setOpen={setPlatformOpen}
              setValue={setPlatformValue}
              setItems={setPlatformItems}
              disableBorderRadius
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownContainer}
              zIndex={3000}
              zIndexInverse={1000}
            />

            <Text variant="bodyMedium">Category:</Text>
            <DropDownPicker
              placeholder="Select category..."
              open={categoryOpen}
              onOpen={handleCategoryOpen}
              value={categoryValue}
              items={categoryItems}
              setOpen={setCategoryOpen}
              setValue={setCategoryValue}
              setItems={setCategoryItems}
              disableBorderRadius
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownContainer}
              placeholderStyle={{ color: theme.colors.backdrop }}
              zIndex={2000}
              zIndexInverse={2000}
            />

            <Text variant="bodyMedium">Sort by:</Text>
            <DropDownPicker
              placeholder="Select sort by..."
              open={sortByOpen}
              onOpen={handleSortByOpen}
              value={sortByValue}
              items={sortByItems}
              setOpen={setSortByOpen}
              setValue={setSortByValue}
              setItems={setSortByItems}
              disableBorderRadius
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownContainer}
              placeholderStyle={{ color: theme.colors.backdrop }}
              zIndex={1000}
              zIndexInverse={3000}
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
  dropdown: {
    borderRadius: 0,
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: wp(2),
  },
  dropdownContainer: {
    borderRadius: 0,
    borderWidth: StyleSheet.hairlineWidth,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
