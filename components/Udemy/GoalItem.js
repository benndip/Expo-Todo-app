import React from 'react';
import {Text, View, StyleSheet,TouchableOpacity} from "react-native";

const GoalItem = props =>{
    return(
        <TouchableOpacity onPress={props.onPress.bind(this,props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
    listItem:{
        padding:10,
        backgroundColor:'#ccc',
        borderWidth:1,
        borderColor:'#000',
        marginVertical:10,
        alignItems: 'center',
    }
});
export default GoalItem;