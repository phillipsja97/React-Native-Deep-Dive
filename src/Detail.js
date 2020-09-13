import React, { useCallback } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, useFocusEffect, useNavigationState, useIsFocused } from '@react-navigation/native';
import { styles } from './Styles/Styles';

function Detail(props) {

  const navigation = useNavigation();
  const route = useRoute();
  const index = useNavigationState(state => state.index);

  console.log(`Screen Index: ${index}`);

  useFocusEffect(
    useCallback(() => {
      fetch('https://restcountries.eu/rest/v2/capital/tallin')
        .then(response => {
          response.json().then((data) => {
            console.log(data);
          })
        })
        return () => console.log("lost focus");
  }))

    return (
      <View style={styles.center}>
        <Text style={styles.title}>{route.params.screenName}</Text>
        {
          Platform.select({
            ios:
              <Button
              title='View Bottom Tabs'
              onPress={() => navigation.navigate('Bottom Tabs', {name: 'param 1'})}
              />,
            android:
              <TouchableOpacity
                onPress={() => navigation.navigate('Bottom Tabs', {name: 'param 1'})}>
              <Text style={styles.androidLink}>View Bottom Tabs</Text>
              </TouchableOpacity>
          })
        }
        {
        Platform.select({
            ios:
              <Button
              title='View Top Tabs'
              onPress={() => navigation.navigate('Top Tabs', {name: 'param 2'})}
              />,
            android:
              <TouchableOpacity
                onPress={() => navigation.navigate('Top Tabs', {name: 'param 2'})}>
              <Text style={styles.androidLink}>View Top Tabs</Text>
              </TouchableOpacity>
        })
        }
        {
        Platform.select({
            ios:
              <Button
                title='Pass Data Back'
                onPress={() => navigation.navigate('Feed', {data: 'hello data'})}
              />,
            android:
              <TouchableOpacity
                onPress={() => navigation.navigate('Feed', {data: 'hello data'})}>
              <Text style={styles.androidLink}>Pass Data Back</Text>
              </TouchableOpacity>
        })
        }
      </View>
    )
}

export default Detail;