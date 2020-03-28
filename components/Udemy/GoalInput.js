import React, {useState} from 'react';

import {Button, Modal, TextInput, View, StyleSheet} from "react-native";

const GoalInput = props => {
    const [enteredGoal,setEnteredGaol] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGaol(enteredText);
    };

    const addGoalHandler = () => {
        props.onPress(enteredGoal);
        setEnteredGaol('');
    }
    return(
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputAndButton} >
                <TextInput
                    style={styles.input}
                    placeholder="Course Goal"
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonsView}>
                    <Button
                        title="Cancle"
                        color="red"
                        onPress={props.onPressCancel}
                    />
                    <Button
                        title="Add"
                        style={styles.button}
                        onPress={addGoalHandler}
                    />
                </View>
            </View>
        </Modal>
    )
};
const styles = StyleSheet.create({
    inputAndButton: {
        justifyContent:'center',
        alignItems: 'center',
        flex:1
    },
    input: {
        width:'80%',
        height:45,
        borderWidth:1,
        paddingHorizontal:10,
        marginBottom:10
    },
    buttonsView: {
        flexDirection:'row',
        width:'80%',
        justifyContent:"space-around",
        alignItems:'center'
    },
    button: {
        width:'10%',
    },
});
export default GoalInput;