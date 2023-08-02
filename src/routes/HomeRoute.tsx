import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GamesFilterScreen, GamesScreen } from '@/features/games/screens';

import type { HomeStackParamList } from '@/types';

const Stack = createNativeStackNavigator<HomeStackParamList>();
export const HomeRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Games" component={GamesScreen} />
      <Stack.Screen
        name="GamesFilter"
        component={GamesFilterScreen}
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
};
