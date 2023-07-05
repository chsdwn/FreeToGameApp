import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useTheme } from 'react-native-paper';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import type { Dispatch, SetStateAction } from 'react';
import type { ValueType } from 'react-native-dropdown-picker';

type IProps<T extends ValueType | null> = {
  defaultItems: { label: string; value: T }[];
  open: boolean;
  value: T | null;
  zIndex: number;
  zIndexInverse: number;
  placeholder?: string;
  onOpen: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setValue: Dispatch<SetStateAction<T>> | Dispatch<SetStateAction<T | null>>;
};
export const GamesFilterDropDown = <T extends ValueType>({
  defaultItems,
  open,
  value,
  zIndex,
  zIndexInverse,
  placeholder,
  onOpen,
  setOpen,
  setValue,
}: IProps<T>) => {
  const theme = useTheme();

  const [items, setItems] = useState(defaultItems);

  return (
    <DropDownPicker
      placeholder={placeholder}
      open={open}
      onOpen={onOpen}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      disableBorderRadius
      style={styles.dropdown}
      dropDownContainerStyle={styles.dropdownContainer}
      placeholderStyle={{ color: theme.colors.backdrop }}
      zIndex={zIndex}
      zIndexInverse={zIndexInverse}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    borderRadius: 0,
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: wp(2),
  },
  dropdownContainer: {
    borderRadius: 0,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
