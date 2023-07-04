import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

import type { IGame } from '../types';

type IProps = {
  game: IGame;
};
export const GameCard = ({ game }: IProps) => {
  return (
    <Card style={styles.card}>
      <Image
        source={{ uri: game.thumbnail }}
        style={styles.img}
        resizeMode="contain"
      />
      <Card.Title
        title={game.title}
        subtitle={`${game.genre}, ${game.platform}`}
        titleVariant="titleMedium"
        subtitleVariant="bodyMedium"
        titleStyle={styles.title}
        subtitleStyle={styles.subtitle}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
  },
  img: {
    aspectRatio: 1.77,
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
  },
});
