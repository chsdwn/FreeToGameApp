import React from 'react';
import { View } from 'react-native';

import { GamesList, GamesListHeader } from '../components';

export const GamesScreen = () => {
  return (
    <View>
      <GamesListHeader />
      <GamesList />
    </View>
  );
};
