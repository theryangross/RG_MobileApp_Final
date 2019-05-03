import React from 'react';
import { Text, View, Alert, FlatList, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import firebase, { db } from '../Services/Firebase';
import APIkeys from '../Constants/APIkeys';

//this holds the data until it finishes because state won't let you append, once foreach is done it pushes the entire list to state to display
let data= [];

export default class ScheduleScreen extends React.Component {
  //state cant append data
  state = {
    data: []
  }

  //checks if database exsists
  componentDidMount()  {
    if (!firebase.apps.length) { firebase.initializeApp(APIkeys.FirebaseConfig);}
  }

  //checks for the data
  componentWillMount() {
    this.requestData();
  }
  
  //actually getting the data via foreach loop
  requestData =() => {
    let sessions = db.collection("Schedule");

    //Promise. Talking to firebase, will promise to "keep the door open" so that when the data is ready it will take it in cuz of the .get function
    sessions.get()
      .then(query => {
        if (!query.empty) {
          query.docs.forEach(doc => {
            let SD = this.sessionData(doc);
            //pushes items to upper data function
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
          //pushes items into state
          data
        })
      })
      .catch(error => {
        Alert.alert(error.message);
      })

  }

  //parsing the data and pulling out the items, sends to requestData
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

  //displaying data
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data = {this.state.data}
          renderItem={({ item }) =>
            <ListItem
            title={`${item.Day} ${item.Date}`}
            subtitle={`${item.Time}\n${item.Name}`}
            bottomDivider={true}
            />
          }
          keyExtractor={item => item.id}
      
/>
      </View>
    );
  }
}

//styling
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 50,
   backgroundColor: '#483d8b',
   //color: '#ffffff',
  }
})

//FlatList from https://github.com/ReactNativeSchool/react-native-flatlist-demo/blob/master/FlatListDemo.js and https://www.youtube.com/watch?v=r-ENJLGrd3s and https://docs.expo.io/versions/latest/react-native/using-a-listview/