import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../Styles/Styles.js';
import { useIsFocused } from '@react-navigation/native';

export default Tab2 = () => {

  const isFocused = useIsFocused();
  console.log(isFocused);
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Tab2</Text>
    </View>
  )
}