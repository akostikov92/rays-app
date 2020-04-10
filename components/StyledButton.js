/** @format */

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const StyledButton = ({ pressHandler, text }) => {
  return (
    <View>
      <TouchableOpacity onPress={pressHandler} style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StyledButton;

const styles = StyleSheet.create({
  button: {
    flex: 0,
    width: '75%',
    padding: 25,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
});
