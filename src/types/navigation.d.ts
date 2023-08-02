import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackParamList = {
  Games: undefined;
  GamesFilter: undefined;
};

export type HomeStackNavigationProp =
  NativeStackNavigationProp<HomeStackParamList>;
