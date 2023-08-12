import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { GamesFilterScreen, GamesScreen } from '@/features/games/screens';
import { HomeStackParamList } from '@/types';

const screenOptions: NativeStackNavigationOptions = { headerShown: false };
const gamesFilterScreenOptions: NativeStackNavigationOptions = {
  presentation: 'modal',
};

const Stack = createNativeStackNavigator<HomeStackParamList>();
export const HomeRoute = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Games" component={GamesScreen} />
      <Stack.Screen
        name="GamesFilter"
        component={GamesFilterScreen}
        options={gamesFilterScreenOptions}
      />
    </Stack.Navigator>
  );
};
