import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Badge } from 'react-native-paper';

export const GamesListHeader = () => (
  <Appbar.Header>
    <Appbar.Content title="Free Games" titleStyle={styles.title} />
    <View>
      <Badge visible size={16} style={styles.badge}>
        3
      </Badge>
      <Appbar.Action icon="filter-variant" onPress={() => {}} />
    </View>
  </Appbar.Header>
);

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
  badge: {
    position: 'absolute',
    top: 6,
    right: 6,
  },
});
