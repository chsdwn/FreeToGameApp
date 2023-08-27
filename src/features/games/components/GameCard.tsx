import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';
import { Image } from 'expo-image';
import { useScale, useStyle } from 'react-native-responsive-scalability';

import { Text } from '@/components';
import { roundness } from '@/config/theme';
import { useTheme } from '@/hooks';
import { IGame } from '../types';
import { GameCardLabel } from './GameCardLabel';

const imagePlaceholder = require('../../../../assets/images/placeholder.png');

type IProps = {
  game: IGame;
};
export const GameCard = React.memo(({ game }: IProps) => {
  const theme = useTheme();
  const { scaleByWidth } = useScale();

  return (
    <Card
      elevation={3}
      style={useStyle(
        () => [
          styles.card,
          {
            backgroundColor: theme.colors.surface,
            margin: scaleByWidth(theme.spacing[2]),
          },
        ],
        [theme.colors.surface, theme.spacing, scaleByWidth],
      )}
    >
      <Image
        source={game.thumbnail}
        style={styles.img}
        contentFit="contain"
        placeholder={imagePlaceholder}
        placeholderContentFit="cover"
        recyclingKey={`game-thumbnail-${game.id}`}
      />
      <View
        style={useStyle(
          () => ({ marginHorizontal: scaleByWidth(theme.spacing[2]) }),
          [theme.spacing, scaleByWidth],
        )}
      >
        <Text
          variant="headlineSmall"
          style={useStyle(
            () => [
              styles.title,
              { paddingVertical: scaleByWidth(theme.spacing[2]) },
            ],
            [theme.spacing, scaleByWidth],
          )}
        >
          {game.title}
        </Text>
        <View
          style={useStyle(
            () => [
              styles.platformGenreContainer,
              {
                marginBottom: scaleByWidth(theme.spacing[3]),
                marginHorizontal: scaleByWidth(theme.spacing[4]),
              },
            ],
            [theme.spacing, scaleByWidth],
          )}
        >
          <GameCardLabel label={game.platform} icon="layers-triple" />
          <GameCardLabel label={game.genre} icon="shape" />
        </View>
      </View>
    </Card>
  );
});

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  img: {
    aspectRatio: 365 / 206,
    borderRadius: roundness * 2,
  },
  title: {
    textAlign: 'center',
  },
  platformGenreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
});
