import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './Styles/Styles';

class Detail extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>{this.props.route.params.screenName}</Text>
        <Button
        title='View Bottom Tabs'
        onPress={() => this.props.navigation.navigate('Bottom Tabs', {name: 'param 1'})}
        />
        <Button
        title='View Top Tabs'
        onPress={() => this.props.navigation.navigate('Top Tabs', {name: 'param 2'})}
        />
        <Button
        title='Pass Data Back'
        onPress={() => this.props.navigation.navigate('Feed', {data: 'hello data'})}
        />
      </View>
    )
  }
}

export default Detail;