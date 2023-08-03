import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Card, DefaultTheme, Text, useTheme } from 'react-native-paper';

import { Icon } from '@/components';
import { defaultTheme } from '@/config/theme';
import type { IGame } from '../types';

type IProps = {
  game: IGame;
};
export const GameCard = React.memo(({ game }: IProps) => {
  const theme = useTheme();

  return (
    <Card elevation={3}>
      <Image
        source={{ uri: game.thumbnail }}
        style={styles.img}
        resizeMode="contain"
      />
      <Card.Title
        title={<Text variant="bodyMedium">{game.title}</Text>}
        titleStyle={styles.title}
      />
      <View style={[styles.line, { borderTopColor: theme.colors.onSurface }]} />
      <View style={styles.platformGenreContainer}>
        <View style={styles.iconLabelContainer}>
          <Icon
            name="layers-triple"
            size={22}
            color={theme.colors.tertiary}
            style={styles.icon}
          />
          <Text variant="labelMedium">{game.platform}</Text>
        </View>
        <View style={styles.iconLabelContainer}>
          <Icon
            name="shape"
            size={22}
            color={theme.colors.tertiary}
            style={styles.icon}
          />
          <Text variant="labelMedium">{game.genre}</Text>
        </View>
      </View>
    </Card>
  );
});

const styles = StyleSheet.create({
  img: {
    aspectRatio: 365 / 206,
    borderRadius: DefaultTheme.roundness * 2,
  },
  title: {
    textAlign: 'left',
  },
  line: {
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: defaultTheme.spacing[3],
  },
  platformGenreContainer: {
    marginVertical: defaultTheme.spacing[3],
    marginHorizontal: defaultTheme.spacing[4],
  },
  iconLabelContainer: {
    flexDirection: 'row',
    marginTop: defaultTheme.spacing[1],
  },
  icon: {
    marginRight: defaultTheme.spacing[2],
  },
});
