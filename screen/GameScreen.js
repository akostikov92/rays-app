/** @format */

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import globalStyles from '../styles/globalStyles';

import DeckOfCards from '../components/DeckOfCards/DeckOfCards';
import Card from '../components/DeckOfCards/Card';

const GameScreen = ({ navigation }) => {
  console.log(DeckOfCards[3]);

  return (
    <View style={globalStyles.screen}>
      <Text style={globalStyles.title}>
        Good... You're nephew is finally building your game.
      </Text>
      <Card card={DeckOfCards[3]} />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({});
