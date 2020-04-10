/** @format */

import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Card = ({ card }) => {
  return (
    <View style={styles.card}>
      <Image source={card.img}></Image>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 102,
    height: 150,
  },
});
