import React,{Component} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Text
} from 'react-native';


import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather'

import styles from './EditProfile.styles';


const Detail = (props) => {
    return (
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <TextInput
                placeholder={props.description}
                style={styles.input}
            />
            <MaterialIcons
                name={props.iconName}
                size={20}
                color='#63004F'
            />
        </View>
    )
}


export default class EditProfile extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render(){
        return(
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.mainView1}>
                        <TouchableOpacity style={styles.discard}>
                            <Entypo name="cross" size={20} color="#63004F" />
                            <Text style={styles.discardText}>Discard</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.save}>
                            <Feather name="check" size={20} color="#63004F"/>
                            <Text style={styles.saveText}>Save</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.mainView2}>
                    <View style={styles.viewForPicture}>
                        <Image 
                        source={require('../../assets/image.jpeg')}
                        style={styles.image}
                        />
                    </View>
                    <TouchableOpacity  style={styles.cameraIcon}>
                        <SimpleLineIcons 
                        name="camera" size={30} color="#63004F"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.mainView3}>
                    <Text style={styles.userDetailsText}>User Details</Text>
                    <View style={styles.subview3}>
                        <Detail 
                            description="Name"
                            iconName="create"
                        />
                        <Detail 
                            description="Language"
                            iconName="language"
                        />
                        <Detail 
                            description="Location"
                            iconName="my-location"
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}