import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GamesScreen } from '@/features/games/screens';

import type { HomeStackParamList } from '@/types';

const Stack = createNativeStackNavigator<HomeStackParamList>();
export const HomeRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Games" component={GamesScreen} />
    </Stack.Navigator>
  );
};
