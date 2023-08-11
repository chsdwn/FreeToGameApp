import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { Image } from 'expo-image';

import { Icon } from '@/components';
import { roundness } from '@/config/theme';
import { useScale, useStyle, useTheme } from '@/hooks';
import { IGame } from '../types';

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
            margin: theme.spacing[2],
          },
        ],
        [theme.colors.surface, theme.spacing],
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
          () => ({ marginHorizontal: theme.spacing[2] }),
          [theme.spacing],
        )}
      >
        <Text
          variant="titleLarge"
          style={useStyle(
            () => [styles.title, { paddingVertical: theme.spacing[2] }],
            [theme.spacing],
          )}
        >
          {game.title}
        </Text>
        <View
          style={useStyle(
            () => [
              styles.platformGenreContainer,
              {
                marginBottom: theme.spacing[3],
                marginHorizontal: theme.spacing[4],
              },
            ],
            [theme.spacing],
          )}
        >
          <View
            style={useStyle(
              () => [
                styles.iconLabelContainer,
                { marginTop: theme.spacing[1] },
              ],
              [theme.spacing],
            )}
          >
            <Icon
              name="layers-triple"
              size={scaleByWidth(6.5)}
              color={theme.colors.tertiary}
              style={useStyle(
                () => ({ marginRight: theme.spacing[2] }),
                [theme.spacing],
              )}
            />
            <Text variant="labelLarge">{game.platform}</Text>
          </View>
          <View
            style={useStyle(
              () => [
                styles.iconLabelContainer,
                { marginTop: theme.spacing[1] },
              ],
              [theme.spacing],
            )}
          >
            <Icon
              name="shape"
              size={scaleByWidth(6.5)}
              color={theme.colors.tertiary}
              style={useStyle(
                () => ({ marginRight: theme.spacing[2] }),
                [theme.spacing],
              )}
            />
            <Text variant="labelLarge">{game.genre}</Text>
          </View>
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
    alignItems: 'center',
  },
});
