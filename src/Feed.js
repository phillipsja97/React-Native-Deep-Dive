import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './Styles/Styles';

class Feed extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Navigation Drawer</Text>
        <Button
        title='Go To Feed Items'
        onPress={() => {this.props.navigation.navigate('Detail', {screenName: 'My Detail Screen'})}}
        />
      </View>
    )
  }
}

export default Feed;

