import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { Image } from 'expo-image';

import { Icon } from '@/components';
import { roundness } from '@/config/theme';
import { useScale, useTheme } from '@/hooks';
import type { IGame } from '../types';

const imagePlaceholder =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[f' +
  'QayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ay' +
  'ayj[ayfjj[j[ayjuayj[';

type IProps = {
  game: IGame;
};
export const GameCard = React.memo(({ game }: IProps) => {
  const theme = useTheme();
  const { scaleByWidth } = useScale();

  return (
    <Card
      elevation={3}
      style={[styles.card, { backgroundColor: theme.colors.surface }]}
    >
      <Image
        source={game.thumbnail}
        style={styles.img}
        contentFit="contain"
        placeholder={imagePlaceholder}
        recyclingKey={`game-thumbnail-${game.id}`}
      />
      <Text
        variant="titleLarge"
        style={[styles.title, { paddingVertical: theme.spacing[2] }]}
      >
        {game.title}
      </Text>
      <View
        style={[
          styles.platformGenreContainer,
          {
            marginBottom: theme.spacing[3],
            marginHorizontal: theme.spacing[4],
          },
        ]}
      >
        <View
          style={[styles.iconLabelContainer, { marginTop: theme.spacing[1] }]}
        >
          <Icon
            name="layers-triple"
            size={scaleByWidth(6.5)}
            color={theme.colors.tertiary}
            style={{ marginRight: theme.spacing[2] }}
          />
          <Text variant="labelLarge">{game.platform}</Text>
        </View>
        <View
          style={[styles.iconLabelContainer, { marginTop: theme.spacing[1] }]}
        >
          <Icon
            name="shape"
            size={scaleByWidth(6.5)}
            color={theme.colors.tertiary}
            style={{ marginRight: theme.spacing[2] }}
          />
          <Text variant="labelLarge">{game.genre}</Text>
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
  },
  iconLabelContainer: {
    flexDirection: 'row',
  },
});
