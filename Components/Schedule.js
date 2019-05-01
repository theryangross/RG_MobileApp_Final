import React from 'react';
import { Text, View, Alert, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase, { db } from '../Services/Firebase';
import APIkeys from '../Constants/APIkeys';

let data= [];

export default class ScheduleScreen extends React.Component {
  state = {
    data: []
  }

  componentDidMount()  {
    if (!firebase.apps.length) { firebase.initializeApp(APIkeys.FirebaseConfig);}
  }

  componentWillMount() {
    this.requestData();
  }

  requestData =() => {
    let sessions = db.collection("Schedule");

    sessions.get()
      .then(query => {
        if (!query.empty) {
          query.docs.forEach(doc => {
            let SD = this.sessionData(doc);
            data.push(SD);
            console.log("Date: " + SD.Date);
            console.log("Day: " + SD.Day);
            console.log("Name: " + SD.Name);
            console.log("Time: " + SD.Time);
          })
        }
      })
      .then(() => {
        this.setState({
          data
        })
      })
      .catch(error => {
        Alert.alert(error.message);
      })

  }

  sessionData = (doc) => {
    const id = doc.id;
    const { Date, Day, Name, Time }= doc.data();

    let SessionData = {
      id,
      Date,
      Day,
      Name,
      Time
    };
    return SessionData;
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data = {this.state.data}
          renderItem={({ item }) =>
            <ListItem
            title={item.Day}
            subtitle={`${item.Date} ${item.Time}\n${item.Name}`}
            bottomDivider={true}
            />
          }
          keyExtractor={item => item.id}
      
/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 50
  }
})

