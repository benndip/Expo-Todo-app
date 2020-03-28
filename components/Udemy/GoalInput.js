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
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}> 
                        <Button
                            title="Cancle"
                            color="red"
                            onPress={props.onPressCancel}
                        />
                    </View>
                    <View style={styles.button}> 
                        <Button
                            title="Add"
                            onPress={addGoalHandler}
                        />
                    </View>
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
    buttonsContainer: {
        flexDirection:'row',
        width:'80%',
        justifyContent:"space-around",
        alignItems:'center',
        marginTop:20
    },
    button: {
        width:'40%',
    },
});
export default GoalInput;