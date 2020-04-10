/** @format */

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import globalStyles from '../styles/globalStyles';

const HomeScreen = ({ navigation }) => {
  const onPressHandler = () => {
    Alert.alert(
      'Nothing To Play',
      'Maybe you get your nephew to build a game.',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
      ]
    );
    s;
  };

  return (
    <View style={globalStyles.screen}>
      <Text style={globalStyles.title}>Good Moring Uncle</Text>
      <Text style={globalStyles.text}>What would you like to do today?</Text>
      <View style={globalStyles.spacer}>
        <Button
          style={globalStyles.button}
          title='Lets Play'
          onPress={() => navigation.navigate('Game')}
        />
      </View>
      <View style={globalStyles.spacer}>
        <Button
          style={globalStyles.button}
          title='CHOICE 2'
          onPress={onPressHandler}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
