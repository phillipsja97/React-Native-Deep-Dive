import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './Styles/Styles';
import { useNavigation, useRoute } from '@react-navigation/native';

function Feed() {

  const navigation = useNavigation();
  const route = useRoute();

  let detailResult = route.params;
    return (
      <View style={styles.center}>
        <Text style={styles.title}>
        {detailResult ? detailResult.data : 'Navigation Drawer'}
        </Text>
        {
          Platform.select({
            ios:
            <Button 
              title='Go To Feed Item'
              onPress={() => navigation.navigate('Detail', {screenName: 'My Detail Screen'})}
            />,
            android:
             <TouchableOpacity
              onPress={() => navigation.navigate('Detail', {screenName: 'My Detail Screen'})} >
              <Text style={styles.androidLink}>Go To Feed Item</Text>
            </TouchableOpacity>
          })
        }
      </View>
    )
}

export default Feed;

