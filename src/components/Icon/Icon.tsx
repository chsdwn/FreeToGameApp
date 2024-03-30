/* eslint-disable no-restricted-imports */
import MCIcon from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';

export type IconName = React.ComponentProps<typeof MCIcon>['name'];
export type IconProps = object & React.ComponentProps<typeof MCIcon>;
export const Icon = (props: IconProps) => {
  return <MCIcon {...props} />;
};
