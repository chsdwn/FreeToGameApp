import {
  NavigationContainerRef,
  ParamListBase,
  StaticParamList,
  createStaticNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useRef } from 'react';

import { GamesFilterScreen, GamesScreen } from '@/features/games/screens';
import { navigationIntegration } from '@/lib';

const RootStack = createNativeStackNavigator({
  screens: {
    Games: {
      screen: GamesScreen,
    },
    GamesFilter: {
      screen: GamesFilterScreen,
      options: {
        presentation: 'modal',
      },
    },
  },
  screenOptions: {
    headerShown: false,
  },
});

const Navigation = createStaticNavigation(RootStack);

export type RootStackParamList = StaticParamList<typeof RootStack>;

export const HomeRoute = () => {
  const ref = useRef<NavigationContainerRef<ParamListBase>>(null);

  const handleReady = () => {
    navigationIntegration.registerNavigationContainer(ref);
  };

  return <Navigation ref={ref} onReady={handleReady} />;
};
