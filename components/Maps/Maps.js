import React from 'react'
//import MapView from 'react-native-maps'
//import Permissions from 'react-native-maps'
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class Maps extends React.Component {
    constructor(props){
        super(props);
        this.state={
            longitude:0.5632,
            latitude:0.5675
        }
    }
    async componentDidMount(){

    }
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} 
        initialRegion={{
           // latitude,
            //longitude,
            longitudeDelta:0.0922,
            latitudeDelta:0.0421
        }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
   // width: Dimensions.get('window').width,
    //height: Dimensions.get('window').height,
    flex:1

  },
});

