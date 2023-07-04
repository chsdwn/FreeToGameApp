import React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { HomeStackParamList } from '@/types';

const GamesScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <Text style={{ textAlign: 'center', fontSize: 36 }}>Games</Text>
  </View>
);

const Stack = createNativeStackNavigator<HomeStackParamList>();
export const HomeRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Games" component={GamesScreen} />
    </Stack.Navigator>
  );
};
