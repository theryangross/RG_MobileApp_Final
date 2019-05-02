import React from 'react';
import { Text, View, Image } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#483d8b' }}>
        <Image source={{uri: 'https://i.imgur.com/cso29Hs.png'}} style={{ width: 425, height: 750}} />
        <Text></Text>
      </View>
    );
  }
}

//Image from https://platform.crowdriff.com/m/cleveland-oh/album/28428?a=73-wl-dba783ce-ffa4-4407-a44b-00645802fc19