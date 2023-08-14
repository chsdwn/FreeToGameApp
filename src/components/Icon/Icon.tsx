/* eslint-disable no-restricted-imports */
import React from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconProps as DefaultIconProps } from 'react-native-vector-icons/Icon';

export type IconProps = {} & DefaultIconProps;
export const Icon = (props: IconProps) => {
  return <MCIcon {...props} />;
};
