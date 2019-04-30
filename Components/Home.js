import React from 'react';
import { Text, View, Image } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={{uri: 'https://i.imgur.com/cso29Hs.png'}} style={{ width: 425, height: 750}} />
        <Text></Text>
      </View>
    );
  }
}