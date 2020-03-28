import React, { Component } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import styles from './Profile.styles';
import Card from './Card';
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <ScrollView contentContainerStyle={styles.scroll}>
            <Card>
               <View style={styles.profileView}>
                <Image 
                style={styles.image}
                source={require()}
                />
               </View>
            </Card> 
        </ScrollView>
    );
  }
}

export default Profile;
